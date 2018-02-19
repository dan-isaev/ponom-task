import * as React from 'react';

import './Header.css';
import { Icon } from '../../Icon';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__contentFirst">
                    <button className="header__menuTrigger">
                    {Icon.getMenuTrigger()}
                    </button>
                    <div className="header__owlIcon">
                        {Icon.getOwl()}
                    </div>
                    <div className="header__logoText">
                        {Icon.getPonominalu()}
                    </div>
                </div>
                <div className="header__contentSecond">
                    <button className="header__geoButton">
                        {Icon.getGeo()}
                    </button>
                    <button className="header__userButton">
                        {Icon.getUser()}
                    </button>
                </div>
            </div>
        </div>
    );
};
