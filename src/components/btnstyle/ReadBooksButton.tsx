// 'use client'
// import { BooksContext } from "@/context/BooksProvider";
// import { IBook } from "@/types/IBook";
// import React, { useContext } from "react";
// import { toast } from "react-toastify";

// const ReadBooksButton = ({book}:{book:IBook}) => { 
//   const {readBooks,setReadBooks} = useContext(BooksContext);
//   const {count,setCount} = useContext(BooksContext); 
  
//   const handleReadButton = ()=> { 
//       setCount(count + 1);
//     setReadBooks([...readBooks,book]);
//     toast.success(`Add ${book.bookName}`);
//   } 
//   return <button  
//     onClick={()=>handleReadButton()} 
//     className="btn btn-outline">Read</button>;
// };

// export default ReadBooksButton;   

'use client'
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/IBook";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadBooksButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks, setWishList, setCount } =
    useContext(BooksContext);

  const handleReadButton = () => {
    const alreadyRead = readBooks.some((b) => b.bookId === book.bookId);
    if (alreadyRead) {
      toast.error(`${book.bookName} is already in Read list`);
      return;
    }

    setReadBooks((prev) => [...prev, book]);
    setCount((prev) => prev + 1);
    setWishList((prev) => prev.filter((b) => b.bookId !== book.bookId));
    toast.success(`Added ${book.bookName}`);
  };

  return (
    <button onClick={handleReadButton} className="btn btn-outline">
      Read
    </button>
  );
};

export default ReadBooksButton;
