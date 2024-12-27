import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";

type Props = {
    form: UseFormReturn<any>,
    name:string,
    label?:string,
    placeholder?:string,
    description?:string,
    type:string,
    mask?:(...args:any)=>string
}

export const CustomInput = ({form, name, label, placeholder, description, type, mask}:Props) => {

    const { control, setValue } = form;

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(mask) {
            const value = e.target.value;
            const maskedValue = mask(value);
            setValue(name, maskedValue);
        } else {
            setValue(name, e.target.value);
        }
    }

    return (
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
                <FormLabel className="font-bold">{label}</FormLabel>
                <FormControl>
                    <Input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        onChange={handleChange}
                        className="w-full"
                    />
                </FormControl>
                <FormDescription>
                    {description}
                </FormDescription>
                <FormMessage />
            </FormItem>
          )}
        />
    )
}