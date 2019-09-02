// workaround for typescript https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
export const CONFIG = {
    NODE_ENV: process.env.NODE_ENV,
    PUBLIC_URL: process.env.REACT_APP_PUBLIC_URL,
    API_URL: process.env.REACT_APP_API_URL,
};
