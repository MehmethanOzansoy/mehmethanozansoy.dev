import Image from "next/image";
import { defineConfig, s } from "velite";

export default function Page() {
  return (
    <main className="flex-1 py-24">
      {/* flex-col-reverse: Mobilde fotoğraf üste, metin alta gelir. 
          md:flex-row: Bilgisayarda yan yana dururlar. */}
      <div className="z-10 my-10 mx-auto max-w-4xl flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 gap-12">
        {/* Metin Alanı */}
        <div className="flex flex-col flex-1">
          <h3 className="text-4xl font-semibold tracking-tight">
            Hello, I&apos;m Mehmet Han{" "}
            <span className="animate-wiggle inline-block">👋</span>
          </h3>

          <p className="mt-6 text-lg text-slate-400">
            Bilgisayar Mühendisliği mezunu, backend odaklı bir yazılım
            geliştiriciyim. Bu blog; öğrendiklerimi pekiştirmek, başkalarına yol
            göstermek ve yazılım dünyasında kalıcı olma yolculuğumu belgelemek
            için oluşturuldu. Teori değil, gerçek deneyim ve örnekler
            paylaşıyorum.
          </p>

          <p className="mt-4 text-lg text-slate-400">
            Amacım, yazılım geliştirme yolculuğunda karşılaştığım zorlukları ve
            çözümleri paylaşarak, benzer yollardan geçenlere rehberlik etmek.
            Blogumda kod örnekleri, proje anlatımları ve sektörel ipuçları
            bulabilirsiniz.
          </p>
        </div>

        {/* Fotoğraf Alanı  grayscale hover:grayscale-0 */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
            <Image
              src="/images/profil3.jpg" // public klasöründeki fotoğraf adınla aynı olmalı
              alt="Mehmet Han"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <p className="py-6 text-center text-slate-500 ">
        👇 Son yazılara göz at veya beni GitHub & LinkedIn üzerinden takip et.
      </p>
    </main>
  );
}
