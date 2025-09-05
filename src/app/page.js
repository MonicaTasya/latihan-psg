import Image from "next/image";
import Porseni2024 from "@/components/beranda/porseni2024/porseni2024";
import Tentang from "@/components/beranda/tentang/tentang";
import Tema from "@/components/beranda/tema/tema";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Porseni2024 />
      <Tentang />
      <Tema />
    </main>
  );
}
