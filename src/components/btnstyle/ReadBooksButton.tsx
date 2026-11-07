'use client'
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/IBook";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadBooksButton = ({book}:{book:IBook}) => { 
  const {readBooks,setReadBooks} = useContext(BooksContext);
  const {count,setCount} = useContext(BooksContext); 
  
  const handleReadButton = ()=> { 
      setCount(count + 1);
    setReadBooks([...readBooks,book]);
    toast.success(`Add ${book.bookName}`);
  } 
  return <button  
    onClick={()=>handleReadButton()} 
    className="btn btn-outline">Read</button>;
};

export default ReadBooksButton;
