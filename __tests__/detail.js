import React from "react";
import { render, screen } from "@testing-library/react";
import Detail from "../pages/detail";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("Detail", () => {
  it("메뉴가 렌더링 되어야 한다.", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Detail />
      </QueryClientProvider>
    );

    const menu = screen.getByRole("navigation", {
      name: "SeoWS2",
    });

    expect(menu).toBeInTheDocument();
  });
});
