import * as actionTypes from '../action/actionTypes';

const initialState = [];

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_ITEM:
            const newCart = [...state];
            const prodIndex = newCart.findIndex((e) => e.id === action.payload);
            if (prodIndex !== -1) {
                newCart.splice(prodIndex, 1);
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;

        case actionTypes.ADD_ITEM:
            const existingItemIndex = state.findIndex((item) => item.id === action.payload);

            if (existingItemIndex !== -1) {
                const updatedCart = [...state];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    count: updatedCart[existingItemIndex].count + 1,
                };
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                const newItem = {
                    id: action.payload.id,
                    price: action.payload.price,
                    title: action.payload.title,
                    description: action.payload.description,
                    image: action.payload.image,
                    count: 1,
                };
                const updatedCart = [...state, newItem];
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            }

        case actionTypes.ADD_ONE:
            const updatedCartAddOne = [...state];
            const elemenToUpdateAddOne = updatedCartAddOne.find((e) => e.id === action.payload);
            elemenToUpdateAddOne.count = elemenToUpdateAddOne.count + 1;
            localStorage.setItem("cart", JSON.stringify(updatedCartAddOne));
            return updatedCartAddOne;

        case actionTypes.REMOVE_ONE:
            const updatedCartRemoveOne = [...state];
            const elemenToUpdateRemoveOne = updatedCartRemoveOne.find((e) => e.id === action.payload);

            if (elemenToUpdateRemoveOne.count > 1) {
                elemenToUpdateRemoveOne.count = elemenToUpdateRemoveOne.count - 1;
            }

            localStorage.setItem("cart", JSON.stringify(updatedCartRemoveOne));
            return updatedCartRemoveOne;

        default:
            return state;
    }
}


export default Reducer;