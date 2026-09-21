import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';

interface IBookDetailPageProps {
    params: Promise<{
        bookId: string;
    }>;
}

const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = res.json();
    return data;
}

const BookDetailPage = async ({ params }: IBookDetailPageProps) => {

    const { bookId } = await params;

    const booksData = await getBooks();
    const book = booksData.find((book: IBook) => String(book.bookId) === String(bookId));
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

                {/* Book Image */}
                <div className="flex justify-center shadow-sm rounded-md p-13 mt-10">
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            width={290}
                            height={200}
                            className="object-cover lg:min-h-[200px]"
                        />
                    </div>
                </div>

                {/* Book Details */}
                <div className="flex flex-col pt-4 lg:pt-8">

                    {/* Category & Tags */}
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600">
                            {book.category}
                        </span>

                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-sm font-medium text-slate-500"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Name */}
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="mt-3 text-lg text-slate-500">
                        by{" "}
                        <span className="font-medium text-slate-800">
                            {book.author}
                        </span>
                    </p>

                    {/* Rating */}
                    <div className=" mt-10 flex items-center gap-3">
                        <div className="text-lg tracking-wide text-orange-500">
                            ★★★★★
                        </div>

                        <span className="font-semibold text-slate-800">
                            {book.rating}
                        </span>

                        <span className="text-sm text-slate-400">
                            / 5.0
                        </span>
                    </div>

                    {/* About Book */}
                    <div className="mt-7">
                        <h2 className="mb-4 text-xl font-bold text-slate-900">
                            About this book
                        </h2>

                        <p className="max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                            {book.review}
                        </p>
                    </div>

                    {/* Book Information */}
                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
                        <span>
                            <strong className="text-slate-800">
                                {book.totalPages}
                            </strong>{" "}
                            Pages
                        </span>

                        <span>
                            Published{" "}
                            <strong className="text-slate-800">
                                {book.yearOfPublishing}
                            </strong>
                        </span>

                        <span>
                            Publisher{" "}
                            <strong className="text-slate-800">
                                {book.publisher}
                            </strong>
                        </span>

                    </div>

                    <div className='flex gap-4 mt-4'>
                        <ReadButton book={book}/>
                        <WishListButton book={book}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;