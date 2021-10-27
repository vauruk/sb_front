import { ChangeEvent, TouchEvent } from "react";

export interface InputProps {
    onChange?: (event: ChangeEvent<{ value: string }>) => void,
    onPress?: () => void,
    value?: string,
}