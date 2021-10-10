import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../components/Banner";

describe("Banner", () => {
  it("배너가 렌더링 되어야 한다.", () => {
    render(<Banner />);

    const banner = screen.getByText("배너");

    expect(banner).toBeInTheDocument();
  });
});
