import { useEffect, useState } from "react";
import axios from "axios";

type UserType = {
    username: string;
    email: string
}

export const useApiUseEffect = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const fetchJSON = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        return res.data
    }
    useEffect(() => {
        const func = async () => {
            const fetchedUser = await fetchJSON()
            setUser(fetchedUser)
        }
        func()
    }, [])
    return { user }
}