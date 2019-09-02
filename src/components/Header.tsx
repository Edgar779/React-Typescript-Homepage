import React from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';

class Header extends React.PureComponent {
    public render() {
        return (
            <div className="header">
                <div id="blue-wave">
                    <ul className="bubbles">
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                    </ul>
                    <div className="waves">
                        <div className="wave-bg wave-1"/>
                        <div className="wave-bg wave-2"/>
                        <div className="wave-bg wave-3"/>
                    </div>
                </div>

                <div className="intro">
                    <div className="container-fluid">
                        <Fade top>
                            <div className="welcome-block container">
                                <h1>
                                    <span>Карта Легенда -</span>
                                    <span>все лучшее в одном!</span>
                                </h1>
                                <div className="sub-header">
                                    Скидки, кэшбэк, бонусы - все по одной карте <br/>
                                    от любимых заведений и интернет-магазинов.
                                </div>
                            </div>
                        </Fade>
                        <div className="watch-video-btn">
                            <a href="#">
                                <i className="material-icons">play_arrow</i>
                            </a>
                        </div>
                        <Fade top>
                            <div className="mobile-app">
                                <div className="info">
                                    Скачайте наше мобильное приложение
                                </div>
                                <div className="row">
                                    <div className="download-buttons">
                                        <a target="_blank" rel="noopener noreferrer" className="button google-play"
                                           href="https://play.google.com/store/apps/details?id=com.legendcity.legendcity&hl=ru">
                                            <img src="../assets/img/google-play.svg" alt=""/>
                                            <span>
                  Google Play
                </span>
                                        </a>
                                        <a target="_blank" rel="noopener noreferrer" className="button app-store"
                                           href="https://apps.apple.com/ru/app/legendcity/id1229070695">
                                            <img src="../assets/img/app-store.svg" alt=""/>
                                            <span>
                   App Store
                </span>
                                        </a>
                                        <a className="button watch-video" href="#">
                                            <i className="material-icons">play_arrow</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
