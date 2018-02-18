import * as React from 'react';

interface CardProps {
    thumbnailSrc: string;
    title: string;
    date: string;
    place: string;
    minPrice: number;
}

export const Card = ({
    thumbnailSrc,
    title,
    date,
    place,
    minPrice
}: CardProps) => {
    return (
        <div className="card">
            <div className="card__thumbnail" style={{backgroundImage: `url(${thumbnailSrc})`}} />
            <div className="card__text">
                <div className="card__title">{title}</div>
                <div className="card__datePlace">
                    {date}<br />
                    {place}
                </div>
                <div className="minPrice">Билеты от {minPrice} &#8381;</div>
            </div>
        </div>
    );
};
