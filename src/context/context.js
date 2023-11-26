import {createContext, useReducer} from 'react';

export const Context = createContext();

const myValue = {
    data: [],
    data2: ""
};

const reducer = (state = myValue, action) => {
    const {type, payload} = action;


    switch (type) {
        case 'ON_LOG':
            console.log("ON_LOG is working!");
        default:
            break;

    };
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, myValue);

    return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>;
};

export default Provider;