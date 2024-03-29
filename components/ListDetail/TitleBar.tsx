import { GlobalNavigationContext } from 'components/Providers';
import Link from 'next/link';
import * as React from 'react';
import { ArrowLeft, Menu, X } from 'react-feather';
//import { GreenTick } from 'components/ProsCard';

interface Props {
  title: string;
  globalMenu?: boolean;
  backButton?: boolean;
  backButtonHref?: string;
  magicTitle?: boolean;
  titleRef?: React.MutableRefObject<HTMLParagraphElement>;
  scrollContainerRef?: React.MutableRefObject<HTMLDivElement>;
  children?: React.ReactNode;
  leadingAccessory?: React.ReactNode;
  trailingAccessory?: React.ReactNode;
}

export function TitleBar({
  title,
  globalMenu = true,
  backButton = false,
  backButtonHref,
  magicTitle = false,
  titleRef = null,
  scrollContainerRef = null,
  leadingAccessory = null,
  trailingAccessory = null,
  children
}: Props) {
  const { isOpen, setIsOpen } = React.useContext(GlobalNavigationContext);
  const [darkMode, setDarkMode] = React.useState(false);
  const [offset, setOffset] = React.useState(200);
  const [opacity, _setOpacity] = React.useState(0);
  const [currentScrollOffset, _setCurrentScrollOffset] = React.useState(0);

  const [initialTitleOffsets, _setInitialTitleOffsets] = React.useState({
    top: 0,
    bottom: 0
  });

  const initialTitleOffsetsRef = React.useRef(initialTitleOffsets);
  const setInitialTitleOffsets = (data) => {
    initialTitleOffsetsRef.current = data;
    _setInitialTitleOffsets(data);
  };

  const opacityRef = React.useRef(opacity);
  const setOpacity = (data) => {
    opacityRef.current = data;
    _setOpacity(data);
  };

  const currentScrollOffsetRef = React.useRef(currentScrollOffset);
  const setCurrentScrollOffset = (data) => {
    currentScrollOffsetRef.current = data;
    _setCurrentScrollOffset(data);
  };

  const handler = React.useCallback(() => {
    const shadowOpacity = scrollContainerRef.current.scrollTop / 200;
    setCurrentScrollOffset(shadowOpacity > 0.12 ? 0.12 : shadowOpacity);

    if (!titleRef?.current || !initialTitleOffsetsRef?.current) return;

    const titleTop = titleRef.current.getBoundingClientRect().top - 48;
    const titleBottom = titleRef.current.getBoundingClientRect().bottom - 56;
    const initialOffsets = initialTitleOffsetsRef.current;

    const offsetAmount =
      parseFloat((titleBottom / initialOffsets.bottom).toFixed(2)) * 100;

    const opacityOffset =
      parseFloat((titleTop / initialOffsets.top).toFixed(2)) * -1;

    setOffset(Math.min(Math.max(offsetAmount, 0), 100));
    setOpacity(opacityOffset);
  }, [titleRef, scrollContainerRef]);

  React.useEffect(() => {
    const testes = scrollContainerRef?.current?.addEventListener(
      'scroll',
      handler
    );
    return () => testes;
  }, [handler, scrollContainerRef]);

  React.useEffect(() => {
    if (!titleRef?.current || !scrollContainerRef?.current) return;
    scrollContainerRef.current.scrollTop = 0;
    setOpacity(0);
    setInitialTitleOffsets({
      bottom: titleRef.current.getBoundingClientRect().bottom - 56,
      top: titleRef.current.getBoundingClientRect().top - 48
    });
  }, [title, titleRef, scrollContainerRef]);

  React.useEffect(() => {
    const isDarkMode =
      window?.matchMedia &&
      window?.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) setDarkMode(true);
  }, []);

  return (
    <>
      <div
        className={`filter-blur shadow bg-gray-100 dark:bg-black  sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900`}
      >
        <div className="flex flex-none items-center justify-between">
          <span className="flex items-center space-x-3">
            {globalMenu && (
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
              >
                {isOpen ? (
                  <X size={16} className="text-primary" />
                ) : (
                  <Menu size={16} className="text-primary" />
                )}
              </span>
            )}

            {backButton && (
              <Link
                href={backButtonHref}
                className="text-primary flex items-center justify-center rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
              >
                <ArrowLeft className="text-primary" />
              </Link>
            )}

            {leadingAccessory && <>{leadingAccessory}</>}

            <h2
              style={
                magicTitle
                  ? {
                      transform: `translateY(${offset}%)`,
                      opacity: `${opacity}`
                    }
                  : {}
              }
              className="text-primary transform-gpu text-sm font-bold line-clamp-1"
            >
              {title}
            </h2>
          </span>

          {trailingAccessory && <>{trailingAccessory}</>}
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
