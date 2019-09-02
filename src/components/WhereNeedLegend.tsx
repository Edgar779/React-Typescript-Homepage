import React from 'react';
import clsx from 'clsx';
// @ts-ignore
import Fade from 'react-reveal/Fade';

interface WhereNeedLegendState {
    companyAddress: string;
    companyAddressError: string;
}

interface WhereNeedLegendProps {
}

class WhereNeedLegend extends React.PureComponent<WhereNeedLegendProps, WhereNeedLegendState> {
    constructor(props: WhereNeedLegendProps) {
        super(props);
        this.state = {
            companyAddress: '',
            companyAddressError: '',
        };
    }

    public checkForm = (e: any) => {
        this.setState({companyAddressError: ''});
        const {companyAddress} = this.state;
        if (!!companyAddress
            && companyAddress.length >= 10
            && companyAddress.length <= 100
        ) {
            e.preventDefault();
            return true;
        }

        if (!companyAddress) {
            this.setState({companyAddressError: 'Требуется указать компанию и адресс'});
        }

        if (!!companyAddress && (
            companyAddress.length < 10
            || companyAddress.length > 100)) {
            this.setState({companyAddressError: 'Ввести можно от 10 до 100 символов'});
        }
        e.preventDefault();
    }

    public onChangeText = (event: any) => this.setState({companyAddress: event.target.value});

    public render() {
        const {companyAddress, companyAddressError} = this.state;
        return (
            <section id="where-need-legend">
                <div className="container">
                    <div className="section-header">
                        <Fade top>
                            <div className="section-title">
                                <h2>
                                    <span>Где вам не хватает</span> Легенды?
                                </h2>
                                <div className="sub-title">
                                    Напишите нам, где бы вы хотели пользоваться картой легенда и наш агент обязательно решит
                                    этот вопрос
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="section-content">
                        <Fade top>
                            <form action="/" onSubmit={this.checkForm} method="post" id="form-need-legend">
                                <div className="form-content">
                                    <div className="input-container">
                                        <input type="text" id="company-address" value={companyAddress} onChange={this.onChangeText}
                                               name="companyAddress"
                                               placeholder="Компания, адрес"
                                               className={clsx(companyAddressError !== '' ? 'error' : '')}/>
                                        <div className={clsx('helper-text-error', companyAddressError !== '' ? 'show' : '')}>
                                            {companyAddressError}
                                        </div>
                                    </div>
                                    <button type="submit">
                                        <span>Отправить</span>
                                    </button>
                                </div>
                            </form>
                        </Fade>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhereNeedLegend;
