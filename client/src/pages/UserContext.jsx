import { createContext, useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export const UserContext = createContext();

export function UserConTextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {

        if (!user) {
            axiosClient.get('/user/profile').then(({ data }) => {
                console.log(data)
                setUser(data);
                setReady(true);
            })
        }

    }, []);
    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}