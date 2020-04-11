import {useState} from 'react';


const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = val => {
        setStoredValue(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    }
    return [storedValue, setValue]
}

export default useLocalStorage