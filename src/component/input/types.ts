import { ChangeEvent } from "react";

export interface InputProps {
    onChange?: (event: ChangeEvent<{ value: string }>) => void,
    onPress?: () => void,
    onKeyDown?: (e: any) => void,
    value?: string,
    placeholder?: string,
}