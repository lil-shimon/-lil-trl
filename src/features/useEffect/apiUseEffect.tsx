import { useApiUseEffect } from "./useApiUseEffect";

export const ApiUseEffectComponent = () => {
    const { user } = useApiUseEffect()
    return (
        <>
            {user ? (<p>I am {user.username} : {user.email}</p>) : null}
        </>
    )
}
