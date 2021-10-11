import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("메뉴가 렌더링 되어야 한다.", () => {
    render(<Home />);

    const menu = screen.getByRole("navigation", {
      name: "SeoWS2",
    });

    expect(menu).toBeInTheDocument();
  });

  it("배너가 렌더링 되어야 한다.", () => {
    render(<Home />);

    const banner = screen.getByRole("banner", {});

    expect(banner).toBeInTheDocument();
  });
});
