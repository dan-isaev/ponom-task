export interface EventsResponse {
    code: number;
    message: EventItem[];
    ts: number;
}

export interface EventItem {
    subevents: SubEventItem[];
    title: string;
}

interface SubEventItem {
    date: string;
    min_price: number;
    image: string;
    venue: SubEventItemVenue;
}

interface SubEventItemVenue {
    title: string;
}