import * as React from 'react';

import { Page } from './Page';
import { Api } from '../../Api';
import { EventItem } from '../../types';

interface PageContainerProps {

}

interface PageContainerState {
    events: EventItem[];
}

export class PageContainer extends React.Component<PageContainerProps, PageContainerState> {
    constructor(props: PageContainerProps) {
        super(props);

        this.state = {
            events: []
        };
    }

    public render() {
        return React.createElement(Page, { events: this.state.events });
    }

    public async componentDidMount() {
        const eventsResponse = await Api.getEventsList();

        this.setState({
            events: eventsResponse.message
        });
    }
}
