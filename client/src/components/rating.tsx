import React from 'react';
import { ReactComponent as StarFull } from '../assets/icon/star_full.svg'
import { ReactComponent as StarHalf } from '../assets/icon/star_half.svg'
import '../assets/style/rating.css'

interface RatingProps {
    total: number;
}

const Rating: React.FC<RatingProps> = ({ total }) => {

    const fullStars = Math.floor(total);
    const hasHalfStar = total % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="container-row">
            {Array(fullStars).fill(null).map((_, index) => (
                <StarFull key={`full-${index}`} className="home-star-icon" />
            ))}
            {hasHalfStar && <StarHalf className="home-star-icon" />}
            {Array(emptyStars).fill(null).map((_, index) => (
                <span key={`empty-${index}`} className="home-star-icon" />
            ))}
        </div>
    );

};


export default Rating