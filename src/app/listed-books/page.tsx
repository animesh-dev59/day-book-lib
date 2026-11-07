"use client";
import ReadWishListDesgine from "@/components/listedpagesshared/ReadWishListDesgine";
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/IBook";
import React, { useContext } from "react";

const ListTedPages = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  return (
    <div className="container mx-auto">
      <h3 className="text-4xl font-bold  bg-[#898907] py-3 my-2 rounded-2xl text-center">
        Books
      </h3>
     
    <div className="grid grid-cols-10 gap-4"> 
         <div className="col-span-7">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border ">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label={`ReadBooks (${readBooks.length})`}
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {readBooks.length > 0 ? (
              <div>
                {readBooks.map((book: IBook) => {
                  return <ReadWishListDesgine book={book} />;
                })}
              </div>
            ) : (
              <div className="  my-3 ">
                <h3 className="text-bold text-center text-3xl rounded-4xl bg-gray-500 ">
                  No Read Books Data{" "}
                </h3>
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label={`wishlist (${wishList.length})`}
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {wishList.length > 0 ? (
              <div>
                {wishList.map((book: IBook) => {
                  return <ReadWishListDesgine book={book} />;
                })}
              </div>
            ) : (
              <div className="  my-3 ">
                <h3 className="text-bold text-center text-3xl rounded-4xl bg-gray-500 ">
                  No Wishlist Books Data{" "}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div> 
       <div className=" col-span-3 mt-10 mr-3">
        <select defaultValue="Pick a Runtime" className="select select-success">
          <option disabled={true}>Pick a Runtime</option>
          <option>npm</option>
          <option>Bun</option>
          <option>yarn</option>
        </select>
      </div>
    </div>
    </div>
  );
};

export default ListTedPages;
