import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border p-5 bg-zinc-700 flex justify-center gap-5 text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/models"}>Models</Link>
      <Link href={"/signup"}>Sign up</Link>
    </div>
  );
};

export default Navbar;
