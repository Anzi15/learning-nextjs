import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductCardGroup = ({
  products,
  groupHeading = null,
  loading,
  link = null,
}) => {
  // Handle the case where products might be empty or null
  const productArray =
    products && products.length > 0
      ? products
      : [
          {
            id: 1,
            title: "meow",
            price: 200,
            primaryImg:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/640px-HD_transparent_picture.png?alt=media&token=6b3789c8-da36-47ad-b36a-b2dfe62eb984",
          },
          {
            id: 2,
            title: "meow",
            price: 200,
            primaryImg:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/640px-HD_transparent_picture.png?alt=media&token=6b3789c8-da36-47ad-b36a-b2dfe62eb984",
          },
          {
            id: 3,
            title: "meow",
            price: 200,
            primaryImg:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/640px-HD_transparent_picture.png?alt=media&token=6b3789c8-da36-47ad-b36a-b2dfe62eb984",
          },
          {
            id: 4,
            title: "meow",
            price: 200,
            primaryImg:
              "https://firebasestorage.googleapis.com/v0/b/al-zehra.appspot.com/o/640px-HD_transparent_picture.png?alt=media&token=6b3789c8-da36-47ad-b36a-b2dfe62eb984",
          },
        ];

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
        

  return (
    <div className="my-12 mt-16 px-8 ">
      {/* Conditional rendering for group heading */}
      <div className="w-full flex justify-between">
        {groupHeading && (
          <h3 className="text-3xl uppercase text-left font-semibold max-w-fit">
            {groupHeading}
          </h3>
        )}

        {link && (
          <Link href={`${link}`} className="normal-brand-link font-bold" >
            View All
          </Link>
        )}
      </div>
      <div className="w-full grid lg:grid-cols-4 gap-3 grid-cols-2">
        {productArray.map((product) => (
          <ProductCard
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            key={product.id}
            loading={loading}
            price={product.price}
            title={product.title}
            image1={product.primaryImg}
            link={`/product/${product.id}`}
            comparedPrice={product.comparedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardGroup;