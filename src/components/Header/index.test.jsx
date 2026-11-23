import react from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { UsersContext } from "../../contexts/UsersProvider"
import Header from "."
import { before } from "lodash";

describe("Header", () => {
    let countUsers;

    beforeEach(() => {
        countUsers = 0;
    });

    const renderComponent = (component, value = { countUsers }) => {
        return (
            <UsersContext.Provider value={value}>
                {component}
            </UsersContext.Provider>
        )
    }

    it("renders correctly the component", () => {
        const { container } = render(renderComponent(<Header />));

        expect(container).toMatchSnapshot();
    });

    describe("when count is more than 0", () => {
        beforeEach(() => {
            countUsers = 1;
        });

        it("renders the component correctly", () => {
            render(renderComponent(<Header />, { countUsers }));

            expect(screen.getByText(`Users: ${countUsers}`)).toBeInTheDocument();
        })
    })
});