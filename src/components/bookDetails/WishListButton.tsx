'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const ReadButton = ({ book }: {book: IBook}) => {

    const { wishlist, setWishList } = useContext(BooksContext);

    const booksProvider = useContext(BooksContext)

    const handleReadBook = () =>{
        console.log('read book btn triggred', book);
        // setReadBooks(( prevReadBooks )=> [...prevReadBooks, book]);
        setWishList([...wishlist, book]);
        toast.success(`You have addet to wishlist "${book.bookName}"`)
    }

    return (
        <button className='btn btn-primary flex-1' onClick={()=> handleReadBook()}>Add to Wishlist</button>
        
    );
};

export default ReadButton;