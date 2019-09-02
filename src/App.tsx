import React from 'react';
import './App.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import YouChoose from './components/YouChoose';
import Header from './components/Header';
import CollectLb from './components/CollectLb';
import WhereNeedLegend from './components/WhereNeedLegend';
import SendLbOnGifts from './components/SendLbOnGifts';
import GetBonuses from './components/GetBonuses';
import Footer from './components/Footer';
import Join from './components/Join';
import MapSection from './components/MapSection';
import clsx from 'clsx';
import Modal from 'react-bootstrap/Modal';

interface AppState {
    showSignUpModal: boolean;
    showDrawer: boolean;
    scrollStart: boolean;
    step: number;
    country: string;
    social: Array<{ link: string, logo: string }>;
}

interface AppProps {
}

class App extends React.PureComponent<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            showSignUpModal: false,
            showDrawer: false,
            scrollStart: false,
            step: 3,
            country: 'ru',
            social: [
                {
                    link: '#',
                    logo: '../assets/img/instagram-social-network-logo-of-photo-camera.svg',
                },
                {
                    link: '#',
                    logo: '../assets/img/odnoklassniki-logo.svg',
                },
                {
                    link: '#',
                    logo: '../assets/img/youtube-symbol.svg',
                },
                {
                    link: '#',
                    logo: '../assets/img/odnoklassniki-logo.svg',
                },
                {
                    link: '#',
                    logo: '../assets/img/vk-social-logotype.svg',
                },
            ],
        };
    }

    public handleClose = () => this.setState({showSignUpModal: false});
    public handleShow = () => this.setState({showSignUpModal: true});

    public handleCloseDrawer = () => this.setState({showDrawer: false});
    public handleShowDrawer = () => this.setState({showDrawer: true});

    public setStep = (n: number) => this.setState({step: n});

    public render() {
        const {scrollStart, showDrawer, social, showSignUpModal, step, country} = this.state;
        return (
            <div className="App">
                <div className="wrapper" id="app">
                    <header id="header-navbar" className={scrollStart ? 'scroll' : ''}>
                        <div className="logo">
                            <a href="/">
                                <img src="assets/img/logo-blue.png" alt=""/>
                            </a>
                        </div>
                        <nav className="navbar">
                            <div className="nav-container">
                                <ul className="navigation">
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Пользователям
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Бизнесу</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Партнерам</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <li>
                                        <a href="https://legendcity.ru/page/docs.php">О нас</a>
                                    </li>
                                    <li>
                                        <a href="#">Блог</a>
                                    </li>
                                    <li>
                                        <a href="https://legendcity.ru/page/contacts.php">Контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="navbar-expand-btn">
                            <button onClick={this.handleShowDrawer}></button>
                        </div>
                        <div className="side-info">
                            <div className="phone-city">
                                <div className="phone">
                                    <a href="tel:88005110011">8 800 511 00 11</a>
                                    <span>Телефон горячей линии</span>
                                </div>
                                <div className="city">
                              <span>
                                Город
                              </span>
                                </div>
                            </div>
                            <div className="sign-in">
                                <a className="button activate-card" onClick={this.handleShow}>Активировать карту</a>
                                <a className="button button-outline" href="#">Войти</a>
                            </div>
                        </div>
                    </header>
                    <div className={clsx('drawer-wrap ', showDrawer ? 'open' : '')}>

                        <div className="drawer-content">
                            <div className="menu-header">
                                <div className="city">
                                    Город
                                </div>
                                <div className="close-menu">
                                    <button onClick={this.handleCloseDrawer}></button>
                                </div>
                            </div>
                            <div className="drawer-body">
                                <div className="menu-drawer">
                                    <ul>
                                        <li>
                                            <a href="https://legendcity.ru/page/docs.php">О нас</a>
                                        </li>
                                        <li>
                                            <a href="#">Блог</a>
                                        </li>
                                        <li>
                                            <a href="https://legendcity.ru/page/contacts.php">Контакты</a>
                                        </li>
                                        <li>
                                            <a href="#">Активировать карту</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bottom-button">
                                    <a className="button" href="#">Войти</a>
                                </div>
                            </div>
                            <div className="drawer-footer">
                                <div className="phone">
                                    <a href="tel:88005110011">8 800 511 00 11</a>
                                    <div className="info-phone">Телефон горячей линии</div>
                                </div>
                                <div className="social-buttons">
                                    {social.map((item, index) => (
                                        <a className="item" key={index} href={item.link}>
                                            <img alt="" src={item.logo}/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div slot="content">
                        <Header/>
                        <main>
                            <YouChoose/>
                            <GetBonuses/>
                            <CollectLb/>
                            <SendLbOnGifts/>
                            <Join/>
                            <MapSection/>
                            <WhereNeedLegend/>
                            <Footer/>
                        </main>
                        <footer>
                            <div>
                                © 2019 Город Легенд. Все права защищены
                            </div>
                        </footer>
                    </div>

                    <div className="sign-up">
                        <Modal show={showSignUpModal} onHide={this.handleClose} centered hide-footer
                               hide-header id="modal-reg-start" title="Активируйте свою карту Легенда">
                            <div className="row">
                                <div className="col">
                                    <div className={clsx('step step-1', step === 1 ? 'show' : '')}>
                                        <div>
                                            <div className="header-step">
                                                <div>Активируйте</div>
                                                свою карту Легенда
                                            </div>
                                            <form action="#">
                                                <div className="row-input">
                                                    <select id="login-country" name="country" value={country}>
                                                        <option value="ru">Россия</option>
                                                        <option value="kz">Казахстан</option>
                                                    </select>
                                                    <label htmlFor="login-country">Выберите страну</label>
                                                </div>
                                                <div className="row-input">
                                                    <input id="login-phone" placeholder="+ 7 (___) ___-__-__" type="text"/>
                                                    <label htmlFor="login-phone">Введите номер</label>
                                                </div>
                                            </form>
                                        </div>
                                        <button onClick={(e) => this.setStep(2)} className="next-btn">Далее</button>
                                    </div>
                                    <div className={clsx('step step-2', step === 2 ? 'show' : '')}>
                                        <div>
                                            <form action="#">
                                                <div className="row-input">
                                                    <div className="image-check">
                                                        <img alt="" src="../assets/img/card-form-phone.png"/>
                                                    </div>
                                                    <div className="checkbox-container">
                                                        <div className="check-box-form">
                                                            <label htmlFor="form-online-card">
                                                                <input checked id="form-online-card" name="scales"
                                                                       type="checkbox"/>
                                                                Онлайн-карта
                                                            </label>
                                                        </div>
                                                        <div className="info">
                                                            Доступна только через мобильное приложение. Для активации
                                                            укажите
                                                            подаренный
                                                            вам код регистрации.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row-input">
                                                    <div className="image-check">
                                                        <img alt="" src="../assets/img/card-form.png"/>
                                                    </div>
                                                    <div className="checkbox-container">
                                                        <div className="check-box-form">
                                                            <label htmlFor="form-fiz-card">
                                                                <input id="form-fiz-card" name="scales" type="checkbox"/>
                                                                Физическая карта
                                                            </label>
                                                        </div>
                                                        <div className="info">
                                                            Для активации требуется ввести номер карты и код регистрации,
                                                            указанные
                                                            на
                                                            обратной стороне.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row-input">
                                                    <input id="login-card" placeholder="1111" type="text"/>
                                                    <label htmlFor="login-card">Номер карты</label>
                                                </div>
                                                <div className="row-input">
                                                    <input id="login-code" type="text"/>
                                                    <label htmlFor="login-code">Код регистрации</label>
                                                </div>
                                                <div className="row-input">
                                                    <label className="checkbox-label">
                                                        <input name="scales" type="checkbox"/>
                                                        Мне есть 16 лет
                                                    </label>
                                                </div>
                                                <div className="row-input">
                                                    <label className="checkbox-label">
                                                        <input name="scales" type="checkbox"/>
                                                        Я соглашаюсь с условиямии хранения и обработки моих персональных
                                                        данных, а
                                                        также
                                                        на смс уведомления.
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <button onClick={(e) => this.setStep(3)} className="next-btn">Активировать</button>
                                    </div>
                                    <div className={clsx('step step-3', step === 3 ? 'show' : '')}>
                                        <div>
                                            <div className="header-step">
                                                <div>Заполните анкету</div>
                                            </div>
                                            <form action="#">
                                                <div className="row-input">
                                                    <input id="login-name" placeholder="Иван" type="text"/>
                                                    <label htmlFor="login-name">Имя</label>
                                                </div>
                                                <div className="row-input">
                                                    <input id="login-birthdate" type="date"/>
                                                    <label htmlFor="login-birthdate">Дата рождения</label>
                                                </div>
                                                <div className="row-input-variants">
                                                    <div className="header-var">Ваш пол</div>
                                                    <div className="variants">
                                                        <label className="checkbox-label">
                                                            <input name="scales" type="checkbox"/>
                                                            Женский
                                                        </label>
                                                        <label className="checkbox-label">
                                                            <input name="scales" type="checkbox"/>
                                                            Мужской
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row-input-variants">
                                                    <div className="header-var">У вас есть дети?</div>
                                                    <div className="variants">
                                                        <label className="checkbox-label">
                                                            <input name="scales" type="checkbox"/>
                                                            Да
                                                        </label>
                                                        <label className="checkbox-label">
                                                            <input name="scales" type="checkbox"/>
                                                            Нет
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row-input-variants">
                                                    <div className="header-var">У вас есть автомобиль?</div>
                                                    <div className="variants">
                                                        <label className="checkbox-label">
                                                            <input name="scales" type="checkbox"/>
                                                            Да
                                                        </label>
                                                        <label className="checkbox-label">
                                                            <input name="scales" type="checkbox"/>
                                                            Нет
                                                        </label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <button onClick={(e) => this.setStep(4)} className="next-btn">Готово</button>
                                    </div>
                                    <div className={clsx('step step-4', step === 4 ? 'show' : '')}>
                                        <div>
                                            <div className="header-step">
                                                <div>Заполните анкету</div>
                                            </div>
                                            <form action="#">
                                                <div className="info-bubble">
                                                    На ваш номер телефона зарегистрирован аккаунт.
                                                </div>
                                                <div className="row-input">
                                                    <input id="login-phone-login" placeholder="+ 7 (625) 544-55-55"
                                                           type="text"/>
                                                    <label htmlFor="login-name">Введите номер</label>
                                                </div>
                                                <div className="row-input">
                                                    <input id="login-password" type="password"/>
                                                    <label htmlFor="login-birthdate">Пароль</label>
                                                </div>
                                            </form>
                                        </div>
                                        <button onClick={(e) => this.setStep(1)} className="next-btn">Войти</button>
                                    </div>
                                </div>
                                <div className="col col-right">

                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="fixed-buttons">
                        <a className="company" href="#">
                            Заведения
                            в городе
                        </a>
                        <a className="cashback" href="#">
                            Интернет-
                            магазины
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
