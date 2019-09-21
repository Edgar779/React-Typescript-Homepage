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

// import { string } from 'prop-types';

interface AppState {
    showSignUpModal: boolean;
    showDrawer: boolean;
    scrollStart: boolean;
    step: number;
    chkbox: boolean,
    agreement: boolean,
    verificationCode: string,
    page1: {
        gender: boolean,
        child: string,
        car: string,
        name: string,
        date: string

    }
    page2: {
        phone: string,
        password: string
    },
    page3: {
        country: string,
        phoneRegister: string
    },
    page4: {
        onlineCard: string,
        creditCard: string,
    }
    formErrors: {
        phone: string,
        name: string,
        password: string,
        phoneRegister: string,
        creditCard: string,
        verificationCode: string
    },
    [key: string]: any
    social: Array<{ link: string, logo: string }>;
}

interface AppProps {
}

// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );
const phoneRegex: any = RegExp(/^(\+7|7|77)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm);

interface formvalid {
    formErrors: any;
}
const formValid = ({ formErrors, ...rest }: formvalid) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach((val: any) => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class App extends React.PureComponent<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            showSignUpModal: false,
            showDrawer: false,
            scrollStart: false,
            step: 3,
            chkbox: true,
            agreement: true,
            verificationCode: '',
            page1: {
                gender: false,
                child: '',
                car: '',
                name: '',
                date: ''

            },
            page2: {
                phone: "",
                password: ""
            },
            page3: {
                country: 'ru',
                phoneRegister: ''
            },
            page4: {
                creditCard: '',

                onlineCard: '',

            },
            formErrors: {
                name: "",
                phone: "",
                password: "",
                phoneRegister: "",
                creditCard: "",
                verificationCode: ""
            },


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
        this.onClickk = this.onClickk.bind(this);
        this.onChangee = this.onChangee.bind(this);
        this.handleChangeChk = this.handleChangeChk.bind(this);
    }


    public handleClose = () => this.setState({ showSignUpModal: false });
    public handleShow = () => this.setState({ showSignUpModal: true });

    public handleCloseDrawer = () => this.setState({ showDrawer: false });
    public handleShowDrawer = () => this.setState({ showDrawer: true });

    public setStep = (n: number, state: any) => {
        interface IState {
            [key: string]: string;
        }
        const res: IState = state;
        for (let key in res) {
            if (res[key] === '') {
                console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
                return
            }
        }

        if (formValid(this.state)) {
            this.setState({ step: n });
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }



    };

    public handleChange = (e: any) => {
        e.preventDefault();

        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
            case "name":
                this.setState((res) => {
                    res.page1.name = value;
                });
                formErrors.name =
                    (value.length < 3 || !isNaN(value) || value.length > 20) ? "Должно быть действительное имя" : ""

                break;
            case "phone":
                this.setState((res) => {
                    res.page2.phone = value;
                });
                formErrors.phone =
                    phoneRegex.test(value) ? "" : "Неверный номер телефона";
                break;
            case "password":
                this.setState((res) => {
                    res.page2.password = value;
                });
                formErrors.password =
                    value.length < 5 || value.length > 20 ? "Пожалуйста, выберите пароль от 6 до 20 символов" : "";
                break;
            case "country":
                this.setState((res) => {
                    res.page3.country = value;
                });
                break;
            case "phoneRegister":
                this.setState((res) => {
                    res.page3.phoneRegister = value;
                });
                formErrors.phoneRegister =
                    phoneRegex.test(value) ? "" : "Неверный номер телефона";
                break;
            case "creditCard":
                this.setState((res) => {
                    res.page4.creditCard = value;
                })
                formErrors.creditCard =
                    !isNaN(value) && value.length > 3 && value.length < 35 ? "" : "Неверный номер кредита";
                break;
            case "verificationCode":
                this.setState({ creditCard: value })
                formErrors.verificationCode =
                    !isNaN(value) && value.length > 3 && value.length < 10 ? "" : "Неверный код подтверждения";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    };
    public CheckGender(e: any) {
    }
    public onChangee(e: any) {

    }
    public onClickk(e: any) {
        const info = e.target.value;
        if (e.target.name === "date" && info) {
            this.setState((res) => {
                res.page1.date = info;
            });
        }
        if (info === "male" || info === "female") {
            this.setState((res) => {
                res.page1.gender = info;
            });
        }
        if (info === "haveChild" || info === "haveNoChild") {
            this.setState((res) => {
                res.page1.child = info;
            })
        }
        if (info === "haveCar" || info === "haveNoCar") {
            this.setState((res) => {
                res.page1.car = info;
            })
        }
        if (info === "haveAge") {

            this.setState({ haveAge: info })
        }
        if (info === "agreement") {

            this.setState({ agreement: info })
        }
        if (info === "onlineCard" || info === "physicalCard") {
            this.setState((res) => {
                res.page4.onlineCard = info;
            })
        }
        if (info === "creditCard") {
            this.setState((res) => {
                res.page4.creditCard = info;
            })
        }



    }
    public handleChangeChk(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    public render() {
        const { formErrors } = this.state;
        const { scrollStart, showDrawer, social, showSignUpModal, step } = this.state;
        return (
            <div className="App">
                <div className="wrapper" id="app">
                    <header id="header-navbar" className={scrollStart ? 'scroll' : ''}>
                        <div className="logo">
                            <a href="/">
                                <img src="assets/img/logo-blue.png" alt="" />
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
                                            <img alt="" src={item.logo} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div slot="content">
                        <Header />
                        <main>
                            <YouChoose />
                            <GetBonuses />
                            <CollectLb />
                            <SendLbOnGifts />
                            <Join />
                            <MapSection />
                            <WhereNeedLegend />
                            <Footer />
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
                                                    <select id="login-country" name="country" value={this.state.page3.country} onChange={this.handleChange} >
                                                        <option value="ru">Россия</option>
                                                        <option value="kz">Казахстан</option>
                                                    </select>
                                                    <label htmlFor="login-country">Выберите страну</label>
                                                </div>

                                                <div className="row-input">
                                                    <input id="login-phone" placeholder="+ 7 (___) ___-__-__" type="text" name="phoneRegister" onChange={this.handleChange} />
                                                    <label htmlFor="login-phone">Введите номер</label>
                                                    {formErrors.phoneRegister.length > 0 && (
                                                        <span className="errorMessage">{formErrors.phoneRegister}</span>
                                                    )}
                                                </div>
                                            </form>
                                        </div>
                                        <button onClick={(e) => this.setStep(2, this.state.page3)} className="next-btn">Далее</button>
                                    </div>
                                    <div className={clsx('step step-2', step === 2 ? 'show' : '')}>
                                        <div>
                                            <form action="#">
                                                <div className="row-input">
                                                    <div className="image-check">
                                                        <img alt="" src="../assets/img/card-form-phone.png" />
                                                    </div>
                                                    <div className="checkbox-container">
                                                        <div className="custom-control custom-checkbox">

                                                            <input id="form-online-card" className="custom-control-input" name="card"
                                                                type="radio" onClick={this.onClickk} value="onlineCard" />
                                                            <label htmlFor="form-online-card" className="custom-control-label">
                                                                <span className="txt">
                                                                    Онлайн-карта
                                                                </span>
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
                                                        <img alt="" src="../assets/img/card-form.png" />
                                                    </div>
                                                    <div className="checkbox-container">
                                                        <div className="custom-control custom-checkbox">
                                                            <input id="form-fiz-card" name="card" type="radio" className="custom-control-input"  onClick={this.onClickk} value="physicalCard" />
                                                            <label htmlFor="form-fiz-card" className="custom-control-label" >
                                                                <span className="txt">
                                                                    Физическая карта
                                                                </span>
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

                                                    <input id="login-card" placeholder="1111" name="creditCard" type="text" onChange={this.handleChange} />
                                                    <label htmlFor="login-card">Номер карты</label>
                                                    {formErrors.creditCard.length > 0 && (
                                                        <span className="errorMessage">{formErrors.creditCard}</span>
                                                    )}
                                                </div>

                                                <div className="row-input">

                                                    <input id="login-code" type="text" name="creditCard" onChange={this.handleChange} />
                                                    <label htmlFor="login-code">Код регистрации</label>
                                                    {formErrors.verificationCode.length > 0 && (
                                                        <span className="errorMessage">{formErrors.verificationCode}</span>
                                                    )}
                                                </div>
                                                    <div className="custom-control custom-checkbox">
                                                    
                                                        <input type="checkbox" name="chkbox" id="haveAge" className="custom-control-input"  value="haveAge" checked={this.state.chkbox} onChange={this.handleChangeChk} />
                                                        <label className="custom-control-label" htmlFor="haveAge">
                                                        Мне есть 16 лет
                                                    </label>
                                                    </div>
                                                <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" name="agreement" id="haveAgreement" className="custom-control-input" value="agreement" checked={this.state.chkboxAgreement} onChange={this.handleChangeChk} />
                                                        <label className="custom-control-label" htmlFor="haveAgreement">
                                                    <span className="txt">
                                                        Я соглашаюсь с условиямии хранения и обработки моих персональных
                                                        данных, а
                                                        также
                                                        на смс уведомления.
                                                        </span>
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <button onClick={(e) => this.setStep(3, this.state.page4)} className="next-btn">Активировать</button>
                                    </div>
                                    <div className={clsx('step step-3', step === 3 ? 'show' : '')}>
                                        <div>
                                            <div className="header-step">
                                                <div>Заполните анкету</div>
                                            </div>
                                            <form action="#">

                                                <div className="row-input">
                                                    <input id="login-name" placeholder="Иван" name="name" type="text" onChange={this.handleChange} />
                                                    <label htmlFor="login-name">Имя</label>

                                                    {formErrors.name.length > 0 && (
                                                        <span className="errorMessage">{formErrors.name}</span>
                                                    )}
                                                </div>




                                                <div className="row-input">
                                                    <input id="login-birthdate" type="date" onChange={this.onClickk} name="date" />
                                                    <label htmlFor="login-birthdate">Дата рождения</label>
                                                </div>
                                                <div className="row-input-variants">
                                                    <div className="header-var">Ваш пол</div>
                                                    <div className="variants">
                                                        <div className="custom-control custom-checkbox">

                                                            <input name="gender" type="radio" value="female" className="custom-control-input" id="radioBtn" onClick={this.onClickk} />
                                                            <label className="custom-control-label" htmlFor="radioBtn"><span className="txt">Женский</span></label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox lef">

                                                            <input name="gender" type="radio" className="custom-control-input" id="radioBtnmale" value="male" onClick={this.onClickk} />
                                                            <label className="custom-control-label" htmlFor="radioBtnmale" >
                                                                <span className="txt">
                                                                    Мужской
                                                            </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row-input-variants">
                                                    <div className="header-var">У вас есть дети?</div>
                                                    <div className="variants">
                                                        <div className="custom-control custom-checkbox">


                                                            <input name="scales" type="radio" className="custom-control-input" value="haveChild" id="radioBtnYes" onClick={this.onClickk} />
                                                            <label className="custom-control-label" htmlFor="radioBtnYes">
                                                                <span className="txt">
                                                                    Да
                                                            </span>
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox lef">


                                                            <input name="scales" type="radio" className="custom-control-input" id="radioBtnNo" value="haveNoChild" onClick={this.onClickk} />
                                                            <label className="custom-control-label" htmlFor="radioBtnNo">
                                                                <span className="txt">
                                                                    Нет
                                                            </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row-input-variants">
                                                    <div className="header-var">У вас есть автомобиль?</div>
                                                    <div className="variants">
                                                        <div className="custom-control custom-checkbox">


                                                            <input name="scalesCar" type="radio" className="custom-control-input" id="radioBtnYesCar" value="haveCar" onClick={this.onClickk} />
                                                            <label className="custom-control-label" htmlFor="radioBtnYesCar">
                                                                <span className="txt">
                                                                    Да
                                                            </span>
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox lef">

                                                            <input name="scalesCar" type="radio" className="custom-control-input" id="radioBtnNoCar" value="haveNoCar" onClick={this.onClickk} />
                                                            <label className="custom-control-label" htmlFor="radioBtnNoCar">
                                                                <span className="txt">
                                                                    Нет
                                                            </span>
                                                            </label>

                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <button onClick={(e) => this.setStep(4, this.state.page1)} className="next-btn">Готово</button>
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
                                                        type="text" name="phone" onChange={this.handleChange} />
                                                    <label htmlFor="login-name">Введите номер</label>
                                                    {formErrors.phone.length > 0 && (
                                                        <span className="errorMessage">{formErrors.phone}</span>
                                                    )}
                                                </div>

                                                <div className="row-input">

                                                    <input id="login-password" name="password" type="password" onChange={this.handleChange} />
                                                    <label htmlFor="login-birthdate">Пароль</label>
                                                    {formErrors.password.length > 0 && (
                                                        <span className="errorMessage">{formErrors.password}</span>
                                                    )}
                                                </div>
                                            </form>
                                        </div>
                                        <button onClick={(e) => this.setStep(1, this.state.page2)} className="next-btn">Войти</button>
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
