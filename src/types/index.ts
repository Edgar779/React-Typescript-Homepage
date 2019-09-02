export namespace ILegendcityServer {
    export namespace ICompanies {
        export interface InAction {
            find?: ILegendcityServer.ICompanies.InAction.Find;
        }

        export namespace InAction {
            export interface Find {

            }
        }

        export interface OutAction {
            find?: ILegendcityServer.ICompanies.OutAction.Find;
        }

        export namespace OutAction {
            export type Find = ICompaniesLegendcity[];
        }
    }
    export namespace IPurchases {
        export interface InAction {
            find?: ILegendcityServer.IPurchases.InAction.Find;
        }

        export namespace InAction {
            export interface Find {

            }
        }

        export interface OutAction {
            find?: ILegendcityServer.IPurchases.OutAction.Find;
        }

        export namespace OutAction {
            export type Find = IPurchasesLegendcity[];
        }
    }
    export namespace IUsers {
        export interface InAction {
            find?: ILegendcityServer.IUsers.InAction.Find;
            moneySave?: ILegendcityServer.IUsers.InAction.MoneySave;
        }

        export namespace InAction {
            export interface Find {

            }
            export interface MoneySave {

            }
        }

        export interface OutAction {
            find?: ILegendcityServer.IUsers.OutAction.Find;
            moneySave?: ILegendcityServer.IUsers.OutAction.MoneySave;
        }

        export namespace OutAction {
            export interface Find {
                users: IUsersLegendcity[];
                count: number;
            }
            export type MoneySave = number;
        }
    }
}

export interface ICompaniesLegendcity {
    title: string;
    branches: number;
    logo: string;
    loyalty: {
        percent: number;
        type: 'bonuses' | 'discount';
    };
}

export interface IPurchasesLegendcity {
    logo: string;
    name: string;
    companyName: string;
    purchasedAt: number;
    moneySave: number;
    coords: [number, number];
}

export interface IUsersLegendcity {
    gender: 'M' | 'F';
    name: string;
    from: string;
}
