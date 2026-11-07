//  'use client'
//  import { IBook } from '@/types/IBook';
// import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';  
 
//  interface IBooksContext { 
//   readBooks:IBook[],
//   setReadBooks:Dispatch<SetStateAction<IBook[]>> , 
//   wishList:IBook[],
//   setWishList:Dispatch<SetStateAction<IBook[]>>,
//   count: number;
//   setCount: Dispatch<SetStateAction<number>>;
//  }

//  export const BooksContext = createContext<IBooksContext>({ 
//   readBooks:[],
//   setReadBooks: ()=>{},
//   wishList:[],
//   setWishList:()=>{},
//   count: 0,
//   setCount: () => {},
// });

// const BooksProvider = ({children}:{children:ReactNode}) => {
//   const [readBooks,setReadBooks] = useState<IBook[]>([]);
//   const [wishList,setWishList] = useState<IBook[]>([]); 
//   const[count,setCount] = useState<number>(0)
//    const shreeData = { 
//     readBooks , 
//     setReadBooks ,
//     wishList, 
//     setWishList,
//     count,
//     setCount,
//    }
//   return (<BooksContext.Provider value={shreeData}> 
//     {children}
//   </BooksContext.Provider>
//   );
// };

// export default BooksProvider;  

'use client';
import { IBook } from '@/types/IBook';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishList: IBook[];
  setWishList: Dispatch<SetStateAction<IBook[]>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  removeFromRead: (bookId: number) => void;
  removeFromWishList: (bookId: number) => void;
}

export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishList: [],
  setWishList: () => {},
  count: 0,
  setCount: () => {},
  removeFromRead: () => {},
  removeFromWishList: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishList, setWishList] = useState<IBook[]>([]);
  const [count, setCount] = useState<number>(0);

 const removeFromRead = (bookId: number) => {
    setReadBooks((prev) => prev.filter((book) => book.bookId !== bookId));
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

 const removeFromWishList = (bookId: number) => {
    setWishList((prev) => prev.filter((book) => book.bookId !== bookId));
  };

  const shareData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
    count,
    setCount,
    removeFromRead,
    removeFromWishList,
  };

  return (
    <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;