// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const mockCategory = {
  id: 0,
  name: "programming",
};

const mockTags = [
  { id: 0, name: "평생소장" },
  { id: 0, name: "next" },
  { id: 0, name: "TS" },
];

const lecturesData = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: "완벽한 Next, TS, test 강의",
      tags: mockTags,
      description: "이 강의는 설명설명설명설명설명설명설명설명설명설명설명설명",
      thumbs: "/thumbs.jpg",
      isHot: true,
      isNew: true,
    },
  ],
};

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(lecturesData);
}
