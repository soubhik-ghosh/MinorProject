/*export const getAllPizzasReducers=(state={} , action)=>{
    switch(action.type){
        case 'GET_PIZZAS_REQUEST' : return{
            ...state
        }
        case 'GATE_PIZZA_SUCCESS' : return{
            pizzas :action.payload
        }
        case 'GET_PIZZAS_FAILED' : return{
            error : action.payload 
        }
        default : return state 
    }
    
} 

*/
export const getAllPizzasReducers = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PIZZAS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'GET_PIZZAS_SUCCESS':
            return {
                ...state,
                loading: false,
                pizzas: action.payload,
            };
        case 'GET_PIZZAS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
