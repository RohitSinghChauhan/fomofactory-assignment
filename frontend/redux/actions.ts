import { AppDispatch } from './store';
import axios from 'axios';
import { setCryptoData } from './reducer';

export const fetchCryptoData = (symbol: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`https://fomofactory-backend-74o0.onrender.com/`);
        dispatch(setCryptoData(response.data));
    } catch (error) {
        console.error('Failed to fetch crypto data:', error);
    }
};
