import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  console.log("This log is visible in the terminal");
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href='/about'>About us</Link></p>
    </main>
  );
}
