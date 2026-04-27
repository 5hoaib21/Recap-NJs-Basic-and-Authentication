"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  // console.log("session from:", session);

  const user = session?.user;
  const handleSignOut = () => {
    // alert("signout btn clicked");
    authClient.signOut();
  };

  return (
    <div className="border p-5 bg-zinc-700 flex justify-center gap-5 text-white">
      <Link className="font-bold text-lg" href={"/"}>
        Home
      </Link>
      <Link className="font-bold text-lg" href={"/models"}>
        Models
      </Link>
      <Link className="font-bold text-lg" href={"/server-action"}>
        Server Action
      </Link>
      <Link className="font-bold text-lg" href={"/signup"}>
        Sign up
      </Link>
      <Link className="font-bold text-lg" href={"/signin"}>
        Sign in
      </Link>
      <div className="font-bold text-sm">
        <div>{user?.name}</div>
        <div>{user?.email}</div>
      </div>
      <Button
        onClick={handleSignOut}
        className="font-bold text-lg"
        variant="danger-soft"
      >
        SignOut
      </Button>
    </div>
  );
};

export default Navbar;
