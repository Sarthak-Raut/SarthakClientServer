import React, { useState, useRef, useEffect } from 'react';
import '../../assets/style/global.css';
import '../../assets/style/home/books.css';
import booksData from '../../data/books/fiction.json';

function FeaturedBooks() {

    const [currentRow, setCurrentRow] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const booksPerRow = 4;
    const numberOfRows = 3;

    const bookRows = Array.from({ length: numberOfRows }, (_, rowIndex) => {
        const startIndex = rowIndex * booksPerRow;
        return booksData.slice(startIndex, startIndex + booksPerRow);
    });

    const scrollToRow = (index: number) => {
        setCurrentRow(index);
        if (scrollContainerRef.current) {
            const rowHeight = scrollContainerRef.current.children[0].clientHeight;
            scrollContainerRef.current.scrollTo({
                top: index * rowHeight,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollTop = scrollContainerRef.current.scrollTop;
            const rowHeight = scrollContainerRef.current.children[0].clientHeight;
            const newRow = Math.round(scrollTop / rowHeight);
            if (newRow !== currentRow && newRow < numberOfRows) {
                setCurrentRow(newRow);
            }
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [currentRow]);

    return (
        <div className="featured-books-container">

            <div className="featured-books-scroller" ref={scrollContainerRef}>
                {bookRows.map((booksInRow, rowIndex) => (
                    <div key={rowIndex} className="book-row">
                        {booksInRow.map((book, bookIndex) => (
                            bookIndex % 2 === 0
                              ? <div key={bookIndex} className="book-box">
                                    <img src={`/${book.image_path}`} width="90%" height="80%" className={bookIndex % 2 === 0 ? "home-fea-top-img" : "home-fea-bottom-img" } alt='book_image'></img>
                                    <p className="home-fea-title">{book.book_name}</p>
                                    <p className="home-fea-sub">{book.author}</p>
                                </div> :
                                <div key={bookIndex} className="book-box">
                                    <p className="home-fea-title">{book.book_name}</p>
                                    <p className="home-fea-sub">{book.author}</p>
                                    <img src={`/${book.image_path}`} width="90%" height="80%" className="home-fea-bottom-img" alt='book_image'></img>
                                </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="scroll-indicator">
                {bookRows.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentRow ? 'active' : ''}`}
                        onClick={() => scrollToRow(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default FeaturedBooks;