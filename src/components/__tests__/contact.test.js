 import {screen, render} from"@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
import { act } from 'react';


test("should render contact page",()=>{
    render( <Contact/>)
    const heading=screen.getByRole("heading")

    expect(heading).toBeInTheDocument();
});

test("should render contact page",()=>{
    render( <Contact/>)
    const name=screen.getByPlaceholderText("Name")

    expect(name).toBeInTheDocument();
});

test("should render contact page",()=>{
    render( <Contact/>)
    const input=screen.getAllByRole("textbox")

    expect(input.length).toBe(2);
});