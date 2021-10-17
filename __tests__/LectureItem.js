import React from "react";
import { render, screen } from "@testing-library/react";
import LectureItem from "../components/lecture/LectureItem";

const mockCategory = {
  id: 0,
  name: "programming",
};

const mockTags = [
  { id: 0, name: "평생소장" },
  { id: 1, name: "next" },
  { id: 2, name: "TS" },
];
const lectureMockData = {
  id: 0,
  category: mockCategory,
  title: "완벽한 Next, TS, test 강의1",
  tags: mockTags,
  description: "이 강의는 설명설명설명설명설명설명설명설명설명설명설명설명1",
  thumb: "/thumb.jpg",
  isHot: true,
  isNew: true,
};

describe("강의 아이템은", () => {
  beforeEach(() => {
    render(<LectureItem lecture={lectureMockData} />);
  });
  it("썸네일을 가지고 있어야 한다.", () => {
    const Thumb = screen.getByAltText("강의 이미지");

    expect(Thumb).toBeInTheDocument();
  });
  it("뱃지를 가지고 있어야 한다.", () => {
    const Badge = screen.getByText("평생소장");

    expect(Badge).toBeInTheDocument();
  });
  it("강의 제목을 렌더링 해야한다.", () => {
    const title = screen.getByRole("heading", {
      name: "완벽한 Next, TS, test 강의1",
    });

    expect(title).toBeInTheDocument();
  });
  it("강의 설명을 렌더링 해야한다.", () => {
    const description = screen.getByText(
      "이 강의는 설명설명설명설명설명설명설명설명설명설명설명설명1"
    );

    expect(description).toBeInTheDocument();
  });
});
