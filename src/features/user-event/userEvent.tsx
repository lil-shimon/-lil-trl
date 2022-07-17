import { useUserEvent } from "./useUserEvent";
import { FC } from "react";

interface Props {
    outputFunc?: (value: string) => void;
}

export const UserEventComponent: FC<Props> = ({outputFunc}) => {
    const { input, handleInput } = useUserEvent()

    const func = () => {
        if (input && outputFunc) outputFunc(input)
    }

    return (
        <>
            <input type="text" placeholder="Enter" value={input} onChange={handleInput}/>
            <button onClick={func}>button</button>
        </>
    )
}