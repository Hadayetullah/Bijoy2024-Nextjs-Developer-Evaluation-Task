"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 text-4xl">
      Hello
    </div>
  );
}
