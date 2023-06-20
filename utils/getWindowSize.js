export const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  if (innerWidth < 640) return true;
  return false;
};
