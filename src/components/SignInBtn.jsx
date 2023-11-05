"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

function SignInBtn() {
  return (
    <button
      onClick={async () => await signIn("google")}
      className=" flex items-center gap-4 shadow-xl rounded-lg pl-3 "
    >
      <Image src={"/google-logo.png"} height={30} width={30} alt="" />
      <span className=" bg-blue-500 text-white px-4 py-3 ">
        sign in with google
      </span>
    </button>
  );
}

export default SignInBtn;
