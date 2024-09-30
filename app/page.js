import { collection, getDocs, limit, query, where } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { db } from "./lib/firebase/firbaseConfig";
import ProductCardGroup from "./components/ProductCardGroup";
import CollectionCardGroup from "./components/CollectionCardGroup";
import CustomerBenefits from "./components/CustomerBenefits";
import TestimonialSlider from "./components/testimonials-slider";

export default async function Home() {
  const topProducts = [];
  const bestSeller = [];
  const newArrival = [];
  const scentfulSavings = [];

  const testimonials = [
    {
      quote:
        "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
      name: "Rose Roberson",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=1",
    },
    {
      quote:
        "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=10",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=9",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=7",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=8",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=2",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=3",
    },
  ];

  const topProductsQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", "top-products"),
    limit(4) // Apply the `where` clause within `query`
  );
  const topProductsDocs = await getDocs(topProductsQuery);
  topProductsDocs.forEach((document) => {
    topProducts.push({ ...document.data(), id: document.id });
  });

  const bestSellerQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", "best-seller"),
    limit(4) // Apply the `where` clause within `query`
  );
  const bestSellerDocs = await getDocs(bestSellerQuery);
  bestSellerDocs.forEach((document) => {
    bestSeller.push({ ...document.data(), id: document.id });
  });

  const newArrivalQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", "new-arrival"),
    limit(4) // Apply the `where` clause within `query`
  );
  const newArrivalDocs = await getDocs(newArrivalQuery);
  newArrivalDocs.forEach((document) => {
    newArrival.push({ ...document.data(), id: document.id });
  });

  const scentfulSavingsQuery = query(
    collection(db, "Products"),
    where("tags", "array-contains", "scentful-savings"),
    limit(4) // Apply the `where` clause within `query`
  );
  const scentfulSavingsDocs = await getDocs(scentfulSavingsQuery);
  scentfulSavingsDocs.forEach((document) => {
    scentfulSavings.push({ ...document.data(), id: document.id });
  });

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
          height={720}
          priority={true} // Specify height of the image for aspect ratio
        />
      </div>

      <ProductCardGroup
        products={topProducts}
        groupHeading={"Top Products"}
        link={"/products"}
      />
      <CollectionCardGroup
        collectionsArray={[
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2FMen.png?alt=media&token=90b2211e-911e-4380-86b8-f385ea8d83e6",
            name: "men",
            slug: "men",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fwomen.png?alt=media&token=81a8552b-e4c4-4dc2-ab74-025dc5dd79a3",
            name: "women",
            slug: "women",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Feastern.png?alt=media&token=5d04aef8-eec9-47c9-a1dc-1b6a5b207f29",
            name: "eastern",
            slug: "eastern",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fwestern.png?alt=media&token=a32f510e-56be-492a-9eb1-096307b3ac29",
            name: "western",
            slug: "western",
          },
        ]}
      />

      <ProductCardGroup
        products={bestSeller}
        groupHeading={"Our best sellers"}
        link={"/products"}
      />

      <CollectionCardGroup
        collectionsArray={[
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Foffice.png?alt=media&token=d6ea9605-9640-4cd6-a0cc-3e215ed8e42e",
            name: "Office",
            slug: "office",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fschool.png?alt=media&token=e73dc7d5-96a7-4d4f-8b7a-358e2e87ab4a",
            name: "school",
            slug: "school",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fparty.png?alt=media&token=ce3790b6-175b-4704-abb0-89ae0c5ecd5e",
            name: "party",
            slug: "party",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fwedding.png?alt=media&token=d5e1b66f-35d9-4113-a38f-0a2bb8c0485f",
            name: "wedding",
            slug: "wedding",
          },
        ]}
      />

      <ProductCardGroup
        products={newArrival}
        groupHeading={"Latest Arrivals"}
        link={"/products"}
      />

      <CollectionCardGroup
        collectionsArray={[
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fsoft.png?alt=media&token=b4041503-af4b-4d6f-a125-fada610e3f46",
            name: "Soft",
            slug: "soft",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fhard.png?alt=media&token=aa6dbf49-7626-4176-8497-b8d47c49c6ce",
            name: "hard",
            slug: "hard",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fsummer.png?alt=media&token=a45fddf6-5b9c-464d-aff7-517704588904",
            name: "summer",
            slug: "summer",
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fwinter.png?alt=media&token=34335f97-68ab-4ae4-9f25-7c9a11d381f9",
            name: "winter",
            slug: "winter",
          },
        ]}
      />

      <section className="grid md:grid-cols-2 grid-cols-1 gap-8 p-8">
        <Link
          className="hover:scale-105 transition-all"
          href={"/collection/tester"}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2F1.png?alt=media&token=da140821-3e2d-44fe-bf28-bb973014e2c1"
            alt="Al Zehra By  | Perfume Testers | Pakistan"
            height={360}
            width={900}
            className="rounded-lg"
          />
        </Link>
        <Link
          className="hover:scale-105 transition-all"
          href={"/collection/attar"}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2F2.png?alt=media&token=d2b7ca20-05b0-4bdb-953d-d4611e19f30e"
            alt="Al Zehra By GM  | Attar | Pakistan"
            height={360}
            width={900}
            className="rounded-lg"
          />
        </Link>
      </section>

      <ProductCardGroup
        products={scentfulSavings}
        groupHeading={"Scentful Savings"}
        link={"/products"}
      />

      <section className="w-screen md:p-8 p-4 ">
        <div className="bg-black text-white rounded-3xl flex md:flex-row flex-col items-center justify-between gap-5">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/collections-images%2Fpexels-yuli-sv-58861876-7941434%20(1).jpg?alt=media&token=2afc4a1a-090e-4c30-9747-530edd90e4ce"
            className="md:w-1/2 w-full aspect-square object-cover md:rounded-l-3xl rounded-t-2xl"
            alt="FREE Perfume tester | Image | Al Zehra Perfumes | Pakitan"
            height={960}
            width={640}
          />

          <div className="md:w-1/2 flex flex-col justify-center ">
            <h1 className="uppercase font-black text-white md:text-[60px] text-3xl md:text-left text-center leading-snug   ">
              Can't figure out where to begin?
            </h1>
            <div className="md:w-1/2 pl-4 flex md:justify-start justify-center my-6">
              <Link className="bg-brandRed text-white px-6 py-3 rounded-full hover:bg-red-800 transition-all duration-100 font-bold" href="/collection/tester">
                Try Our Samples
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CustomerBenefits />

      <TestimonialSlider testimonials={testimonials} />
    </main>
  );
}
