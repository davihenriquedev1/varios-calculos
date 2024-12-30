import { fetchExchangeRate } from '@/hooks/useExchangeRate';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import CurrencyConversion from '@/components/calculators/CurrencyConversion';
import { Suspense } from 'react';
import { LoadingBounce } from '@/components/partials/Loading';

const Page = async () => {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['exchange_rate'],
        queryFn: fetchExchangeRate
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <Suspense fallback={<LoadingBounce/>}>
            <CurrencyConversion initialData={dehydratedState} />
        </Suspense>
    )

}

export default Page;