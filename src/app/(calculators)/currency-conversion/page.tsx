"use client";
 
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/CustomInput";
import { useEffect, useState } from "react";
import { maskFloat } from "@/helpers/masks/maskFloat";
import { CustomSelect } from "@/components/CustomSelect";

const formSchema = z.object({
    value: z.string().min(1, 'preencha a altura').transform((value) => parseFloat(parseFloat(value).toFixed(2))),
})

type FormValues = z.infer<typeof formSchema>

const Page = () => {
    const [result, setResult] = useState(0);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {value:0}
    })

    const { handleSubmit } = form;

    function onSubmit(values: FormValues) {
        form.reset({ value:0 });
    }
    
    const handleReset = () => {
        setResult(0);
    }

    return (
        <div className="p-8">
            <h3 className="text-3xl font-bold text-color-palette6/70 dark:text-color-palette3 mb-8">Conversor de Moedas</h3>
            <div className="flex flex-col md:flex-row gap-12 justify-center mt-10">

                <div className="flex justify-center flex-1 md:max-w-[200px]">
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col items-center justify-center max-w-[200px]" >
                            <CustomSelect form={form} name="originCurrency" options={['dolar', 'euro', 'real']} placeholder="moeda origem"/>
                            
                            <CustomSelect form={form} name="destinyCurrency" options={['dolar', 'euro', 'real']} placeholder="moeda destino"/>

                            <CustomInput form={form} type="text" name="value" label="Valor" description="Digite o valor da moeda a ser convertida"/>

                            <Button type="submit" className="w-full">Converter</Button>
                            <Button type="reset" className="w-full bg-color-palette5 hover:bg-color-palette5 hover:brightness-150" onClick={()=>handleReset()}>Resetar</Button>
                        </form>
                    </Form>
                </div>   
                
            </div>
        </div>
    )
}
export default Page;