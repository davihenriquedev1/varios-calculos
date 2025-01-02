import { QueryFunction, QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { getExchangeRate } from '@/api/exchangeRate';
import { ExchangeRate } from '@/types/ExchangeRate';

const isMarketOpen = ()=> {
    const now = new Date();
    const hours = now.getUTCHours();
    return hours >= 12 && hours < 21 // 9h às 18h no UTC-3 (Brasil)
}

export const fetchExchangeRate: QueryFunction<ExchangeRate> = async () => {
    if (isMarketOpen()) {
      return getExchangeRate();
    }
    // Se o mercado estiver fechado, retornar erro
    throw new Error('Market is closed');
};

export const useExchangeRate = (initialData:ExchangeRate) => {
    return useQuery({
        queryKey: ['exchange_rate'],
        queryFn: fetchExchangeRate,
        initialData,
        staleTime: 1000 * 60 * 60 * 6, // 6 horas (tempo para a query ficar obsoleta)
        gcTime: 1000 * 60 * 60 * 12, // 12 horas mantidos no cache
        refetchOnMount: false, // Evita refetch ao montar no cliente
        refetchOnWindowFocus: false, // Evita refetch ao focar a janela
    });
};