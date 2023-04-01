// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { comments } from "@/data/comments";
import { COMMENTS } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { deflateRawSync } from "zlib";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object[]>
) {
  switch (req.method) {
    case "GET":
      console.log("its get");
      res.status(200).json(comments);
      break;
    case "POST":
      const { comment } = req.body;
      const newComment: COMMENTS = {
        id: Date.now(),
        comment: comment,
      };
      comments.push(newComment);
      console.log("its post");
      res.status(201).json([newComment]);
      break;

    default:
      break;
  }
}
