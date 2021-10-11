import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "../components/Menu";

describe("Menu", () => {
  it("메뉴는 Menu라는 텍스트를 가지고 있어야 한다.", () => {
    render(<Menu />);

    const menuText = screen.getByText("Menu");

    expect(menuText).toBeInTheDocument();
  });
});
