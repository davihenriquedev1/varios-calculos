"use client";
 
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/CustomInput";

import { maskFloat } from "@/helpers/masks/maskFloat";
import { bmiCategories } from "@/helpers/data/bmiData";

const formSchema = z.object({
    height: z.string().min(1, 'preencha a altura').transform((value) => parseFloat(parseFloat(value).toFixed(2))),
    weight: z.string().min(1, 'preencha o peso').transform((value) => parseFloat(parseFloat(value).toFixed(2)))
})

type FormValues = z.infer<typeof formSchema>

const Page = () => {

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {height:0, weight:0}
    })

    const { handleSubmit } = form;

    function onSubmit(values: FormValues) {
       console.log(values);
    }
    
    return (
        <div className="p-8">
            <h3 className="text-3xl font-bold text-color-palette6/70 dark:text-color-palette3 mb-8">Calculadora de IMC</h3>
            <div className="flex flex-col md:flex-row gap-12 justify-center mt-10">

                <div className="flex justify-center flex-1 md:max-w-[200px]">
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 gap-5 items-center justify-center max-w-[200px]" >
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
                            <Button type="submit" className="w-full">Calcular</Button>
                        </form>
                    </Form>
                </div>
                <div className="flex flex-1 justify-center md:max-w-[600px]">
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-[600px]">
                        {bmiCategories.map((item, key)=> (
                            <div className="flex flex-col gap-1 text-white p-5 justify-center items-center text-center rounded-md" style={{ backgroundColor: `${item.color}` }} key={key}>
                                <div className="text-4xl">{item.emoji}</div>
                                <div className="text-sm">IMC {item.rangeText}</div>
                                <div className="font-bold">{item.category}</div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Page;