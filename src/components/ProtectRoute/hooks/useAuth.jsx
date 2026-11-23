import { useCallback, useState } from "react";

export const useAuth = () => {
    const [isValidLogin, setValidLogin] = useState(false);
    const [isFetching, setFeching] = useState(true);

    const hasLogin = useCallback(() => {
        setFeching(true);
        fetch('/api/auth/me', {
            headers: { 'Accept': 'application/json' }
        })
        .then((response) => response.json())
        .then((response) => {
            const isAdmin = response.auth && response.decoded?.includes("admin");
            setValidLogin(isAdmin);
        })
        .catch(() => {
            setValidLogin(false);
        }).finally(() => {
            setFeching(false);
        })
    }, [])

    return {
        isValidLogin,
        hasLogin,
        isFetching
    }
}
