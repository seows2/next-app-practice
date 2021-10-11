import React from "react";
import { render, screen } from "@testing-library/react";
import Detail from "../pages/detail";

describe("Detail", () => {
  it("메뉴가 렌더링 되어야 한다.", () => {
    render(<Detail />);

    const menu = screen.getByRole("navigation", {
      name: "SeoWS2",
    });

    expect(menu).toBeInTheDocument();
  });
});
