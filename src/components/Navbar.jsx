import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border p-5 bg-zinc-700 flex justify-between gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/models"}>Models</Link>
    </div>
  );
};

export default Navbar;
