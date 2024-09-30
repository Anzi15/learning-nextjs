import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase/firbaseConfig"; // Adjust the path as necessary

export async function POST(req) {
  const { phoneNumber } = await req.json();

  try {
    const leadData = {
      phoneNumber,
      createdAt: new Date(),
    };

    const leadsCollection = collection(db, "leads");
    const q = query(leadsCollection, where("phoneNumber", "==", phoneNumber));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return new Response(
        JSON.stringify({ error: "You're already a subscriber, but still thanks!" }),
        { status: 400 }
      );
    }

    await addDoc(leadsCollection, leadData);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Can't connect to database, try again later.", message: error }),
      { status: 500 }
    );
  }
}
