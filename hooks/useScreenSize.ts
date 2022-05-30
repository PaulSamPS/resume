import React from 'react';

export const useScreenSize = (): number => {
  const [screenWidth, setScreenWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeWindow);
    resizeWindow();
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return screenWidth;
};
