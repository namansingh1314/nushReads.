import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import Book6 from "../../assets/books/book6.jpg";
import Book7 from "../../assets/books/book7.jpg";
import Book8 from "../../assets/books/book8.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Icebreaker",
    rating: 5.0,
    author: "Hannah Grace",
  },
  {
    id: 2,
    img: Book2,
    title: "The Cruel Prince",
    rating: 4.5,
    author: "Holly Black",
  },
  {
    id: 3,
    img: Book3,
    title: "Shatter me",
    rating: 4.7,
    author: "Tahereh Mafi",
  },
  {
    id: 4,
    img: Book4,
    title: "King of Wrath",
    rating: 4.4,
    author: "Ana Huang",
  },
  {
    id: 5,
    img: Book5,
    title: "Misconduct",
    rating: 4.7,
    author: "Penelope Douglas",
  },
  
  {
    id: 6,
    img: Book6,
    title: "The Final offer",
    rating: 4.4,
    author: "Nisha Sharma",
  },
  {
    id: 7,
    img: Book7,
    title: "Dating Dr Dil",
    rating: 4.4,
    author: "Nisha Sharma",
  },
  {
    id: 8,
    img: Book8,
    title: "The American",
    rating: 4.9,
    author: "Elena Armas",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
            Uncover the best in literature with our curated list of top books, featuring must-reads across all genres.
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
            <button
  className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
  onClick={() => window.location.href='https://nushreads.vercel.app/book'}
>
  Search All Books
</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
