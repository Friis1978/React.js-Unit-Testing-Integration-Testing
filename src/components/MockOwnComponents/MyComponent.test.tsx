import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { MyDrawer } from "../MockMaterialDrawer/Drawer";
import { MyComponent } from "./MyComponent";

jest.mock("../MockMaterialDrawer/Drawer");
mocked(MyDrawer).mockImplementation(() => <div>mocked: drawer</div>);

describe("Mock Own Component", () => {
  it("renders MyDrawer", () => {
    render(<MyComponent />);
    expect(
      screen.queryByText("Hello Drawer Component!")
    ).not.toBeInTheDocument();
    expect(screen.getByText("mocked: drawer")).toBeInTheDocument();
  });
});
