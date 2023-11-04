import Image from "next/image";
import React from "react";

function SignInBtn(props) {
  return (
    <button className=" flex items-center gap-4 shadow-xl rounded-lg pl-3 ">
      <Image src={"/google-logo.png"} height={30} width={30} alt="" />
      <span className=" bg-blue-500 text-white px-4 py-3 ">
        sign in with google
      </span>
    </button>
  );
}

export default SignInBtn;
