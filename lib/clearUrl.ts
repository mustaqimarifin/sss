export const getSlug = (url: string) => {
  const { pathname } = new URL(url);

  const path = pathname.substring(6);
  return path;
};

export const getURL = (url: string) => {
  const { origin, pathname } = new URL(url);
  return `${origin}${pathname}`;
};
