import { IBook } from "@/types/IBook";
import Image from "next/image";
import Link from "next/link";

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
};

const BooksPages = async () => {
  const books = await getBooks();

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-center text-3xl font-bold mb-8">All Books</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book: IBook) => (
       <Link href={`/books/${book.bookId}`} key={book.bookId}>   
            <div
            className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow h-full"
          >
            <figure className="bg-base-200 p-4">
              <Image
                src={book.image}
                alt={book.bookName}
                width={160}
                height={220}
                className="h-56 w-auto object-contain rounded"
              />
            </figure>

            <div className="card-body">
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span key={tag} className="badge badge-outline badge-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="card-title line-clamp-1">{book.bookName}</h2>
              <p className="text-sm text-gray-500">by {book.author}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="badge badge-primary">{book.category}</span>
                <span>⭐ {book.rating}</span>
              </div>

              <div className="card-actions mt-auto pt-3">
                <button  className="btn btn-primary w-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
       </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksPages;