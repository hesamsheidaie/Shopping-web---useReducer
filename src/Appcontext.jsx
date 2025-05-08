import React, { createContext, useReducer } from "react";

export const Data = createContext();

const initialState = {
    bag: [],
    favorites: []
};


function reducer(state, action) {
    switch (action.type) {
        case "AddToBag": {
            const exist = state.bag.find(item => item.id === action.payload.id);
            if (exist) {
                return {
                    ...state,
                    bag: state.bag.map(item => item.id === action.payload.id ? { ...item, number: item.number + 1 } : item)
                };
            } else {
                return {
                    ...state, bag: [...state.bag, action.payload]
                }
            }
        }
        case "DECREASE": {
            return {
                ...state, bag: state.bag.map(item => item.id === action.payload.id && item.number > 1 ? { ...item, number: item.number - 1 } : item)
            }
        }
        case "INCREASE": {
            return {
                ...state, bag: state.bag.map(item => item.id === action.payload.id ? { ...item, number: item.number + 1 } : item)
            }
        }
        case "REMOVE": {
            return {
                ...state, bag: state.bag.filter(item => item.id !== action.payload.id)
            }
        }
        case "AddFavorite": {
            const fav = state.favorites.find(item => item.id === action.payload.id);
            if (fav) {
                return {
                    ...state, favorites: state.favorites.filter(item => item.id !== action.payload.id)
                };
            } else {
                return {
                    ...state, favorites: [...state.favorites, action.payload]
                }
            }
        }
        default:
            return state;
    }
}


export const Dataprovider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Data.Provider value={{ state, dispatch }}>
            {children}
        </Data.Provider>
    );
};






