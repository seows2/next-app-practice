import React from "react";
import { render, screen } from "@testing-library/react";
import LectureGroup from "../components/lecture/LectureGroup";

describe("강의 목록은", () => {
  beforeEach(() => {
    render(<LectureGroup />);
  });
  it("제목을 가지고 있어야 한다.", () => {
    const lectureTitle = screen.getByRole("heading", {
      name: "이번 주 베스트셀링 강의",
    });

    expect(lectureTitle).toBeInTheDocument();
  });
  it("뱃지를 가지고 있어야 한다.", () => {
    const badge = screen.getByText("Best");

    expect(badge).toBeInTheDocument();
  });
});
