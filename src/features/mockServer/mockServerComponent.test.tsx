import { setupServer } from "msw/node";
import { rest } from "msw";
import { cleanup, render, screen } from "@testing-library/react";
import { MockServerComponent } from "./mockServerComponent";
import userEvent from "@testing-library/user-event";

const server = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ username: "John" }))
    })
)

beforeAll(() => server.listen())
afterEach(() => {
    server.resetHandlers()
    cleanup()
})
afterAll(() => server.close())

describe("mock api", () => {
    it("[fetch success] should display fetch data successfully and disable button", async () => {
        render(<MockServerComponent/>)
        await userEvent.click(screen.getByRole("button"))
        expect(await screen.findByRole("heading")).toHaveTextContent("John")
        expect(screen.getByRole("button")).toHaveAttribute("disabled")
    })
    it("[fetch failed] should display error message, no text on heading and enabled button",  async () => {
        server.use(
            rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
                return res(ctx.status(404))
            })
        )

        render(<MockServerComponent/>)
        await userEvent.click(screen.getByRole("button"))
        expect(await screen.findByTestId("error")).toHaveTextContent("fetch failed")
        expect(screen.queryByRole("heading")).toBeNull()
        expect(screen.getByRole("button")).not.toHaveAttribute("disabled")
    })
})