export const isMobile = () => {
  return window.matchMedia('(max-width: 600px)').matches;
};
