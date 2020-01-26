import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from '../App';
import Header, {checkText} from '../Components/Header';

test("renders without crashing", () => {
    render(<App />);
})


test("Text changes", () =>{
    const { getByTestId } = render(<Header />)
    const currentText = 'Light Mode';
    const expected = 'Dark Mode';
    const change = getByTestId('change');

    fireEvent.click(change)
    const actual = checkText(currentText)
    
    expect(change.innerHTML).toBe(currentText)
});