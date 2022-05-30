import React from 'react';

export const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  console.log(screenWidth);

  React.useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeWindow);
    resizeWindow();
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return { screenWidth };
};
