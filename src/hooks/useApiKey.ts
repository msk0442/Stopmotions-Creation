import { useState, useEffect } from "react";

export function useApiKey(keyName: string) {
    const [apiKey, setApiKeyValue] = useState<string>("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            const storedKey = localStorage.getItem(keyName);
            if (storedKey) setApiKeyValue(storedKey);
        } catch {
            console.warn("Local storage is disabled.");
        }
        setIsLoaded(true);
    }, [keyName]);

    const setApiKey = (key: string) => {
        try {
            localStorage.setItem(keyName, key);
            setApiKeyValue(key);
        } catch {
            console.warn("Local storage is disabled.");
        }
    };

    const removeApiKey = () => {
        try {
            localStorage.removeItem(keyName);
            setApiKeyValue("");
        } catch {
            console.warn("Local storage is disabled.");
        }
    };

    return { apiKey, setApiKey, removeApiKey, isLoaded };
}
