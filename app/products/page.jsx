import { collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase/firbaseConfig";

export default async function Page() {
    const docs = getDocs(collection(db,"Products"))
    const products = [];
    const docData = (await docs).forEach((doc)=>{
        products.push(doc.data())
    })
    console.log(products)

    return (
      <ul>
        {products.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </ul>
    )
  }