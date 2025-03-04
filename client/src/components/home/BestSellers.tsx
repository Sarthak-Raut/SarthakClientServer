import '../../assets/style/common.css';
import '../../assets/style/home/books.css'
import {ReactComponent as Arrow} from '../../assets/icon/right_arrow.svg';
import React, {useEffect, useRef, useState} from 'react';
import Rating from "../rating";
import LoadingSpinner from "../LoadingSpinner";

interface Book {
    is_public: boolean;
    image_url: string;
    image_path: string;
    book_name: string;
    author: string;
    price: number;
}

function BestSellers() {

    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const fiction = await import('../../data/books/fiction.json');
                const romance = await import('../../data/books/romance.json');
                const thriller = await import('../../data/books/thriller.json');
                const classic = await import('../../data/books/classic.json');

                const allBooks: Book[] = [
                    ...fiction.default,
                    ...romance.default,
                    ...thriller.default,
                    ...classic.default,
                ];

                const publicBooks = allBooks.filter((book) => book.is_public);

                setBooks(publicBooks);
            } catch (error) {
                console.error('Error loading books:', error);
            } finally {
                setLoading(false);
            }
        };

        loadBooks().then(r => {});
    }, []);

    const scrollRight = () => {
        if (containerRef.current) {
            const firstItem = containerRef.current.querySelector('.featured-grid-item') as HTMLDivElement;
            const scrollAmount = firstItem?.clientWidth || 0;
            console.log(scrollAmount);
            containerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (loading) {
        return  <div className="featured-grid-top full">
            <div className="featured-header space-between-row">
                <h1 className="home-book-category">Bestseller</h1>
                <h1 className="home-book-small">View All</h1>
            </div>
            <div className="featured-grid-out">
                <div className="featured-grid-container full">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="featured-grid-item"
                            style={{ justifyContent: "center", alignItems: "center" }}
                        >
                            <LoadingSpinner />
                            <p className="home-book-title">Loading books...</p>
                        </div>
                    ))}
                </div>
                <Arrow style={{marginBottom:"10vh"}} onClick={scrollRight}/>
            </div>
        </div>
    }

    return (
        <div className="featured-grid-top">
            <div className="featured-header space-between-row">
                <h1 className="home-book-category">Bestseller</h1>
                <h1 className="home-book-small">View All</h1>
            </div>
            <div className="featured-grid-out">
                <div className="featured-grid-container full" ref={containerRef}>
                    {books.map((book, index) => (
                        <div key={index} className="featured-grid-item">
                            <div className="featured-book-cover">
                                <img src={`/SarthakBookstoreReact/${book.image_path}`} width="100%" height="100%" alt='book_image'></img>
                            </div>
                            <p className="home-book-title">{book.book_name}</p>
                            <div className="container-row">
                                <p className="home-book-by">by</p>
                                <p className="home-book-author">{book.author}</p>
                            </div>
                            <Rating total={5}/>
                        </div>
                    ))}
                </div>
                <Arrow style={{marginBottom:"10vh"}} onClick={scrollRight}/>
            </div>
        </div>
    );
}

export default BestSellers