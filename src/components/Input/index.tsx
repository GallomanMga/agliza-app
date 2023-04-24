import React from "react";
import { TextInputProps } from "react-native"

import { Container, TypeProps, Label } from './styles'

type Props = TextInputProps & {
    type?: TypeProps
    label?: string;
}

export function Input({ label, type = 'primary', ...rest}: Props ){
    return (
         <>
         <Label>{label}</Label>
         <Container 
            type={type}
            {...rest}
        />
        </>
    )
}