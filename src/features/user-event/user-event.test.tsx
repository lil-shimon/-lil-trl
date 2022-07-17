import React from 'react'
import { cleanup, render, screen } from "@testing-library/react";
import { UserEventComponent } from "./user-event";
import userEvent from "@testing-library/user-event";

afterEach((() => cleanup()))

describe("UserEvent", () => {
    it('should render all the elements correctly', () => {
        render(<UserEventComponent/>)
        expect(screen.getByRole('button')).toBeTruthy();
        expect(screen.getByPlaceholderText('Enter')).toBeTruthy()
    });
})

describe("input onchange event", () => {
    it("should update input value correctly", () => {
        render(<UserEventComponent/>)
        const inputValue: HTMLInputElement = screen.getByPlaceholderText('Enter');
        userEvent.type(inputValue, "Hello")
        expect(inputValue.value).toBe("Hello")
    })
})