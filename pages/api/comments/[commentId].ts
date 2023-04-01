import { comments } from "@/data/comments";
import { COMMENTS } from "@/types/types";

import { NextApiRequest, NextApiResponse } from "next";
import { parentPort } from "worker_threads";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  let { commentId }: any = req.query;
  switch (req.method) {
    case "GET":
      const comment = comments.find(
        (comment) => comment.id === parseInt(commentId)
      );
      res.status(200).json(comment);
      break;
    case "DELETE":
      const deleteComment = comments.find(
        (comment) => comment.id === parseInt(commentId)
      );
      const index = comments.findIndex(
        (comment) => comment.id === parseInt(commentId)
      );
      comments.splice(index, 1);
      res.status(200).json(deleteComment);
      break;

    default:
      break;
  }
}
