import React from 'react'
import { cleanup, render, screen } from "@testing-library/react";
import { ListComponent } from "./list";

afterEach(() => cleanup())

describe("rendering the list with props", () => {
    it('should display no data when no data passed',  () => {
        render(<ListComponent />)
        expect(screen.getByText('No data')).toBeInTheDocument()
    });
    it('should display data when data passed',  () => {
        const data = [
            { id: 1, item: "react", },
            { id: 2, item: "typescript" },
            { id: 3, item: 'rust' }
        ]
        render(<ListComponent data={data} />)
        const items = screen.getAllByRole('listitem').map(elem => elem.textContent)
        const dummyData = data.map(item => item.item)
        expect(items).toEqual(dummyData)
        expect(screen.queryByText('No data')).toBeNull()
    });
})