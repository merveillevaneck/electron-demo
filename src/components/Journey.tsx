import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { Fade } from 'native-base';

const DEFAULT_DELAY_TIME = 500;

interface JourneyProps {
    index: number;
    children?: React.ReactNode | React.ReactNode[];
}

export const useJourneyIndex = (size: number, wrap: boolean = true) => {
    const [pos, setPos] = useState(0);

    const next = useCallback(() => {
        if (pos === size - 1) {
            if (wrap) setPos(0);
            return;
        }
        setPos(p => p + 1);
    }, [pos, setPos, size, wrap]);

    return useMemo(() => ([
        pos, next
    ] as const), [
        pos, next
    ]);
}

export const Journey: React.FC<JourneyProps> = (props) => {

    const { index, children } = props;

    const [_in, setIn] = useState(false);

    useEffect(() => {
        console.log(index);
        setTimeout(() => {
            setIn(true);
        }, DEFAULT_DELAY_TIME);
        return () => {
            setIn(false);
        };
    }, [index]);

    const current = useMemo(() => {
        if (!Array.isArray(children) && !children) return;
        if (!Array.isArray(children) || children.length === 0 ||!children)
            return null;
        return children[index] ?? null;
    }, [children, index])


    return (
        <Fade in={_in} exitDuration={0}>
            {_in && current}
        </Fade>
    );
}
