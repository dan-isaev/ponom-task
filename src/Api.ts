import axios from 'axios';
import { EventsResponse } from './types';

export class Api {
    public static async getEventsList(): Promise<EventsResponse> {
        const res = await axios.get(`https://api.cultserv.ru/v4/events/list?
            limit=8&offset=0&fields=seo,categories,tags,subevents.venue&category_id=10&session=123`);

        return res.data;
    }
}