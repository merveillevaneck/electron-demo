import { useState, useEffect, useRef } from 'react';

export const useDelay = (delayInMilliseconds: number) => {
    const [fadeIn, setFadeIn] = useState<boolean>(false);
    const started = useRef<boolean>(false);

    useEffect(() => {
        if (!started.current) {
            setTimeout(() => setFadeIn(true));
            started.current = true;
        }
    }, [setFadeIn]);

    return fadeIn;
}