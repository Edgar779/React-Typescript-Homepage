import React from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';

class Footer extends React.PureComponent {
    public render() {
        return (
            <section id="footer-menu">
                <div className="waves">
                    <div className="wave-bg wave"/>
                </div>
                <div className="section-content">
                    <div className="container">
                        <div className="first-row">
                            <Fade top>
                            <div className="download-app">
                                <div className="info">Скачайте наше мобильное приложение</div>
                                <div className="download-buttons">
                                    <a 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        href="https://play.google.com/store/apps/details?id=com.legendcity.legendcity&hl=ru" className="button google-play">
                                        <div/>
                                        <span>
                  Google Play
                </span>
                                    </a>
                                    <a target="_blank" 
                                        rel="noopener noreferrer"  href="https://apps.apple.com/ru/app/legendcity/id1229070695" className="button app-store">
                                        <div/>
                                        <span>
                   App Store
                </span>
                                    </a>
                                </div>
                            </div>
                            </Fade>
                        </div>
                        <div className="menu-row">
                            <Fade top cascade>
                            <div className="menu">
                                <div className="menu-title">
                                    ГОРОД ЛЕГЕНД
                                </div>
                                <ul className="menu-content">
                                    <li><a href="https://legendcity.ru/page/docs.php">О нас</a></li>
                                    <li><a href="#">Блог</a></li>
                                    <li><a href="https://legendcity.ru/page/contacts.php">Контакты</a></li>
                                </ul>
                            </div>
                            <div className="menu">
                                <div className="menu-title">
                                    ПОЛЬЗОВАТЕЛЯМ
                                </div>
                                <ul className="menu-content">
                                    <li><a href="#">Заведения в городе</a></li>
                                    <li><a href="#">Интернет-магазины</a></li>
                                    <li><a href="#">Акции</a></li>
                                </ul>
                            </div>
                            <div className="menu">
                                <div className="menu-title">
                                    БИЗНЕСУ
                                </div>
                                <ul className="menu-content">
                                    <li><a href="https://legendcity.ru/page/docs.php">Сотрудничество</a></li>
                                    <li><a href="https://legendcity.ru/page/contacts.php">Контакты</a></li>
                                </ul>
                            </div>
                            <div className="menu">
                                <div className="menu-title">
                                    ПАРТНЕРАМ
                                </div>
                                <ul className="menu-content">
                                    <li><a href="https://legendcity.ru/page/docs.php">Сотрудничество</a></li>
                                    <li><a href="https://legendcity.ru/page/contacts.php">Контакты</a></li>
                                </ul>
                            </div>
                            <div className="menu">
                                <div className="menu-title">
                                    ИНФОРМАЦИЯ
                                </div>
                                <ul className="menu-content">
                                    <li><a href="#">Публичная оферта</a></li>
                                    <li><a href="#">Политика конфеденциальности</a></li>
                                </ul>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;
