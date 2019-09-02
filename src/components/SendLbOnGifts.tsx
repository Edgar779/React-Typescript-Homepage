import React from 'react';
import Swiper from 'react-id-swiper';
import clsx from 'clsx';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
// @ts-ignore
import Fade from 'react-reveal/Fade';

interface IGift {
    image: string;
    companyLogo: string;
    companyTitle: string;
    companySubTitle: string;
    price: number;
    description: string;
    certificate: boolean;
}

interface SendLbOnGiftsState {
    money: number;
    mountCount: number;
    gifts: IGift[];
    swiper: any;
}

interface SendLbOnGiftsProps {
}

const giftSwiperOption = {
    slidesPerView: 3,
    loopedSlides: 3,
    loopAdditionalSlides: 2,
    slidesOffsetBefore: 120,
    slidesOffsetAfter: 30,
    spaceBetween: 0,
    initialSlide: 0,
    grabCursor: true,
    loop: true,
    breakpoints: {
        568: {
            slidesOffsetBefore: 35,
            slidesPerView: 1,
            spaceBetween: 0,
            slidesOffsetAfter: 35,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
    },
    navigation: {
        nextEl: '#gift-arrow-next',
        prevEl: '#gift-arrow-prev',
    },
    autoplay: {
        delay: 5000,
    },
};

class SendLbOnGifts extends React.PureComponent<SendLbOnGiftsProps, SendLbOnGiftsState> {
    constructor(props: SendLbOnGiftsProps) {
        super(props);
        this.state = {
            money: 150000,
            mountCount: 6,
            gifts: [
                {
                    image: '../assets/img/gift-1.png',
                    companyLogo: '../assets/img/company-1.png',
                    companyTitle: 'АкваРио',
                    companySubTitle: 'Аквапарк',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: false,
                },
                {
                    image: '../assets/img/gift-2.jpg',
                    companyLogo: '../assets/img/company-2.png',
                    companyTitle: 'Аквабан',
                    companySubTitle: 'Экспресс мойка',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: true,
                },
                {
                    image: '../assets/img/gift-1.png',
                    companyLogo: '../assets/img/company-1.png',
                    companyTitle: 'АкваРио',
                    companySubTitle: 'Аквапарк',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: false,
                },
                {
                    image: '../assets/img/gift-2.jpg',
                    companyLogo: '../assets/img/company-2.png',
                    companyTitle: 'Аквабан',
                    companySubTitle: 'Экспресс мойка',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: true,
                },
                {
                    image: '../assets/img/gift-1.png',
                    companyLogo: '../assets/img/company-1.png',
                    companyTitle: 'АкваРио',
                    companySubTitle: 'Аквапарк',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: false,
                },
                {
                    image: '../assets/img/gift-2.jpg',
                    companyLogo: '../assets/img/company-2.png',
                    companyTitle: 'Аквабан',
                    companySubTitle: 'Экспресс мойка',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: true,
                },
                {
                    image: '../assets/img/gift-1.png',
                    companyLogo: '../assets/img/company-1.png',
                    companyTitle: 'АкваРио',
                    companySubTitle: 'Аквапарк',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: false,
                },
                {
                    image: '../assets/img/gift-2.jpg',
                    companyLogo: '../assets/img/company-2.png',
                    companyTitle: 'Аквабан',
                    companySubTitle: 'Экспресс мойка',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: true,
                },
                {
                    image: '../assets/img/gift-1.png',
                    companyLogo: '../assets/img/company-1.png',
                    companyTitle: 'АкваРио',
                    companySubTitle: 'Аквапарк',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: false,
                },
                {
                    image: '../assets/img/gift-2.jpg',
                    companyLogo: '../assets/img/company-2.png',
                    companyTitle: 'Аквабан',
                    companySubTitle: 'Экспресс мойка',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: true,
                },
                {
                    image: '../assets/img/gift-1.png',
                    companyLogo: '../assets/img/company-1.png',
                    companyTitle: 'АкваРио',
                    companySubTitle: 'Аквапарк',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: false,
                },
                {
                    image: '../assets/img/gift-2.jpg',
                    companyLogo: '../assets/img/company-2.png',
                    companyTitle: 'Аквабан',
                    companySubTitle: 'Экспресс мойка',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: true,
                },
                {
                    image: '../assets/img/gift-1.png',
                    companyLogo: '../assets/img/company-1.png',
                    companyTitle: 'АкваРио',
                    companySubTitle: 'Аквапарк',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: false,
                },
                {
                    image: '../assets/img/gift-2.jpg',
                    companyLogo: '../assets/img/company-2.png',
                    companyTitle: 'Аквабан',
                    companySubTitle: 'Экспресс мойка',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: true,
                },
                {
                    image: '../assets/img/gift-1.png',
                    companyLogo: '../assets/img/company-1.png',
                    companyTitle: 'АкваРио',
                    companySubTitle: 'Аквапарк',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: false,
                },
                {
                    image: '../assets/img/gift-2.jpg',
                    companyLogo: '../assets/img/company-2.png',
                    companyTitle: 'Аквабан',
                    companySubTitle: 'Экспресс мойка',
                    price: 2000,
                    description: '300 бонусов на 2 часа',
                    certificate: true,
                },
            ],
            swiper: null,
        };
    }

    public goNext = () => {
        if (this.state.swiper !== null) {
            (this.state.swiper as any).slideNext();
        }
    }

    public goPrev = () => {
        if (this.state.swiper !== null) {
            (this.state.swiper as any).slidePrev();
        }
    }

    public handleChange = (value: any) => {
        this.setState({money: +value});
    }

    public updateSwiper = (value: any) => this.setState({swiper: value});

    public render() {
        const {money, mountCount, gifts} = this.state;
        return (
            <section id="send-lb-on-gifts">
                <div className="container">
                    <div className="section-header">
                        <Fade top>
                            <div className="section-title">
                                <h2>
                                    <span>Тратьте Легенд Баллы </span> на подарки
                                </h2>
                                <div className="sub-title">
                                    Обменивайте накопленные Легенд Баллы на товары и услуги
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="section-content">
                    <div className="cards-list">
                        <div className="cards-calculator">
                            <Fade top>
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Рассчитайте выгоду
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="money-slider">
                                                <div className="slider-title">Траты в мес.</div>
                                                <div className="slider-money">
                                                    <span id="money-spend">{`${(money).toLocaleString()}`}</span>
                                                    <span className="rub">₽</span>
                                                </div>
                                            </div>
                                            <div className="row-slider">
                                                <Slider
                                                    min={1000}
                                                    max={1000000}
                                                    tooltip={false}
                                                    step={500}
                                                    value={money}
                                                    onChange={this.handleChange}
                                                />
                                                <div className="values-limit">
                                                    <div className="min-value">1 000 <span className="rub">₽</span></div>
                                                    <div className="max-value">1 000 000 <span className="rub">₽</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="discount-mouth">
                                                <div className="discount-mouth-title">Я сэкономлю в мес.</div>
                                                <div className="discount-mouth-price">
                                                    <span id="money-save">{`${(money * 0.1).toLocaleString()}`}</span>
                                                    <span className="rub">₽</span>
                                                </div>
                                            </div>
                                            <div className="discount-many-mouth" data-count="6">
                                                <div className="discount-many-mouth-title">
                                                    Я получу за <span id="mouth-count">{mountCount}</span> МЕСЯЦЕВ
                                                </div>
                                                <div className="discount-mouth-price">
                                            <span
                                                id="lb-up">{`${(money * 0.04 * mountCount).toLocaleString()}`}</span>
                                                    <span className="LB">LB</span>
                                                    <div className="lb-info">
                                                        Баллов Легенд
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>


                        <div className="cards-slider">

                            <Fade top>
                                <div className="gift-slider-carousel">

                                    <Swiper {...giftSwiperOption} getSwiper={this.updateSwiper}>
                                        {gifts.map((item, index) => (
                                            <div className="slide" key={index}>
                                                <div className="card">
                                                    <div className="card-content">
                                                        <div className="card-header">
                                                            <div className="card-image">
                                                                <img src={item.image} alt=""/>
                                                            </div>
                                                            <div
                                                                className={clsx(item.certificate ? 'gift-type certificate' : 'gift-type coupon')}>
                                                                {item.certificate ? 'Сертификат' : 'Купон'}
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="gift-header">
                                                                <div className="gift-name">
                                                                    <div className="company-image">
                                                                        <img src={item.companyLogo} alt=""/>
                                                                    </div>
                                                                    <div className="company-title">
                                                                        <div>{item.companyTitle}</div>
                                                                        <span>{item.companySubTitle}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="gift-price">
                                                                    {item.price} LB
                                                                </div>
                                                            </div>
                                                            <div className="gift-info">
                                                                {item.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Swiper>
                                    <div className="arrow swiper-arrow-prev" id="gift-arrow-prev" onClick={this.goPrev}/>
                                    <div className="arrow swiper-arrow-next" id="gift-arrow-next" onClick={this.goNext}/>
                                </div>
                            </Fade>
                        </div>


                    </div>
                </div>
            </section>
        );
    }

}

export default SendLbOnGifts;
