import * as React from 'react';

import './Header.css';
import { Icon } from '../../Icon';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
                <button className="header__menuTrigger">
                    {Icon.getMenuTrigger()}
                </button>
                <div className="header__OwlIcon">
                    {Icon.getMenuTrigger()}
                </div>
                <div className="header__logoText">
                    {Icon.getPonominalu()}
                </div>
                <button className="header__geoButton">
                    {Icon.getGeo()}
                </button>
                <button className="header__userButton">
                    {Icon.getUser()}
                </button>
            </div>
        </div>
    );
}
