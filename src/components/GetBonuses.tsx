import React from 'react';
import axios from 'axios';
import Swiper from 'react-id-swiper';
// @ts-ignore
import AnimatedNumber from 'react-animated-number';
import {ICompaniesLegendcity, ILegendcityServer} from '../types';
import {CONFIG} from '../config';
import {declOfNum} from '../functions';
// @ts-ignore
import Fade from 'react-reveal/Fade';

interface GetBonusesState {
    companies: ICompaniesLegendcity[];
}

interface GetBonusesProps {
}

const companySwiperOption = {
    rebuildOnUpdate: true,
    slidesPerView: 5,
    loopedSlides: 5,
    loopAdditionalSlides: 3,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    initialSlide: 0,
    autoHeight: true,
    grabCursor: true,
    loop: true,
    setWrapperSize: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            loopedSlides: 3,
        },
    },
};

class GetBonuses extends React.PureComponent<GetBonusesProps, GetBonusesState> {
    constructor(props: GetBonusesProps) {
        super(props);
        this.state = {
            companies: [],
        };
    }

    public componentDidMount() {
        this.getCompanies();
    }

    public getCompanies = () => {
        axios.get<ILegendcityServer.ICompanies.OutAction.Find>(`${CONFIG.API_URL}/companies`)
            .then((response) => {
                this.setState({companies: response.data});
            }).catch(error => {
                console.log(error);
        });
    }

    public render() {
        const {companies} = this.state;
        return (
            <div>
                <section id="get-bonuses">
                    <div className="container">
                        <div className="section-header">
                            <Fade top>
                            <div className="section-title">
                                <h2>
                                    <span>Получайте</span> скидки и бонусы
                                </h2>
                                <div className="sub-title">
                                    Держатели карт получают гарантированные скидки и бонусы от любимых заведений
                                </div>
                            </div>
                            </Fade>
                        </div>
                        <div className="section-content">

                            <Fade top>
                            <div className="company-slider">
                                <div className="company-slider-carousel">

                                    <Swiper {...companySwiperOption}>
                                        {companies.map((slide, index) => (
                                            <div className="slide" key={index}>
                                                <div className="company">
                                                    <div className="company__title">
                                                        {slide.title}
                                                    </div>
                                                    <div className="company__branches">
                                                        {slide.branches} {declOfNum(slide.branches, ['филиал', 'филиала', 'филиалов'])}
                                                    </div>
                                                    <div className="company__logo">
                                                        <img alt="" src={slide.logo}/>
                                                    </div>
                                                    <div className="company__discount">
                                                        <span>{slide.loyalty.percent}%</span>
                                                        {slide.loyalty.type === 'bonuses' ? 'бонусами' : 'скидка'}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            </Fade>
                            <Fade top>
                            <div className="company-counter" id="number-counter-companies">
                                <div className="companies">
                                    <div className="arrow-up"/>
                                    <div>
                                        <AnimatedNumber component="div" value={238}
                                                        style={{
                                                            transition: '0.8s ease-out',
                                                            fontSize: 48,
                                                            transitionProperty:
                                                                'background-color, color, opacity',
                                                        }}
                                                        className="number"
                                                        duration={5000}
                                                        formatValue={(n: any) => n.toFixed(0)}
                                        />
                                        <span>компаний</span>
                                    </div>
                                </div>
                                <div className="branches">
                                    <div className="arrow-up"/>
                                    <div>
                                        <AnimatedNumber component="div" value={712}
                                                        style={{
                                                            transition: '0.8s ease-out',
                                                            fontSize: 48,
                                                            transitionProperty:
                                                                'background-color, color, opacity',
                                                        }}
                                                        className="number"
                                                        duration={5000}
                                                        formatValue={(n: any) => n.toFixed(0)}
                                        />
                                        <span>филиалов</span>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default GetBonuses;
