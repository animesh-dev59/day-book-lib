'use client'
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/IBook";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({book}:{book:IBook}) => {  
  const {wishList , setWishList} = useContext(BooksContext);  
  const handleWishListButton = ()=>{ 
    setWishList([...wishList,book]);
    toast.success(`Add ${book.bookName}`);
  }
  return <button  
  onClick={()=>handleWishListButton()} 
   className="btn btn-info text-white">Wishlist</button>;
};

export default WishListButton;
