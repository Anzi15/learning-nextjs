"use client"
import Link  from "next/link";
import WhatsAppLeadForm from "./WhatsAppLeadForm.jsx";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-black text-white">
    <div className="container px-6 py-12 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div className="sm:col-span-2">
         <WhatsAppLeadForm/>
          
        </div>
  
        <div>
          <p className="font-semibold text-white text-left">Quick Link</p>
  
          <div className="flex flex-col items-start mt-5 space-y-2">
            <Link href={"/"}>
            <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
              Home
            </p>
            </Link>

            <Link href={"/products"}>
            <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
              Shop
            </p>
            </Link>

            <Link href={"/about"}>
            <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
              Who We Are
            </p>
            </Link>

          </div>
        </div>
  
        <div>
          <p className="font-semibold text-white text-left">Top Collections</p>
  
          <div className="flex flex-col items-start mt-5 space-y-2">
            <Link href={"/collections/men"}>
            <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
              Men
            </p>
            </Link>

            <Link href={"/collection/women"}>
            <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
              Women
            </p>
            </Link>

            <Link href={"/collections/esatern"}></Link>
            <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
              Eastern
            </p>
            <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
              Western
            </p>
          </div>
        </div>
      </div>
  
      <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
  
      <div className="sm:flex sm:items-center sm:justify-between">
      <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
        © {currentYear} Al Zehra By GM. All rights reserved.
      </p>
  
        <div className="flex gap-4 hover:cursor-pointer items-center md:justify-normal justify-center">
          <Link href={"https://wa.link/kljcq1"} target="_blank">
          <FaWhatsappSquare className="text-4xl transition-all hover:scale-105" />
          </Link>

          <Link href={"https://www.facebook.com/profile.php?id=61562034141262"} target="_blank">
          <FaFacebookSquare  className="text-4xl transition-all hover:scale-105" />
          </Link>

          <Link href={"https://www.instagram.com/alzehrabygm"} target="_blank">
          <FaInstagramSquare  className="text-4xl transition-all hover:scale-105" />
          </Link>
        
          <Link href={"https://www.tiktok.com/@alzehrabygm"} target="_blank">
          <AiFillTikTok  className="text text-[2.6rem] transition-all hover:scale-105" />
          </Link>
        </div>
      </div>

    </div>
    <div className="w-full text-center">
       <p>
        Designed And Developed By - <Link href="https://anziandco.com" className="underline font-bold" targert="_blank">Anzi &. CO</Link>
       </p>
    </div>
  </footer>
  
  );
};

export default Footer;