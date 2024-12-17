import { getExchangeRate } from "@/api/exchangeRate";
import { useQuery } from "@tanstack/react-query";

export const useExchangeRate = () => {
    const query = useQuery({
        queryKey: ['exchange_rate'],
        queryFn: getExchangeRate,
        staleTime: 1000 * 60 * 60 * 8, // 8 horas (tempo durante o qual os dados são considerados "frescos")
    })
    return query;
}