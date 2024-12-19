import { ExchangeRate } from "@/types/ExchangeRate";
import axios from 'axios';

const baseCurrency = 'USD';
const API_KEY = 'ejenrv8inrv';

const req = axios.create({
    baseURL:`https://jsonplaceholder/${API_KEY}/latest`
})

export const getExchangeRate = async (): Promise<ExchangeRate> => {
    const response = await req.get(`/${baseCurrency}`);
    return response.data;
}