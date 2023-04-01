import React, { useEffect, use, useState } from "react";
import axios from "axios";

type COMMENTS = {
  id: number;
  comment: string;
};

export default function C({ data }: any) {
  const [comments, setComments] = useState<COMMENTS[]>([]);
  const [comment, setComment] = useState<string>("");

  const fetchComments = async () => {
    try {
      const response = await fetch("/api/comments");
      const data: any = await response.json();
      setComments(data);
    } catch (e) {
      console.log(e);
    }
  };

  const postComment = async () => {
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      fetchComments();
    }
  };

  const deleteComment = async (commentId: number) => {
    try {
      const deleteComment = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
      });
      const data = await deleteComment.json();
      console.log("id: " + commentId + "has been deleted");
      return console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      fetchComments();
    }
    // try {
    //   const response = await fetch(`/api/comments/${commentId}`);
    //   const data = await response.json();
    //   return console.log(data);
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   fetchComments();
    // }
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" onClick={postComment}>
        Submit Comment
      </button>
      <button onClick={fetchComments}>Fetch Comments</button>
      <div>
        {comments.map(({ id, comment }: COMMENTS) => {
          return (
            <div key={id}>
              {id}: {comment}
              <button
                onClick={() => {
                  deleteComment(id);
                }}
                className="border m-4 p-2 bg-slate-700 rounded-3xl w-1/2 h-full hover:border-pink-300"
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

function async(id: any) {
  throw new Error("Function not implemented.");
}
// export async function getServerSideProps() {
//   try {
//     const response = await axios.get("/pages/api/hello.tsx");
//     const jsonData = JSON.stringify(response);
//     console.log("getData is running");
//     console.log(jsonData);
//   } catch (e: any) {
//     console.log(e);
//   }
// }
