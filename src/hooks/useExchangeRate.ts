import { useQuery } from '@tanstack/react-query';
import { getExchangeRate } from '@/api/exchangeRate';

const isMarketOpen = ()=> {
    const now = new Date();
    const hours = now.getUTCHours();
    return hours >= 12 && hours < 21 // 9h às 18h no UTC-3 (Brasil)
}

export const useExchangeRate = () => {
    const queryFn = async () => {
        if(isMarketOpen()) {
            return getExchangeRate();
        }
        // Se o mercado estiver fechado, retornar dados do cache
        throw new Error('Market is closed');
    }

    return useQuery({
        queryKey: ['exchange_rate'],
        queryFn: queryFn,
        staleTime: 1000 * 60 * 60 * 6, // 6 horas (tempo pra a query ficar obsoleta)
        gcTime: 1000 * 60 * 60 * 12, // 12 horas mantidos no cache
    });
};