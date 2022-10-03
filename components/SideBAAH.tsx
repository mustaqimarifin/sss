/* eslint-disable @next/next/no-img-element */
import { NoAnimationSidebar } from 'components/Sidebar';
import Image from 'next/future/image';
import Portal from '@reach/portal';
import { useEffect, useState } from 'react';
import { NavItem } from './Container';
import ImageWithTheme from './ImageWithTheme';

function X(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function removeHash(): void {
  let scrollV, scrollH;
  const loc = window.location;
  if ('pushState' in history)
    history.pushState('', document.title, loc.pathname + loc.search);
  else {
    // **  Prevent scrolling by storing the page's current scroll offset
    scrollV = document.body.scrollTop;
    scrollH = document.body.scrollLeft;

    loc.hash = '';

    //** */ Restore the scroll offset, should be flicker free
    document.body.scrollTop = scrollV;
    document.body.scrollLeft = scrollH;
  }
}

const SideBAAH = (): JSX.Element => {
  const [showComments, setShowComments] = useState(false);

  function handleCloseRemarq(): void {
    setShowComments(false);

    if (typeof window !== 'undefined') {
      removeHash();
      // window.location = ('' as unknown) as Location;
      // const url = new URL(window.location + "");
      // url.searchParams.delete("remarq-comments");
      // history.pushState({}, "", url + "");
    }
  }

  function handleHashChange(): void {
    // console.log(location.hash, e);
    if (location.hash === '#comments') {
      setShowComments(true);
    }
  }

  useEffect(() => {
    if (history.scrollRestoration) {
      //! Back off, browser, I got this...
      history.scrollRestoration = 'manual';
    }
    window.addEventListener('hashchange', handleHashChange);

    if (location.hash === '#comments') {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Portal>
      <NoAnimationSidebar isOpen={showComments} handleClose={handleCloseRemarq}>
        <div className="flex-grow flex flex-col bg-white dark:bg-gray-800 min-h-screen max-h-screen">
          <div className="flex-none flex flex-row items-center justify-between py-3 sm:py-4 px-3 sm:px-6 order-first">
            <h2 className="text-xl font-semibold dark:text-gray-100">
              {/*               Responses {count && <span>({count})</span>}
               */}{' '}
            </h2>
            <button
              onClick={handleCloseRemarq}
              className="border border-transparent focus-ring rounded-full"
              aria-label="Close sidebar comments"
            >
              <X className="text-gray-800 dark:text-gray-100 w-6" />
            </button>
          </div>

          <div className="flex border-t border-gray-200 dark:border-gray-600 px-3 sm:px-6 sm:static fixed bottom-0 left-0 right-0 z-10 bg-inherit">
            <div className="flex h-screen flex-col justify-between border-r bg-white">
              <div className="px-4 py-6">
                <span className="block h-10 w-32 rounded-lg bg-gray-200"></span>

                <nav className="mt-6 flex flex-col space-y-1">
                  <a
                    href="#"
                    className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className="ml-3 text-sm font-medium"> General </span>
                  </a>

                  <details className="group">
                    <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>

                      <span className="ml-3 text-sm font-medium"> Teams </span>

                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <nav className="mt-1.5 ml-8 flex flex-col">
                      <a
                        href="#"
                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                          />
                        </svg>

                        <span className="ml-3 text-sm font-medium">
                          {' '}
                          Banned Users{' '}
                        </span>
                      </a>

                      <a
                        href="#"
                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>

                        <span className="ml-3 text-sm font-medium">
                          {' '}
                          Calendar{' '}
                        </span>
                      </a>
                    </nav>
                  </details>

                  <a
                    href="#"
                    className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>

                    <span className="ml-3 text-sm font-medium"> Billing </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="ml-3 text-sm font-medium"> Invoices </span>
                  </a>

                  <details className="group">
                    <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span className="ml-3 text-sm font-medium">
                        {' '}
                        Account{' '}
                      </span>

                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <nav className="mt-1.5 ml-8 flex flex-col">
                      <a
                        href="#"
                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>

                        <span className="ml-3 text-sm font-medium">
                          {' '}
                          Details{' '}
                        </span>
                      </a>

                      <a
                        href="#"
                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>

                        <span className="ml-3 text-sm font-medium">
                          {' '}
                          Security{' '}
                        </span>
                      </a>

                      <form action="/logout">
                        <button
                          type="submit"
                          className="flex w-full items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>

                          <span className="ml-3 text-sm font-medium">
                            {' '}
                            Logout{' '}
                          </span>
                        </button>
                      </form>
                    </nav>
                  </details>
                </nav>
              </div>

              <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a
                  href="#"
                  className="flex shrink-0 items-center bg-white p-4 hover:bg-gray-50"
                >
                  <div className="ml-1.5">
                    <p className="text-xs">
                      <strong className="block font-medium">
                        Eric Frusciante
                      </strong>

                      <span> eric@frusciante.com </span>
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <NavItem href="/" text="Home" />
            <NavItem href="/guestbook" text="Guestbook" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/feed" text="JSON" />
          </div>
        </div>

        <div className="min-h-14 block sm:hidden">
          <div className="flex-grow flex flex-col overflow-hidden">
            <Image
              alt="Mustaqim Arifin"
              height={120}
              width={120}
              sizes="20vw"
              src="/wookie.png"
              className="rounded-full dark:invert transition-colors duration-200"
            />
          </div>
        </div>
      </NoAnimationSidebar>
    </Portal>
  );
};

export default SideBAAH;
