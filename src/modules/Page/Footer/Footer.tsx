import * as React from 'react';

import './Footer.css';
import { Icon } from '../../Icon';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div key={1} className="footer__column">
                    <div className="footer__columnTitle">Новости на сове</div>
                    <a href="#" className="footer__link footer__bigText">Блог Сова</a>
                </div>
                <div key={2} className="footer__column">
                    <div className="footer__columnTitle">Мобильное приложение</div>
                    <div className="footer__mobileOptions">
                        <div className="footer__mobileOption">
                            <div className="footer__mobileOptionIcon">{Icon.getApple()}</div>
                            <span>App Store</span>
                        </div>
                        <div className="footer__mobileOption">
                            <div className="footer__mobileOptionIcon">{Icon.getGooglePlay()}</div>
                            <span>Google Play</span>
                        </div>
                    </div>
                </div>
                <div key={3} className="footer__column">
                    <div className="footer__columnTitle">Мы принимаем</div>
                    <div className="footer__paymentOptions">
                        <div key={1} className="footer__paymentOption">
                            {Icon.getVisa()}
                        </div>
                        <div key={2} className="footer__paymentOption">
                            {Icon.getMasterCard()}
                        </div>
                        <div key={3} className="footer__paymentOption">
                            {Icon.getPayPal()}
                        </div>
                        <div key={4} className="footer__paymentOption">
                            {Icon.getSber()}
                        </div>
                    </div>
                </div>
                <div key={4} className="footer__column">
                    © 2017 ООО «КС». Все права защищены.<br />
                    Использование этого сайта означает принятие <a href="#" className="footer__link">
                    Пользовательского соглашения</a> и <a href="#" className="footer__link">Политики
                    конфиденциальности</a> онлайн сервиса Ponominalu.ru<br />
                    Адрес: Москва, Таганская 26 стр.1, 109147
                    Телефон в Москве: 8 (495) 228-20-80
                    E-mail: contact@ponominalu.ru
                </div>
            </div>
        </div>
    );
};
