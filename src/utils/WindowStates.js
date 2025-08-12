import {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {useLocation} from 'react-router';

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

    return [width, height];
}

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
}

const useIsOverflow = (ref, callback) => {
    const [isOverflow, setIsOverflow] = useState(undefined);
    const location = useLocation();

    const trigger = useCallback((cur) => {
        if (cur === undefined) return;
        const hasOverflow = cur.scrollWidth > cur.clientWidth;

        setIsOverflow(hasOverflow);

        if (callback) callback(hasOverflow);
    }, [callback]);

    useLayoutEffect(() => {
        const current = ref.current;

        trigger(current);

        window.addEventListener('resize', ()=>{trigger(current)});
        window.addEventListener('load', ()=>{trigger(current)});

        return () => {
            window.removeEventListener('resize', ()=>{trigger(current)});
            window.removeEventListener('load', ()=>{trigger(current)});
        }
    }, [callback, ref, trigger]);

    useEffect(() => {
        setTimeout(()=>{trigger(ref.current)}, 1);
        
    }, [location, ref, trigger]);

    return isOverflow;
};

export { useDeviceSize, useScrollPosition, useIsOverflow };
