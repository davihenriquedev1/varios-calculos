import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

type Props = {
    control: Control<any>;
    name:string,
    label?:string,
    placeholder?:string,
    description?:string
    type:string;
}

export const CustomInput = ({control, name, label, placeholder, description, type}:Props) => {
   
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