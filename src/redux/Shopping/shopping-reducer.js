import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
    products: [
        {
			image: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
			title: 'CHECK PRINT SHIRT',
            description: 'This is a description',
			price: 110
		},
		{
			image: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
			title: 'GLORIA HIGH LOGO SNEAKER',
            description: 'This is a description',
			price: 91
		},
		{
			image: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
			title: 'CATE RIGID BAG',
            description: 'This is a description',
			price: 94.5
		},
		{
			image: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
			title: 'GUESS CONNECT WATCH',
            description: 'This is a description',
			price: 438.9
		},
		{
			image: 'https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
			title: '70s RETRO GLAM KEFIAH',
            description: 'This is a description',
			price: 20
		}
    ],
    cart: [],
    currentItem: null
}

const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            // Get the item data from the product array 
            const item = state.products.find( prod => prod.id === action.payload.id )

            // Check if the item is in cart already
            const inCart = state.cart.find((item) => 
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                cart: inCart 
                ? state.cart.map( (item) => 
                    item.id === action.payload.id
                     ? {...item, qty: item.qty + 1 }
                      : item 
                      )
                    : [...state.cart, {...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item )
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }           
        default:
            return state;     
    }
}

export default ShopReducer;