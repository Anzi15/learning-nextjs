// pages/api/lead.js
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import { db } from "../lib/firebase/firbaseConfig"; // Adjust the import path

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phoneNumber } = req.body;

    try {
      const leadsCollection = collection(db, "leads");
      const q = query(leadsCollection, where("phoneNumber", "==", phoneNumber));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        return res.status(400).json({ error: "You're already a subscriber, but still thanks!" });
      }

      // Add the new lead
      await addDoc(leadsCollection, {
        phoneNumber,
        createdAt: new Date()
      });

      return res.status(200).json({ message: "Subscribed Successfully!" });
    } catch (error) {
      return res.status(500).json({ error: "Can't connect to database, try again later." });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
