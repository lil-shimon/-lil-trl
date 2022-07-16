import React from 'react'
import { render, screen } from '@testing-library/react'
import { RenderComponent } from "./render";

describe("Rendering", () => {
    it("Should render all the elements correctly", () => {
        render(<RenderComponent/>);
        screen.getByRole("heading");
        expect(screen.getByRole("heading")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
        expect(screen.getAllByRole("button")[0]).toBeTruthy();
        expect(screen.getAllByRole("button")[1]).toBeTruthy();
        expect(screen.getByText("lil-shimon")).toBeTruthy();
        expect(screen.queryByText("none")).toBeNull()
        expect(screen.getByTestId("react")).toBeTruthy();
    })
})