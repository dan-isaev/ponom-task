import * as React from 'react';

import './Page.css';
import { EventItem } from '../../types';
import { Card } from '../Card';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageProps {
    events: EventItem[];
}

export const Page = ({
    events
}: PageProps) => {
    const thumbnailBasePath = 'http://media.cultserv.ru/i/300x160';

    return (
        <div className="page">
            <Header />
            <div className="page__content">
                <div className="page__eventsBlock">
                    <div className="page__eventsTitle">Мероприятия</div>
                    <div className="page__eventsList">
                        {events.map((event, index) => 
                            <Card
                                key={index}
                                thumbnailSrc={`${thumbnailBasePath}/${event.subevents[0].image}`}
                                title={event.title}
                                date={event.subevents[0].date}
                                place={event.subevents[0].venue.title}
                                minPrice={event.subevents[0].min_price}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
