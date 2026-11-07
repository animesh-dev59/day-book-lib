import React from 'react';
import Image from "next/image"; 
import { FiMapPin, FiUsers, FiFileText, FiTrash2 } from "react-icons/fi";
// import React, { useContext } from "react";
import Link from "next/link";
import { IBook } from '@/types/IBook';
interface IProps {
  book: IBook;
  onDelete:(bookId:number) => void;
}
const ReadWishListDesgine = ({book,onDelete}:IProps) => {
  return (
    <div className='gap-3'>
         <div className="flex flex-col my-3 sm:flex-row gap-5 border border-base-300 rounded-2xl bg-base-100 p-4 sm:p-5">
                    {/* Left: Image */}
                    <div className="bg-base-200 rounded-xl flex items-center justify-center p-4 sm:w-48 shrink-0">
                      <Image
                        src={book.image}
                        alt={book.bookName}
                        width={120}
                        height={160}
                        className="h-40 w-auto object-contain"
                      />
                    </div>

                    {/* Middle: Details */}
                    <div className="flex-1 flex flex-col gap-3">
                      <div>
                        <h2 className="text-xl font-bold">{book.bookName}</h2>
                        <p className="text-sm mt-1">By : {book.author}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="font-bold">Tag</span>
                        {book.tags.map((tag) => (
                          <span
                            key={tag}
                            className="badge badge-success badge-outline badge-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                        <span className="flex items-center gap-1 text-gray-600">
                          <FiMapPin />
                          Year of Publishing: {book.yearOfPublishing}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600 pb-3 border-b border-base-300">
                        <span className="flex items-center gap-1">
                          <FiUsers />
                          Publisher: {book.publisher}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiFileText />
                          Page {book.totalPages}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="badge badge-info badge-outline">
                          Category: {book.category}
                        </span>
                        <span className="badge badge-warning badge-outline">
                          Rating: {book.rating}
                        </span>
                        <Link
                          href={`/books/${book.bookId}`}
                          className="btn btn-success btn-sm rounded-full text-white"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Right: Delete button */}
                    <div className="flex sm:items-center sm:justify-end">
                      <button
                        onClick={() => onDelete(book.bookId)}
                        className="btn btn-error btn-outline btn-sm w-full sm:w-auto"
                      >
                        <FiTrash2 />
                        Delete
                      </button>
                    </div>
                  </div>
    </div>
  );
};

export default ReadWishListDesgine;