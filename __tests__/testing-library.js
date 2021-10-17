import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("Home", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
  });

  it("메뉴가 렌더링 되어야 한다.", () => {
    const menu = screen.getByRole("navigation", {
      name: "SeoWS2",
    });

    expect(menu).toBeInTheDocument();
  });

  it("배너가 렌더링 되어야 한다.", () => {
    const banner = screen.getByRole("banner", {});

    expect(banner).toBeInTheDocument();
  });
});
