import React, {useState} from 'react';
import styled from 'styled-components';

const Header = () =>{

    const Headers = styled.div`
        height: 40vh;
        width: 95vw;

    `;


    const [buttonText, setButtonText] = useState('Dark Mode')
    const [darkMode, setDarkMode] = useState(false)

    const toggleButton = e =>{
        e.preventDefault();
        setDarkMode(!darkMode)
    }



    return(
        <Headers>
            <button 
            onClick={toggleButton}
            className={darkMode ? 'button-darkMode' : ''}
            >{buttonText}</button>
        </Headers>
    )
}

export default Header