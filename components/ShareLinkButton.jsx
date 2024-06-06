"use client";
import { LinkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };
  console.log("[ShareLinkButton] clicked", clicked);
  return (
    <button
      onClick={handleClick}
      className="border flex items-center gap-1 px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700 duration-75 "
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Link copied!" : "Share Link"}
    </button>
  );
}

export default ShareLinkButton;
