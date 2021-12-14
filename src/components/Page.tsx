import React, { useMemo } from 'react'
import { View, Fade } from 'native-base';
import { useDelay } from '../hooks';
import { ViewProps } from '../types';

export interface PageProps extends ViewProps {
    fadeInDelay?: number;
}

export const Page: React.FC<PageProps> = (props) => {

    const { children, fadeInDelay = 0 } = props;

    const _in = useDelay(0);

    const _children = useMemo(() => (
            <View 
                width='100%'
                minHeight='calc(100vh - 60px)'
                display='flex'
                justifyContent='center'
                alignItems='center'
                {...props}
            >
                {children}
            </View>
    ), [props, children])

    if (fadeInDelay) return (
        <Fade in={_in}>
            {_children}
        </Fade>
    );

    return (
        <>
        {_children}
        </>
    );
}
