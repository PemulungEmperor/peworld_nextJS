"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push("/login")}>
      To Login
    </button>
  );
};

export default Page;
