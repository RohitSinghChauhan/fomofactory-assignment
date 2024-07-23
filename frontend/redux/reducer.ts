import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CryptoState {
    symbol: string;
    data: any[];
}

const initialState: CryptoState = {
    symbol: 'BTC',
    data: [],
};

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setCryptoData(state, action: PayloadAction<any[]>) {
            state.data = action.payload;
        },
        setSymbol(state, action: PayloadAction<string>) {
            state.symbol = action.payload;
        },
    },
});

export const { setCryptoData, setSymbol } = cryptoSlice.actions;

export default cryptoSlice.reducer;
