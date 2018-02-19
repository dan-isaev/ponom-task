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
            {children}
        </div>
    );
};
