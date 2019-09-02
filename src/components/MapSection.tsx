import React from 'react';
// @ts-ignore
import {GeolocationControl, Map, Placemark, YMaps, ZoomControl} from 'react-yandex-maps';
import {ILegendcityServer, IPurchasesLegendcity} from '../types';
import axios from 'axios';
import {CONFIG} from '../config';
// @ts-ignore
import Fade from 'react-reveal/Fade';

interface MapSectionState {
    purchases: IPurchasesLegendcity[];
    numberOfShow: number;
    moneySpend: number;
    moneySpendForShow: number;
}

interface MapSectionProps {
}

const placeMark = {
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
}

class MapSection extends React.PureComponent<MapSectionProps, MapSectionState> {
    constructor(props: MapSectionProps) {
        super(props);
        this.state = {
            purchases: [
                // {
                //     logo: '../assets/img/company-2.png',
                //     name: 'Наталья',
                //     companyName: 'Аквабан',
                //     purchasedAt: 1567417181000,
                //     moneySave: 250,
                //     coords: [54.983259, 73.309813],
                // },
                // {
                //     logo: '../assets/img/company-2.png',
                //     name: 'Наталья',
                //     companyName: 'Аквабан',
                //     purchasedAt: 1567417181000,
                //     moneySave: 250,
                //     coords: [54.986843, 73.319586],
                // },
                // {
                //     logo: '../assets/img/company-2.png',
                //     name: 'Наталья',
                //     companyName: 'Аквабан',
                //     purchasedAt: 1567417181000,
                //     moneySave: 250,
                //     coords: [54.988682, 73.306561],
                // },
                // {
                //     logo: '../assets/img/company-2.png',
                //     name: 'Наталья',
                //     companyName: 'Аквабан',
                //     purchasedAt: 1567417181000,
                //     moneySave: 250,
                //     coords: [54.978002, 73.324100],
                // },
                // {
                //     logo: '../assets/img/company-2.png',
                //     name: 'Наталья',
                //     companyName: 'Аквабан',
                //     purchasedAt: 1567417181000,
                //     moneySave: 250,
                //     coords: [54.985243, 73.365684],
                // },
            ],
            numberOfShow: 7,
            moneySpend: 0,
            moneySpendForShow: 0,
        };
    }

    private loadPurchasesInterval: NodeJS.Timer = setInterval(() => {
        this.getPurchases();
        this.getMoneySave();
    }, 5000);

    public componentDidMount() {
        this.getPurchases();
        this.getMoneySave();
    }

    public getPurchases = () => {
        axios.get<ILegendcityServer.IPurchases.OutAction.Find>(`${CONFIG.API_URL}/purchases`)
            .then((response) => {
                this.setState({purchases: response.data});
            }).catch(error => {
            console.log(error);
        });
    }

    public getMoneySave = () => {
        axios.get<ILegendcityServer.IUsers.OutAction.MoneySave>(`${CONFIG.API_URL}/money-save`)
            .then((response) => {
                this.setState({moneySpend: response.data});
            }).catch(error => {
            console.log(error);
        });
    }

    public createListNumber = () => {
        const sNumber = this.state.moneySpend.toString();
        const {numberOfShow} = this.state;
        const len = sNumber.length;
        const result: any[] = [];
        if (len <= numberOfShow) {
            for (let i = 0; i <= numberOfShow - len; i++) {
                result.push(0);
            }
        }
        for (let i = 0; i < len; i += 1) {
            result.push(+sNumber.charAt(i));
        }
        const numbers = [];
        for (let n = 0; n < result.length; n++) {
            if (n === result.length % 3 || (result.length - n) % 3 === 0) {
                numbers.push(<li key={n + '_22'} className="dot"/>);
            }
            numbers.push(<li key={n}>{result[n]}</li>);
        }
        return (numbers);
    }
    public theFormat = (num: number) => {
        return num.toFixed(0);
    }

    public render() {
        const {purchases, numberOfShow, moneySpend} = this.state;

        return (
            <section id="map">
                <div className="section-content">
                    <div className="map-main-container" id="number-counter-joins-box">
                        <Fade top>
                            <div className="container">
                                <div className="row">
                                    <div className="discount-price">
                                        <ul>
                                            {this.createListNumber()}
                                        </ul>
                                        <div className="discount-text">
                                            <span>сэкономили</span> по карте Легенда
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div id="map-container">
                        <YMaps>
                            <Map defaultState={{
                                center: [54.989342, 73.368212],
                                zoom: 12,
                                behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
                            }}
                                 width="100%"
                                 className="yandex-map">
                                <GeolocationControl options={{float: 'left'}}/>
                                <ZoomControl options={{float: 'left'}}/>
                                {purchases.map((item, index) =>
                                    <Placemark key={index} geometry={item.coords}
                                               options={{
                                                   iconLayout: 'default#image',
                                                   iconImageHref: 'http://localhost:3000/assets/img/pin.png',
                                                   iconImageSize: [29, 37],
                                                   iconImageOffset: [-14.5, -37],
                                               }}
                                               properties={{
                                                   balloonContentHeader: `<div class="header-balloon"><img src="${item.logo}" alt=""><div class="company-name">${item.companyName}</div></div>`,
                                                   balloonContentBody: `<div class="body-balloon">${item.name}  +${item.moneySave}₽</div>`,
                                                   balloonContentFooter: `<div class="time-footer">
                                                       <span class="time">${(new Date(item.purchasedAt)).toISOString().slice(11, 15)}</span>
                                                       <span class="discount">сэкономил(а)</span>
                                                   </div>`,
                                                   balloonContent: 'Это балун',
                                               }}
                                               {...placeMark}
                                    />)}
                            </Map>
                        </YMaps>
                        <div className="last-purchases">
                            <div className="purchases-container">

                                <Fade top>
                                    <div className="header-buys">
                                        Последние покупки
                                    </div>
                                </Fade>
                                <Fade top>
                                    <div className="purchases-list">
                                        {purchases.map((item, i) => (
                                            <div className="purchase-item" key={i}>
                                                <div className="left-info">
                                                    <div className="company-logo">
                                                        <img src={item.logo} alt=""/>
                                                    </div>
                                                    <div className="info">
                                                        <div className="name">{item.name}</div>
                                                        <div
                                                            className="date">{new Date(item.purchasedAt).toLocaleString().slice(0, 10)}</div>
                                                    </div>
                                                </div>
                                                <div className="saved-money-container">
                                                    <div className="money">{item.moneySave} ₽</div>
                                                    <div className="descr">сэкономил(а)</div>
                                                </div>
                                            </div>
                                        ))}
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

export default MapSection;
