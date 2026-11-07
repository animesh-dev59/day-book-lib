import ReadBooksButton from "@/components/btnstyle/ReadBooksButton";
import WishListButton from "@/components/btnstyle/WishListButton";
import { IBook } from "@/types/IBook";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IBookViewDetailsPage {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
};

const BookViewDetailsPage = async ({ params }: IBookViewDetailsPage) => {
  const { id } = await params;
  const books = await getBooks();
  const book = books.find((b: IBook) => b.bookId === Number(id));

  if (!book) notFound();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Image */}
        <div className="bg-base-200 rounded-2xl p-8 flex justify-center items-center">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={400}
            className="h-auto w-auto max-h-96 object-contain"
          />
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-3xl font-bold">{book.bookName}</h1>
          <p className="mt-2 text-sm">By : {book.author}</p>

          <div className="border-t border-base-300 my-4" />
          <p className="text-sm">{book.category}</p>
          <div className="border-t border-base-300 my-4" />

          <p className="text-sm leading-relaxed">
            <span className="font-bold">Review : </span>
            {book.review}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-bold text-sm">Tag</span>
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-success badge-outline text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="border-t border-base-300 my-4" />

          <div className="grid grid-cols-[160px_1fr] gap-y-3 text-sm">
            <span className="text-gray-500">Number of Pages:</span>
            <span className="font-bold">{book.totalPages}</span>

            <span className="text-gray-500">Publisher:</span>
            <span className="font-bold">{book.publisher}</span>

            <span className="text-gray-500">Year of Publishing:</span>
            <span className="font-bold">{book.yearOfPublishing}</span>

            <span className="text-gray-500">Rating:</span>
            <span className="font-bold">{book.rating}</span>
          </div>

          <div className="flex gap-3 mt-6">
           <ReadBooksButton book={book}/>
            <WishListButton book={book}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookViewDetailsPage;