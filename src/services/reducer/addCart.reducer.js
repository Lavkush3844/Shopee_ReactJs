import { ADDITEM, DELITEM } from "../const";

const initialState = {
    isCart: [],
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDITEM:
            const existingItemIndex = state.isCart.findIndex((pro) => pro.id === action.payload.id);
            if (existingItemIndex === -1) {
                return {
                    ...state,
                    isCart: [...state.isCart, { ...action.payload, quantity: 1 }],
                    totalPrice: state.totalPrice + parseInt(action.payload.price),
                };
            } else {
                const updatedCart = state.isCart.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
                return {
                    ...state,
                    isCart: updatedCart,
                    totalPrice: state.totalPrice + parseInt(action.payload.price),
                };
            }

        case DELITEM:
            const itemToRemove = state.isCart.find(item => item.id === action.payload);
            if (!itemToRemove) {
                return state;
            }
            return {
                ...state,
                isCart: state.isCart.filter(item => item.id !== action.payload),
                totalPrice: state.totalPrice - (parseInt(itemToRemove.price) * itemToRemove.quantity),
            };

        default:
            return state;
    }
};

export default cartReducer;
