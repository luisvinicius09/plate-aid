"use client";

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function VerifyCodePage() {
  const searchParams = useSearchParams();

  const [code, setCode] = useState("");

  function verify() {
    window.location.href = `/api/auth/callback/email?email=${encodeURIComponent(
      searchParams.get("email")!,
    )}&token=${code}${`&callbackUrl=${window.location.origin + "/orders"}`}`;
  }

  return <div></div>;
}
