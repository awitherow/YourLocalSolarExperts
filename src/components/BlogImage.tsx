import Image from "next/image";

export default function BlogImage({ src, alt }) {
  return (
    <div className="relative w-full rounded-3xl aspect-[16/9] sm:aspect-[2/1] mb-8 sm:mb-16 bg-gray-50">
      <Image src={src} alt={alt} fill className="object-cover " />
      <div className="absolute inset-0 rounded-3xl shadow-inner bg-gradient-to-br from-white/20" />
    </div>
  );
}
