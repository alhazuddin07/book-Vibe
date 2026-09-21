'use client';
import { IBook } from '@/types/books.type';
import React, { ReactNode, useState, createContext } from 'react';

interface IBooksContext {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}


export const BooksContext = createContext<IBooksContext>({
    readBooks: [],
    setReadBooks: () => {},
    wishlist: [],
    setWishlist: () => {},
});

const BooksProvider = ({children}: { children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);

    const shareData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
    };

    return <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>;
};

export default BooksProvider;