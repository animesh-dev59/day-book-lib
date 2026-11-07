// "use client";
// import ReadWishListDesgine from "@/components/listedpagesshared/ReadWishListDesgine";
// import { BooksContext } from "@/context/BooksProvider";
// import { IBook } from "@/types/IBook";
// import React, { useContext, useState } from "react";

// const ListTedPages = () => {
//   const { readBooks, wishList } = useContext(BooksContext); 
//   const [sortBy,setSortBy] = useState<'rating' | 'pages' | 'year'>('rating'); 
 
//    const sortBooks =(booksData:IBook[])=>{ 
//     const sortedBooks = [...booksData];      
//     if(sortBy === 'rating'){ 
//       sortedBooks.sort((a,b)=> b.rating - a.rating);
//     } else if(sortBy === 'pages'){ 
//       sortedBooks.sort((a,b)=>b.totalPages - a.totalPages);
//     }else if(sortBy === 'year'){ 
//       sortedBooks.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing);
//     } 
//     return sortedBooks;
//    }
//    const sortedReadBooks = sortBooks(readBooks); 
//    const sortedWishListBooks = sortBooks(wishList);

//   return (
//     <div className="container mx-auto">
//       <h3 className="text-4xl font-bold  bg-[#858549] py-3 my-2 rounded-2xl text-center">
//         Books
//       </h3>
//       {/* <p>Pagaes {readBooks.pages} + </p> */}

//       <div className="grid grid-cols-10 gap-4">
//         <div className="col-span-7">
//           {/* name of each tab group should be unique */}
//           <div className="tabs tabs-border ">
//             <input
//               type="radio"
//               name="my_tabs_2"
//               className="tab"
//               aria-label={`ReadBooks (${readBooks.length})`}
//             />
//             <div className="tab-content  border-base-300 bg-base-100 p-10">
//               {sortedReadBooks.length > 0 ? (
//                 <div>
//                   {sortedReadBooks.map((book: IBook) => {
//                     return <ReadWishListDesgine book={book} />;
//                   })}
//                 </div>
//               ) : (
//                 <div className="  my-3 ">
//                   <h3 className="text-bold text-center text-3xl rounded-4xl bg-gray-500 ">
//                     No Read Books Data
//                   </h3>
//                 </div>
//               )}
//             </div>

//             <input
//               type="radio"
//               name="my_tabs_2"
//               className="tab"
//               aria-label={`wishlist (${wishList.length})`}
//               defaultChecked
//             />
//             <div className="tab-content border-base-300 bg-base-100 p-10">
//               {sortedWishListBooks.length > 0 ? (
//                 <div>
//                   {sortedWishListBooks.map((book: IBook) => {
//                     return <ReadWishListDesgine book={book} />;
//                   })}
//                 </div>
//               ) : (
//                 <div className="  my-3 ">
//                   <h3 className="text-bold text-center text-3xl rounded-4xl bg-gray-500 ">
//                     No Wishlist Books Data
//                   </h3>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className=" col-span-3 mt-10 mr-3">
//           <select 
//            value={sortBy} 
//             onChange={(e)=>setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
//             defaultValue="Pick a Runtime"
//             className="select select-success w-full"
//           >
//             <option disabled={true}>Sort By</option>
//             <option value={"rating"}>Rating</option>
//             <option value={"pages"}>Number of Pages</option>
//             <option value={"year"}>Publisher Year</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListTedPages;
"use client";
import ReadWishListDesgine from "@/components/listedpagesshared/ReadWishListDesgine";
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/IBook";
import React, { useContext, useState } from "react";

type SortType = "rating" | "pages" | "year";
type TabType = "read" | "wishlist";

