import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
        <div className="w-screen flex items-center justify-center">
        <Image
        src="/website cover.png"
        srcSet={`/website cover 640 px.png 640w, /website cover 800 px.png 800w, $/website cover.png 1280w`}
        sizes="(max-width: 640px) 640px, (max-width: 800px) 800px, 100vw"
          alt="Website Cover"
          className="aspect-video w-full skeleton-loading"
          layout="responsive" // Maintain aspect ratio
          width={1280} // Specify width of the image
          height={720} // Specify height of the image for aspect ratio
      />
      </div>
      Wellcome to vintage interior 
      <Link href={"/products"}>
        Let's get Started
      </Link>
    </main>
  );
}
