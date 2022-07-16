import React from 'react'
import { render, screen } from "@testing-library/react";
import { UserEventComponent } from "./user-event";

function UserEvent() {
    return null;
}

describe("UserEvent", () => {
    it('should render all the elements correctly', () => {
        render(<UserEventComponent/>)
        expect(screen.getByRole('button')).toBeTruthy();
        expect(screen.getByPlaceholderText('Enter')).toBeTruthy()
    });
})