const ListTedPages = () => {
  const { readBooks, wishList, removeFromRead, removeFromWishList } =
    useContext(BooksContext);

  const [sortBy, setSortBy] = useState<SortType>("rating");
  const [activeTab, setActiveTab] = useState<TabType>("read");
  // read wishlist wishlist wishlist wishlsit wishlist wishlist read read read read read read  wishlist wishlist wishlist readf reaa read read read read read read read read read 
//  const [activeTab,setActiveTab] = useState<'read' | 'wishlist' >('read');
  // Sorting 
  //   checked={activeTab === "read"}
      //        onChange={() => setActiveTab("read")}
  const sortBooks = (booksData: IBook[]) => {
    const sortedBooks = [...booksData];
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishListBooks = sortBooks(wishList); 
  // "read" | "wishlist";
  //const [activeTab, setActiveTab] = useState<TabType>("read");
  //   checked={activeTab === "read"}
    // checked={activeTab === 'read'};
     // onChange={()=>setActiveTab('read')}
      //  onChange={()=>setActiveTab("read")}
      //  onChange={()=>setActiveTab('read')}
   //  onChange={() => setActiveTab("read")}
  // Summary (খোলা tab অনুযায়ী)
  const activeBooks = activeTab === "read" ? readBooks : wishList; 
  // const activeBooks = activeTab === 'read ? read
  const totalPages = activeBooks.reduce((sum, book) => sum + book.totalPages, 0); 
  // const totalPages = activeBooks.reduce((sum,book)=> sum + book.totalpagaes,0);
  const totalRating = activeBooks.reduce((sum, book) => sum + book.rating, 0);
  const avgRating = activeBooks.length ? totalRating / activeBooks.length : 0;

  return (
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-bold bg-[#858549] py-3 my-2 rounded-2xl text-center">
        Books
      </h3>

      {/* Summary section */}
      <div className="stats shadow w-full my-4">
        <div className="stat">
          <div className="stat-title">
            {activeTab === "read" ? "Read" : "Wishlist"} Books
          </div>
          <div className="stat-value">{activeBooks.length}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Pages</div>
          <div className="stat-value">{totalPages}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Rating</div>
          <div className="stat-value">{totalRating.toFixed(1)}</div>
          <div className="stat-desc">Average: {avgRating.toFixed(1)}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        {/* Left: Tabs (70%) */}
        <div className="md:col-span-7">
          <div className="tabs tabs-border">
            {/* Read tab */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label={`ReadBooks (${readBooks.length})`}
              checked={activeTab === "read"}
              onChange={() => setActiveTab("read")}
            />
            <div className="tab-content border-base-300 bg-base-100 p-4 md:p-10">
              {sortedReadBooks.length > 0 ? (
                <div className="flex flex-col gap-5">
                  {sortedReadBooks.map((book: IBook) => (
                    <ReadWishListDesgine
                      key={book.bookId}
                      book={book}
                      onDelete={removeFromRead}
                    />
                  ))}
                </div>
              ) : (
                <h3 className="font-bold text-center text-2xl text-gray-500 my-3">
                  No Read Books Data
                </h3>
              )}
            </div>

            {/* Wishlist tab */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label={`Wishlist (${wishList.length})`}
              checked={activeTab === "wishlist"}
              onChange={() => setActiveTab("wishlist")}
            />
            <div className="tab-content border-base-300 bg-base-100 p-4 md:p-10">
              {sortedWishListBooks.length > 0 ? (
                <div className="flex flex-col gap-5">
                  {sortedWishListBooks.map((book: IBook) => (
                    <ReadWishListDesgine
                      key={book.bookId}
                      book={book}
                      onDelete={removeFromWishList}
                    />
                  ))}
                </div>
              ) : (
                <h3 className="font-bold text-center text-2xl text-gray-500 my-3">
                  No Wishlist Books Data
                </h3>
              )}
            </div>
          </div>
        </div>

        {/* Right: Sorting (30%) */}
        <div className="md:col-span-3 md:mt-2 ">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortType)}
            className="select select-success w-full"
          >
            <option value="rating">Sort By: Rating</option>
            <option value="pages">Sort By: Number of Pages</option>
            <option value="year">Sort By: Publisher Year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ListTedPages;
