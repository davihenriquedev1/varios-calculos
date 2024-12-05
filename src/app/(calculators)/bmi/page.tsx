"use client";
 
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/CustomInput";

import { maskFloat } from "@/helpers/masks";

const formSchema = z.object({
    height: z.string().min(1, 'preencha a altura').transform((value) => parseFloat(value).toFixed(2)),
    weight: z.string().min(1, 'preencha o peso').transform((value) => parseFloat(value).toFixed(2))
})

const Page = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {height:'', weight:''}
    })

    const { handleSubmit } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    
    return (
        <div className="w-full p-5">
            <h3 className="text-3xl font-bold text-color-palette6/70 dark:text-color-palette3 mb-8">Calculadora de IMC</h3>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <CustomInput 
                        form={form} 
                        type="text" 
                        name="height" 
                        label="Altura" 
                        description="Digite sua altura (ex: 1.80)"
                        mask={maskFloat(1)}
                    />
                    <CustomInput 
                        form={form} 
                        type="text"
                        name="weight" 
                        label="Peso" 
                        description="Digite seu peso em Kg (78.3)"
                        mask={maskFloat(3)}
                        />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
export default Page;