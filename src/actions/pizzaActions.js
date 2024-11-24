
import axios from 'axios';

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZA_REQUEST' });

  try {
    const response = await axios.get('/api/pizzas/getpizzas'); 
    console.log(response.data); 
    dispatch({ type: 'GET_PIZZA_SUCCESS', payload: response.data }); 
  } catch (error) {
    console.error('Error fetching pizzas:', error);
    dispatch({ type: 'GET_PIZZA_FAILED', payload: error.message }); 
  }
};

