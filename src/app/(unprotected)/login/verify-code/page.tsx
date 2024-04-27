"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function VerifyCodePage() {
  const searchParams = useSearchParams();

  const [code, setCode] = useState("");

  function verify() {
    window.location.href = `/api/auth/callback/email?email=${encodeURIComponent(
      searchParams.get("email")!,
    )}&token=${code}${`&callbackUrl=${window.location.origin + "/dashboard"}`}`;
  }

  return (
    <>
      <div className="flex items-center lg:hidden">
        <Link href="/">
          <Image
            alt="Plate Aid"
            src="/images/veiculo_pago_black_green.svg"
            width={116}
            height={60}
          />
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-center font-medium">
        <h1 className="text-3xl">Log in your account</h1>

        {/* <p>Acesse a plataforma para ter acesso aos seus pedidos.</p> */}
      </div>

      <div className="bg-brand-white rounded-lg p-10 text-center shadow-sm">
        <p className="pb-6 text-3xl">Check your email</p>

        <p>
          The <span className="font-bold">token</span> was sent to your email.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <Input value={code} onChange={(e) => setCode(e.target.value)} />

          <Button className=" w-full" onClick={verify}>
            Verificar
          </Button>
        </div>
      </div>
    </>
  );
}
