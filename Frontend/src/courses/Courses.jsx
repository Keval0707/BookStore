import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const books = [
 {
   title: "Pride and Prejudice",
   author: "Jane Austen", 
   description: "A romantic novel of manners that portrays the genteel rural society of early 19th-century England.",
   details: "Published in 1813, this classic explores themes of love, reputation, and class.",
   price: "₹899",
   category: "Fiction",
 },
 {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  description: "The first book in the Harry Potter series, introducing the magical world of Hogwarts.",
  details: "Published in 1997, this book has captured the hearts of millions worldwide.",
  price: "₹999",
  category: "Fiction",
},
{
  title: "1984",
  author: "George Orwell",
  description: "A dystopian novel set in a totalitarian society under constant surveillance.",
  details: "Published in 1949, this book remains a significant warning against authoritarianism.",
  price: "₹699",
  category: "Science Fiction",
},
{
  title: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  description: "An exploration of humanity's history, from the Stone Age to the modern era.",
  details: "Published in 2011, this book provides deep insights into human evolution and society.",
  price: "₹1,299",
  category: "Non-Fiction",
},
{
  title: "Steve Jobs",
  author: "Walter Isaacson",
  description: "A biography of the Apple co-founder, based on exclusive interviews.",
  details: "Published in 2011, this book offers a glimpse into the life of a visionary innovator.",
  price: "₹1,499",
  category: "Biographies",
},
{
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  description: "A novel about the American dream and the excesses of the Jazz Age.",
  details: "Published in 1925, this classic is a critique of the American society of the 1920s.",
  price: "₹799",
  category: "Fiction",
},
{
  title: "Dune",
  author: "Frank Herbert",
  description: "A science fiction epic about politics, religion, and ecology on the desert planet Arrakis.",
  details: "Published in 1965, this book is a cornerstone of science fiction literature.",
  price: "₹899",
  category: "Science Fiction",
},
{
  title: "Becoming",
  author: "Michelle Obama",
  description: "A memoir by the former First Lady of the United States, sharing her journey from childhood to the White House.",
  details: "Published in 2018, this book is an inspiring story of resilience and achievement.",
  price: "₹1,399",
  category: "Biographies",
},
{
  title: "The White Tiger",
  author: "Aravind Adiga",
  description: "A darkly humorous novel about the struggles and aspirations of a young Indian villager.",
  details: "Published in 2008, this book won the Man Booker Prize.",
  price: "₹499",
  category: "Fiction",
},
{
  title: "Wings of Fire",
  author: "A.P.J. Abdul Kalam",
  description: "An autobiography of the former President of India, chronicling his life journey and achievements.",
  details: "Published in 1999, this book inspires readers to dream big.",
  price: "₹350",
  category: "Biographies",
},
{
  title: "Train to Pakistan",
  author: "Khushwant Singh",
  description: "A poignant tale set during the Partition of India, capturing the human cost of division.",
  details: "Published in 1956, this novel is a classic in Indian literature.",
  price: "₹450",
  category: "Fiction",
},
{
  title: "India After Gandhi",
  author: "Ramachandra Guha",
  description: "A detailed history of India post-Independence, covering political, social, and cultural developments.",
  details: "Published in 2007, this book is a comprehensive account of modern India.",
  price: "₹1,200",
  category: "Non-Fiction",
}// ... rest of books array stays the same
];

function BookstorePage() {
 const navigate = useNavigate();
 const [selectedBook, setSelectedBook] = useState(null);
 const [showDetails, setShowDetails] = useState(false);

 const handleSeeDetails = (book) => {
   setSelectedBook(book);
   setShowDetails(true);
 };

 const handleBuyNow = (book) => {
   navigate('/checkout', { state: { book } });
 };

 return (
   <>
     <Navbar />
     <div className="min-h-screen bg-gray-100">
       <header className="text-center py-10 bg-blue-600 text-white">
         <h1 className="text-4xl font-bold">Welcome to Our Bookstore</h1>
         <p className="text-lg mt-2">Explore a world of books across all genres.</p>
       </header>
       <main className="container mx-auto py-8">
         <section className="mb-12">
           <h2 className="text-2xl font-semibold text-center mb-6">Featured Books</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {books.map((book, index) => (
               <div key={index} className="bg-white p-4 rounded shadow">
                 <h3 className="text-lg font-bold">{book.title}</h3>
                 <p className="text-sm text-gray-600">Author: {book.author}</p>
                 <p className="mt-2">{book.description}</p>
                 <p className="text-lg font-semibold mt-2">Price: {book.price}</p>
                 <button
                   onClick={() => handleSeeDetails(book)}
                   className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition"
                 >
                   See Details
                 </button>
                 <button
                   onClick={() => handleBuyNow(book)}
                   className="bg-green-600 text-white py-2 px-4 mt-4 ml-2 rounded hover:bg-green-700 transition"
                 >
                   Buy Now
                 </button>
               </div>
             ))}
           </div>
         </section>

         {showDetails && selectedBook && (
           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
             <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
               <h3 className="text-xl font-bold mb-2">{selectedBook.title}</h3>
               <p className="text-gray-600">Author: {selectedBook.author}</p>
               <p className="mt-4">{selectedBook.details}</p>
               <p className="mt-4 text-lg font-semibold">Price: {selectedBook.price}</p>
               <button
                 onClick={() => setShowDetails(false)}
                 className="bg-red-600 text-white py-2 px-4 mt-4 rounded hover:bg-red-700 transition"
               >
                 Close
               </button>
             </div>
           </div>
         )}
       </main>
     </div>
     <Footer />
   </>
 );
}

export default BookstorePage;