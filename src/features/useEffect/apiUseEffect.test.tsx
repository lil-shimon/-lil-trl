import React from 'react'
import { render, screen } from "@testing-library/react";
import { ApiUseEffectComponent } from "./apiUseEffect";

describe("useEffect rendering", () => {
    it('should render only after async func resolved', async () => {
        render(<ApiUseEffectComponent />)
        expect(screen.queryByText(/I am/)).toBeNull();
        expect(await screen.findByText(/I am/)).toBeInTheDocument();
    })
})