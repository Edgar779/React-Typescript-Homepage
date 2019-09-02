import React from 'react';
import clsx from 'clsx';
import Swiper from 'react-id-swiper';
// @ts-ignore
import AnimatedNumber from 'react-animated-number';
import {ILegendcityServer, IUsersLegendcity} from '../types';
import axios from 'axios';
import {CONFIG} from '../config';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const peopleSwiperOption = {
    rebuildOnUpdate: true,
    direction: 'vertical',
    slidesPerView: 5,
    loopedSlides: 5,
    loopAdditionalSlides: 3,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    initialSlide: 0,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    height: 600,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        992: {
            direction: 'horizontal',
            slidesPerView: 3,
            loopedSlides: 3,
            spaceBetween: 0,
            height: 320,
            setWrapperSize: true,
            autoHeight: true,
        },
    },
};


interface JoinState {
    countJoin: number;
    usersJoin: IUsersLegendcity[];
}

interface JoinProps {
}

class Join extends React.PureComponent<JoinProps, JoinState> {
    constructor(props: JoinProps) {
        super(props);
        this.state = {
            countJoin: 0,
            usersJoin: [],
        };
    }

    private loadUserInterval: NodeJS.Timer = setInterval(() => {
        this.getUsersJoin();
    }, 5000);

    public componentDidMount() {
        this.getUsersJoin();
    }

    public getUsersJoin = () => {
        axios.get<ILegendcityServer.IUsers.OutAction.Find>(`${CONFIG.API_URL}/users`)
            .then((response) => {
                this.setState({usersJoin: response.data.users, countJoin: response.data.count});
            }).catch(error => {
            console.log(error);
        });
    }

    public render() {
        const {usersJoin, countJoin} = this.state;

        return (
            <section id="join">
                <div className="section-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-50">

                                <Fade top>
                                    <h3 className="join-us-now">
                                        Присоединись к нам
                                    </h3>
                                </Fade>

                                <Fade top>
                                    <div className="slides people-slider">
                                        <Swiper {...peopleSwiperOption}>

                                            {usersJoin.map((item, index) => (
                                                <div className="slide" key={index}>
                                                    <div className="people">
                                                        <div className={clsx('gender', item.gender === 'M' ? 'male' : 'female')}/>
                                                        <div className="info">
                                                            <div className="name">{item.name}</div>
                                                            <div className="join-from">
                                                                <div>пользователь зарегистрирован:</div>
                                                                <div>{item.from}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Swiper>
                                    </div>
                                </Fade>

                            </div>
                            <div className="col-50 center">

                                <Fade top>
                                    <div className="circle-container" id="number-counter-joins">

                                        <ul className="bubbles">
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                            <li/>
                                        </ul>
                                        <div className="circle">
                                            <div>

                                                <div className="join-mes">стали частью Легенды</div>
                                                <AnimatedNumber component="div" value={countJoin}
                                                                style={{
                                                                    transition: '0.8s ease-out',
                                                                    fontSize: 48,
                                                                    transitionProperty:
                                                                        'background-color, color, opacity',
                                                                }}
                                                                className="count"
                                                                duration={6000}
                                                                formatValue={(n: any) => Number(n.toFixed(0)).toLocaleString('ru')}
                                                />
                                                <div className="sub-info">пользователей</div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Join;
