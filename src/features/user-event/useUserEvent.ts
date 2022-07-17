import { ChangeEvent, useState } from "react";

export const useUserEvent = () => {
    const [input, setInput] = useState('');
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    return {input, handleInput}
}