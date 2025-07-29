import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button Component", () => {
  it("renders a default button", () => {
    const { getByText } = render(<Button>Click Here</Button>);
    expect(getByText("Click Here")).toBeInTheDocument();
  });

  it("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled={false}>Click Here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies the correct css class for different variants", () => {
    const { rerender } = render(<Button variant="primary">Click Here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">Click Here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });

  it("applies the correct css class for different sizes", () => {
    const { rerender } = render(<Button size="small">Click Here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-sm");

    rerender(<Button size="large">Click Here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-lg");
  });
});
