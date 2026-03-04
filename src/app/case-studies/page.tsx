"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CaseStudiesRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/work");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
      <p className="text-[#86868B]">Redirecting to our work...</p>
    </div>
  );
}
