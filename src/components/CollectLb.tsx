import React from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';

interface CollectLbState {
}

interface CollectLbProps {
}

class CollectLb extends React.PureComponent<CollectLbProps, CollectLbState> {
    public render() {
        return (
            <section id="collect-lb">
                <div className="container">
                    <div className="section-header">
                        <Fade top>
                            <div className="section-title">
                                <h2>
                                    <span>Накапливайте </span> Легенд Баллы
                                </h2>
                                <div className="sub-title">
                                    Как получить LB (Легенд Баллы)?
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="section-content">
                        <div className="lb-from row">
                            <Fade top>
                                <div className="item purchase">
                                    <div className="dots">
                                        <div><i/><i/><i/><i/><i/></div>
                                        <div><i/><i/><i/><i/><i/></div>
                                    </div>
                                    <div className="item__content">
                                        <div className="item__header">
                                            <div className="item__title">
                                                За покупки
                                                <div className="img__preview">
                                                    <div/>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-b">
                                            Получайте Легенд Баллы с каждой покупки в заведениях города и интернет-магазинах.
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade top>
                                <div className="item cards">
                                    <div className="dots">
                                        <div><i/><i/><i/><i/><i/></div>
                                        <div><i/><i/><i/><i/><i/></div>
                                    </div>
                                    <div className="item__content">
                                        <div className="item__header">
                                            <div className="item__title">
                                                За карты
                                                <div className="img__preview">
                                                    <div/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-b">
                                            За каждую подаренную карту родным или близким вам начисляются Легенд Баллы.
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade top>
                                <div className="item review">
                                    <div className="dots">
                                        <div><i/><i/><i/><i/><i/></div>
                                        <div><i/><i/><i/><i/><i/></div>
                                    </div>
                                    <div className="item__content">
                                        <div className="item__header">
                                            <div className="item__title">
                                                За отзывы
                                                <div className="img__preview">
                                                    <div/>
                                                    <div/>
                                                    <div/>
                                                    <div/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-b">
                                            Нам важно ваше мнение! Мы дарим Легенд Баллы за ваши отзывы и оценку сервиса.
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <Fade top>
                            <div className="more-info">
                                <button className="button watch-video">
                                    <i className="material-icons">play_arrow</i>
                                </button>
                                <div className="text">
                                    <div className="first-row">
                                        Узнать больше
                                    </div>
                                    <div className="second-row">
                                        о Легенд Баллах
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        );
    }
}

export default CollectLb;
