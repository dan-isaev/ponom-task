import * as React from 'react';

import './Page.css';

interface PageProps {
    children?: React.ReactNode;
}

export const Page = ({
    children
}: PageProps) => {
    return (
        <div className="page">
            <div className="page__header" />
            <div className="page__content">
                {children}
            </div>
            <div className="page__footer" />
        </div>
    );
};
