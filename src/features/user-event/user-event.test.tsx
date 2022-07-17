import React from 'react'
import { cleanup, render, screen } from "@testing-library/react";
import { UserEventComponent } from "./userEvent";
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
    it("should update input value correctly", async () => {
        render(<UserEventComponent/>)
        const inputValue: HTMLInputElement = screen.getByPlaceholderText('Enter');
        await userEvent.type(inputValue, "Hello")
        expect(inputValue.value).toBe("Hello")
    })
})

describe("button click event", () => {
    it("should not call output func", async () => {
        const outputFunc = jest.fn();
        render(<UserEventComponent outputFunc={outputFunc}/>)
        await userEvent.click(screen.getByRole('button'))
        expect(outputFunc).not.toHaveBeenCalled()
    })
    it("should call output func", async () => {
        const outputFunc = jest.fn();
        render(<UserEventComponent outputFunc={outputFunc}/>)
        await userEvent.type(screen.getByPlaceholderText('Enter'), "Hello")
        await userEvent.click(screen.getByRole('button'))
        expect(outputFunc).toHaveBeenCalledTimes(1)
    })
})