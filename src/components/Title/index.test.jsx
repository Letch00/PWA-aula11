import { describe, beforeEach, afterEach, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Title } from ".";
import styles from "./styles.module.scss";

describe("Title", () => {
    let text;
    let props;

    beforeEach(() => {
        text = "Hello";

        props = {
            text,
        };
    });
    
    afterEach(() => {
        cleanup();
    });
    
    it("renders correctly the component", () => {
        const { container } = render(<Title {...props} />);

        expect(container).toMatchSnapshot();
    });

    describe("when the title is secondary", () => {
        beforeEach(() => {
            props = {
                ...props,
                isSecondary: true,
            };
        });
        it("renders the title with underline", () => {
            render(<Title {...props} />);

            expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
            expect(screen.getByText(text)).toHaveClass(styles.secondary);
        });
    });
});