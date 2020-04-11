import useLocalStorage from './useLocalStorage'
import {useEffect} from 'react';


const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    useEffect(() => {
        const body = document.querySelector('body');
        if(value){
            return body.classList.add('darkMode');
        }else{body.classList.remove('darkMode')}
    }, [value])

    return [value, setValue]
}

export default useDarkMode