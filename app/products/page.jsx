/* eslint-disable react/no-unescaped-entities */

import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase/firbaseConfig";

export async function generateMetadata() {
  const docs = await getDocs(collection(db, "Products"));
  const products = [];
  
  docs.forEach((doc) => {
    products.push(doc.data());
  });

  const productCount = products.length;
  const title = productCount > 0 
    ? `We have ${productCount} product${productCount > 1 ? 's' : ''} available!` 
    : "No products available";

  return {
    title,
    description: "Explore our range of products.",
  };
}

export default async function ProductsPage() {
  const docs = await getDocs(collection(db, "Products"));
  const products = [];

  docs.forEach((doc) => {
    products.push(doc.data());
  });

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}
