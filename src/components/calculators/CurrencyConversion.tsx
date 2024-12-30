"use client";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/partials/CustomInput";
import { useState } from "react";
import { CustomSelect } from "@/components/partials/CustomSelect";
import { maskNumberInput } from "@/helpers/masks/maskNumberInput";
import { useExchangeRate } from "@/hooks/useExchangeRate";

type Props = { initialData: any };

const formSchema = z.object({
    value: z.string().min(1, 'preencha o valor').transform((value) => parseFloat(value).toFixed(2)),
    originCurrency: z.string({ required_error: 'selecione a moeda' }),
    destinyCurrency: z.string({ required_error: 'selecione a moeda' })
});

type FormValues = z.infer<typeof formSchema>;

const CurrencyConversion = ({ initialData }: Props) => {
    const [result, setResult] = useState(0);
    const { data, error, isLoading, isFetching } = useExchangeRate(initialData);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { value: '' }
    });

    const { handleSubmit } = form;

    function onSubmit(values: FormValues) {
        console.log(values);
    }

    const handleReset = () => {
        form.reset({ value: '', originCurrency: '', destinyCurrency: '' });
        setResult(0);
    };

    return (
        <div className="p-8">
            <h3 className="text-3xl font-bold text-color-palette6/70 dark:text-color-palette3 mb-8">Conversor de Moedas</h3>
            <div className="flex flex-col md:flex-row gap-12 justify-center mt-10">

                <div className="flex justify-center flex-1 md:max-w-[400px]">
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="gap-6 flex flex-col w-full  justify-center xs:grid xs:grid-cols-2">
                            <CustomSelect form={form} name="originCurrency" options={['dolar', 'euro', 'real']} placeholder="selecione" label="Moeda de Origem" />
                            <CustomSelect form={form} name="destinyCurrency" options={['dolar', 'euro', 'real']} placeholder="selecione" label="Moeda Destino" />
                            <CustomInput form={form} type="text" name="value" label="Valor" description="Digite o valor a ser convertido" mask={maskNumberInput()} />
                            <div className="flex flex-col">
                                <p className="mb-3 text-sm font-bold">Equivale a:</p>
                                <span className="bg-gray-200 h-10 p-3 text-color-palette1 font-bold text-xl flex items-center rounded-md">{result}</span>
                            </div>
                            <Button type="submit" className="w-full">Converter</Button>
                            <Button type="reset" className="w-full bg-color-palette5 hover:bg-color-palette5 hover:brightness-150" onClick={handleReset}>Resetar</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConversion;
