import { ExchangeRate } from "@/types/ExchangeRate";
import axios from 'axios';

const baseCurrency = 'USD';
const apikey = 'ejenrv8inrv';
const req = axios.create({
    baseURL:`https://jsonplaceholder/${apikey}/latest`
})

export const getExchangeRate = async (): Promise<ExchangeRate> => {
    const result = await req.get(`/${baseCurrency}`);
    return result.data;
}