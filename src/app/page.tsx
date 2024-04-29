import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-outfit text-4xl">AEON Bank Assessment</h1>
      <div className="flex flex-row pt-12 gap-10">
        <div className="rounded-full py-2 px-8 text-center cursor-pointer bg-[#EF24B8]">
          <Link
            href={"/challenge-1"}
            className="text-white font-outfit text-2xl"
          >
            Coding Challenge 1
          </Link>
        </div>
        <div className="rounded-full py-2 px-8 text-center cursor-pointer bg-[#EF24B8]">
          <Link
            href={"/challenge-2"}
            className="text-white font-outfit text-2xl"
          >
            Coding Challenge 2
          </Link>
        </div>
      </div>
    </main>
  );
}
