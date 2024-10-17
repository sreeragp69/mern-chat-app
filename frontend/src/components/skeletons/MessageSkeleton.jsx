import React from "react";

const MessageSkeleton = () => {
  return (
    <>
      <div className="flex  w-52 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton  bg-white/30 backdrop-blur-md h-16 w-16 shrink-0 rounded-full animate-pulse-smooth"></div>

          <div className="flex flex-col gap-2">
            <div className="skeleton  bg-white/30 backdrop-blur-md h-4 w-20 rounded animate-pulse-smooth"></div>
            <div className="skeleton  bg-white/30 backdrop-blur-md h-4 w-28 rounded animate-pulse-smooth"></div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-end">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <div className="skeleton  bg-white/30 backdrop-blur-md h-4 w-28 rounded animate-pulse-smooth"></div>
            <div className="skeleton  bg-white/30 backdrop-blur-md h-4 w-20 rounded animate-pulse-smooth"></div>
          </div>

          <div className="skeleton  bg-white/30 backdrop-blur-md h-16 w-16 shrink-0 rounded-full animate-pulse-smooth"></div>
        </div>
      </div>
    </>
  );
};

export default MessageSkeleton;
