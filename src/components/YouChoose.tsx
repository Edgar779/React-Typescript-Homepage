import React from 'react';
// @ts-ignore
import Slider from 'react-slick';
// @ts-ignore
import $ from 'jquery';
import clsx from 'clsx';
// @ts-ignore
import Fade from 'react-reveal/Fade';

function SamplePrevArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={'slick-prev ' + className}
            style={{...style, display: 'block'}}
            onClick={onClick}
        />
    );
}

function SampleNextArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={'slick-next ' + className}
            style={{...style, display: 'block'}}
            onClick={onClick}
        />
    );
}

interface YouChooseState {
    mobileShow: boolean;
    slides: Array<{ title: string, body: string }>;
}

interface YouChooseProps {
}

const slickOptions = {
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
};

class YouChoose extends React.PureComponent<YouChooseProps, YouChooseState> {
    constructor(props: YouChooseProps) {
        super(props);
        this.state = {
            mobileShow: true,
            slides: [
                {
                    title: 'Удобно',
                    body: 'Теперь можно экономить более чем в 350 завдениях всего по одной карте Город Легенд.',
                },
                {
                    title: 'Мобильно',
                    body: 'Ваша карта всегда под рукой - в Вашем телефоне.',
                },
                {
                    title: 'Полезно',
                    body: 'С мобильным приложением Город Легенд Вы будете всегда в курсе актуальных предложений.',
                },
                {
                    title: 'Выгодно',
                    body: 'Экономьте на покупках по карте Город Легенд,' +
                        ' получайте за это Легенд Баллы и обменивайте их на подарки.',
                },
            ],
        };
    }

    public handleClickMobileHide = () => this.setState({mobileShow: false});
    public handleClickMobileShow = () => this.setState({mobileShow: true});

    public handleBeforeChange = (oldIndex: number, newIndex: number) => {
        $('#advantages-counter').text(`0${newIndex + 1}`);
        $('#colors-advantages-slider div').removeClass('show');
        $('#colors-advantages-slider').find(`div:nth-child(${newIndex + 1})`).addClass('show');
    }


    public render() {
        const {mobileShow, slides} = this.state;

        return (
            <section id="you-choose">
                <div className="container">
                    <div className="section-header">
                        <Fade top>
                            <div className="section-title">
                                <h2>
                                    <span>Вы</span> выбираете
                                </h2>
                                <div className="sub-title">
                                    Карта и мобильное приложение едины, чем пользоваться - решать вам
                                </div>
                            </div>
                        </Fade>
                        <Fade top>
                            <div className="rounded-button">
                                <div className="center-list">
                                    <button className={clsx('mobile-app button', mobileShow ? 'active' : '')}
                                            onClick={this.handleClickMobileShow}>
                                        Мобильное приложение
                                    </button>
                                    <button className={clsx('map button', !mobileShow ? 'active' : '')}
                                            onClick={this.handleClickMobileHide}>
                                        Карта
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="section-content">

                        <div className="left-images-mobile">
                            <Fade top>
                                <div className="mobile-app-preview">
                                    <div className="ellipse-1"/>
                                    <div className="ellipse-2"/>
                                    <img alt="" src="../assets/img/mobile.png" className={clsx('mobile ', mobileShow ? 'show' : '')}/>
                                    <img alt="" src="../assets/img/card.png" className={clsx('card ', !mobileShow ? 'show' : '')}/>
                                    <div className="disc-1"/>
                                    <div className="disc-2"/>
                                    <div className="disc-3"/>
                                    <div className="disc-4"/>
                                </div>
                            </Fade>
                        </div>
                        <div className="colored-slider">
                            <div>

                                <Fade top>
                                    <div className="slider-content">
                                        <div className="counter">
                                            <div className="dots">
                                                <div><i/><i/><i/><i/><i/></div>
                                                <div><i/><i/><i/><i/></div>
                                            </div>
                                            <span id="advantages-counter">01</span>
                                        </div>
                                        <div className="arrows">
                                        </div>
                                        <div className="dots">
                                            <div><i/><i/><i/><i/><i/></div>
                                            <div><i/><i/><i/><i/><i/></div>
                                        </div>
                                        <div data-item="1" id="colors-advantages-slider">
                                            <div className="show"/>
                                            <div/>
                                            <div/>
                                            <div/>
                                        </div>
                                        <Slider {...slickOptions} beforeChange={this.handleBeforeChange}>
                                            {slides.map((slide, index) => (
                                                <div className="slide" key={index}>
                                                    <div className="slide-title-container">
                                                        <div className="slide-title">
                                                            {slide.title}
                                                        </div>
                                                    </div>
                                                    <div className="slide-body">
                                                        {slide.body}
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </Fade>
                                <div className="info-text">
                                    Приобрести карту «Город Легенд» можно в любом заведении, являющимся партнером нашей
                                    программы
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default YouChoose;
