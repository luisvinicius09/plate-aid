import Image from "next/image";

export default function ThanksPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-3xl mb-4">
          Your help is very much appreciated! 😄
        </h1>

        <p>We will enter in contact by your email.</p>
        <p>You can check your request status in the dashboard.</p>
      </div>

      {/* <Image alt="Image here" src="" width={100} height={100} /> */}
    </div>
  );
}
