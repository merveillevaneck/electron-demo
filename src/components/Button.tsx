import React from 'react';
import { Button as ButtonBase, IButtonProps } from 'native-base';

export interface ButtonProps extends IButtonProps {

}

export const Button: React.FC<ButtonProps> = (props) => {

    const {
        children
    } = props;

    return (
        <ButtonBase
          backgroundColor='transparent'
          borderColor='palevioletred'
          borderWidth={0.5}
          width='70%'
          maxWidth='600px'
          height='50px'
          _pressed={{
            borderColor: 'lightblue'
          }}
          marginTop='20px'
          {...props}
        >
            {children}
        </ButtonBase>
    )
}

export default ButtonBase;