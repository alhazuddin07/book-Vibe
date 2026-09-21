import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({ book }: { book: IBook }) => {
    return (
        <div
            className="my-6 group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col gap-6 sm:flex-row">

                {/* Book Cover */}
                <div className="relative shrink-0 bg-slate-100 sm:w-100">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={400}
                        height={550}
                        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-full"
                    />

                    {/* Category */}
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                        {book.category}
                    </span>
                </div>

                {/* Book Details */}
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">

                    {/* Tags & Rating */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-medium text-slate-500">
                            {book.tags.map((tag) => `#${tag}`).join(" ")}
                        </span>

                        <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-600">
                            ⭐ {book.rating}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-1 text-sm text-slate-500">
                        by{" "}
                        <span className="font-semibold text-slate-700">
                            {book.author}
                        </span>
                    </p>

                    {/* Review */}
                    <p className="mt-4 line-clamp-3 max-w-3xl text-sm leading-6 text-slate-600">
                        {book.review}
                    </p>

                    {/* Book Information */}
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-y border-slate-100 py-4 text-sm">
                        <div>
                            <span className="text-slate-400">Pages: </span>
                            <span className="font-semibold text-slate-700">
                                {book.totalPages}
                            </span>
                        </div>

                        <div>
                            <span className="text-slate-400">Published: </span>
                            <span className="font-semibold text-slate-700">
                                {book.yearOfPublishing}
                            </span>
                        </div>

                        <div>
                            <span className="text-slate-400">Publisher: </span>
                            <span className="font-semibold text-slate-700">
                                {book.publisher}
                            </span>
                        </div>
                    </div>

                    {/* Action */}
                    <div className="mt-5">
                        <Link href={`/books/${book.bookId}`}
                          className='btn btn-primary rounded-xl px-6'
                          >
                            <button className="btn btn-primary rounded-xl px-6">
                                View Details →
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;