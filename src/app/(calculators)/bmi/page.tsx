"use client";
 
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/CustomInput";
import { useEffect } from "react";
import { maskFloat } from "@/helpers/masks";

const formSchema = z.object({
    height: z.coerce.number().positive('A altura deve ser positiva'),
    weight: z.coerce.number().positive('O peso deve ser positivo'),
})

const Page = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {height:0, weight:0}
    })

    const { handleSubmit } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    useEffect(()=> {
        console.log(maskFloat('2322'))
    },[])
    
    return (
        <div className="w-full p-5">
            <h3 className="text-3xl font-bold text-color-palette6/70 dark:text-color-palette3 mb-8">Calculadora de IMC</h3>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <CustomInput form={form} type="number" name="height" label="Altura" description="Digite sua altura (ex: 1.80)"/>
                    <CustomInput form={form} type="number" name="weight" label="Peso" description="Digite seu peso em Kg"/>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
export default Page;