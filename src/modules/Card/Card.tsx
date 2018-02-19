import * as React from 'react';

import './Card.css';
import { Icon } from '../Icon';

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
            <div className="card__thumbnail" style={{backgroundImage: `url(${thumbnailSrc})`}}>
                <div className="card__ribbon">
                    {Icon.getRibbon()}
                </div>
            </div>
            <div className="card__text">
                <div className="card__title">{title}</div>
                <div className="card__datePlace">
                    {date}<br />
                    {place}
                </div>
                <div className="card__minPrice">Билеты от {minPrice} &#8381;</div>
            </div>
        </div>
    );
};
