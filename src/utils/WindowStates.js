import {useState, useEffect, useLayoutEffect} from 'react';

const useDeviceSize = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return [width, height]
}

const useIsOverflow = (ref, callback) => {
  const [isOverflow, setIsOverflow] = useState(undefined);

  useLayoutEffect(() => {
    const current = ref.current;

    const trigger = () => {
        if (current === undefined) return;
        const hasOverflow = current.scrollWidth > current.clientWidth;
        console.log(current.scrollWidth + " vs " + current.clientWidth);

        setIsOverflow(hasOverflow);

        if (callback) callback(hasOverflow);
    };

    window.addEventListener('resize', trigger);
    window.addEventListener('load', trigger);
    trigger();

    return () => {
        window.removeEventListener('resize', trigger);
        window.removeEventListener('load', trigger);
    }
  }, [callback, ref]);

  return isOverflow;
};

export { useDeviceSize, useIsOverflow };
