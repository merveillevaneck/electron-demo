import React, { useMemo } from 'react'
import { View, ITextProps } from 'native-base';
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';

export const DEFAULT_DIM = {
    WIDTH: '100%',
    HEIGHT: '60PX',
}

export const DEFAULT_TITLE = {
    COLOR: 'white',
    FONT_SIZE: 30,
    FONT_WEIGHT: 'regular',
}

export const DEFAULT_SUBTITLE = {
    COLOR: 'rgba(255, 255, 255, 0.5)',
    FONT_SIZE: 18,
    FONT_WEIGHT: 'regular',
}

export interface HeaderProps extends IViewProps {
    title?: React.ReactNode,
    subtitle?: React.ReactNode,
    titleProps?: ITextProps,
    _title?: ITextProps['style'],
    subtitleProps?: ITextProps,
    _subtitle?: ITextProps['style'],
    extra?: React.ReactNode[],
}

export const Header: React.FC<HeaderProps> = (props) => {

    const {
        extra,
        width: $width,
        height: $height,
        titleProps,
        title,
        _title,
        subtitleProps,
        subtitle,
        _subtitle,
        ...rest
    } = props;

    const dimensions = useMemo(() => ({
        width: $width ?? DEFAULT_DIM.WIDTH,
        height: $height ?? DEFAULT_DIM.HEIGHT,
    }), [$width, $height]);

    return (
        <React.Fragment>
            <View
                {...dimensions}
                backgroundColor='transparent'
            />
            <View
                {...dimensions}
                backgroundColor='palevioletred'
                position='fixed'
                top={0}
                left={0}
                right={0}
                display='flex'
                padding={10}
                justifyContent='space-between'
                alignItems='center'
                flexDirection='row'
                {...rest}
            >
                    {title}
                    {subtitle}
                <View
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-evely'
                    alignItems='center'
                    marginRight='5px'
                >
                    {extra}
                </View>
            </View>
        </React.Fragment>
    );
}
