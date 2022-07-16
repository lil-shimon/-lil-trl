import React from 'react'
import { render, screen } from "@testing-library/react";

function UserEvent() {
    return null;
}

describe("UserEvent", () => {
    it('should render all the elements correctly', () => {
        render(<UserEvent/>)
        expect(screen.getByRole('button')).toBeTruthy();
        expect(screen.getByPlaceholderText('Enter')).toBeTruthy()
    });
})