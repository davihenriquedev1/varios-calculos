"use client"
 
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/CustomInput";

const formSchema = z.object({
    height: z.number({invalid_type_error:'Digite um número!'}).max(3).transform((value) => parseFloat(value.toFixed(2))),
    weight: z.number({invalid_type_error:'Digite um número!'}).max(5).transform((value) => parseFloat(value.toFixed(2)))
})

const Page = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {height:0, weight:0}
    })

    const { register, control, formState: { errors }, handleSubmit} = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="w-full p-5">
            <h3 className="text-3xl font-bold text-color-palette6/70 dark:text-color-palette3 mb-8">Calculadora de IMC</h3>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <CustomInput control={control} type="number" name="height" label="Altura" description="Digite sua altura em metros"/>
                    <CustomInput control={control} type="number" name="weight" label="Peso" description="Digite seu peso em Kg"/>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
export default Page;