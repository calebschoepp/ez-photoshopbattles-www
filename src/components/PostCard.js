import React, { useState } from "react";

import { TITLE_BAR_SIZE, BORDER_COLOR } from "../util/constants.js";

function PostCard({ post }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  console.log(post);

  return (
    <div
      className={`flex flex-col h-full w-full bg-white border border${BORDER_COLOR}`}
    >
      <div
        style={{ height: `${TITLE_BAR_SIZE}px` }}
        className={`bg-white flex flex-row justify-start items-center content-center border-b border${BORDER_COLOR} text-lg`}
      >
        <a
          src={post.postLink}
          className="ml-1 overflow-hidden whitespace-no-wrap"
        >
          {post.photos[photoIndex].text}
        </a>
        <span className="mx-2 font-semibold">|</span>
        <span className="mr-1">{post.photos[photoIndex].score}</span>
      </div>
      <div className="relative my-auto w-full">
        <img
          className="block w-full"
          alt={"Photo"}
          src={post.photos[photoIndex] && post.photos[photoIndex].url}
        ></img>
        {photoIndex > 0 && (
          <button
            onClick={() => setPhotoIndex(photoIndex - 1)}
            className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-200 absolute inset-y-0 left-0 my-auto ml-8"
          >
            {"<"}
          </button>
        )}
        {photoIndex < post.photos.length - 1 && (
          <button
            onClick={() => setPhotoIndex(photoIndex + 1)}
            className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-200 absolute inset-y-0 right-0 my-auto mr-8"
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
}

export default PostCard;
