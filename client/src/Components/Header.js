import React, {useState} from 'react';
import styled from 'styled-components';
import useDarkMode from './Hooks/useDarkMode';

export const checkText = currentText => {
    return currentText;
}


const Header = () =>{

    const Headers = styled.div`
        height: 40vh;
        width: 95vw;
        // background-color: white;
    `;


    const [buttonText, setButtonText] = useDarkMode('text','Light Mode')
    const [darkMode, setDarkMode] = useDarkMode('bg', false)

    const toggleButton = e =>{
        e.preventDefault();
        setDarkMode(!darkMode)
        setButtonText('Dark Mode')
    }



    return(
        <Headers>
            <button 
            onClick={toggleButton}
            className={darkMode ? 'button-darkMode' : ''}
            data-testid="change"
            >{checkText(buttonText)}</button>
        </Headers>
    )
}

export default Header