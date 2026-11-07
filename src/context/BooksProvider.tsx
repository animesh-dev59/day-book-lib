 'use client'
 import { IBook } from '@/types/IBook';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';  
 
 interface IBooksContext { 
  readBooks:IBook[],
  setReadBooks:Dispatch<SetStateAction<IBook[]>> , 
  wishList:IBook[],
  setWishList:Dispatch<SetStateAction<IBook[]>>,
 }

 export const BooksContext = createContext<IBooksContext>({ 
  readBooks:[],
  setReadBooks: ()=>{},
  wishList:[],
  setWishList:()=>{},
});

const BooksProvider = ({children}:{children:ReactNode}) => {
  const [readBooks,setReadBooks] = useState<IBook[]>([]);
  const [wishList,setWishList] = useState<IBook[]>([]); 
   const shreeData = { 
    readBooks , 
    setReadBooks ,
    wishList, 
    setWishList ,
   }
  return (<BooksContext.Provider value={shreeData}> 
    {children}
  </BooksContext.Provider>
  );
};

export default BooksProvider;