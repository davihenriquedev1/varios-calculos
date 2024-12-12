import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"

type Props = {
    form: UseFormReturn<any>,
    name:string,
    label?:string,
    placeholder?:string
    options:string[];
}

export function CustomSelect({form, name, label, placeholder, options}:Props) {

    const { control, setValue } = form;

    return (
       
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    <FormLabel className="font-bold">{label}</FormLabel>
                    <FormControl>
                        <Select onValueChange={(value)=> setValue(name, value)} {...field}>
                            <SelectTrigger >
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent  >   
                                <SelectGroup>
                                    {options?.map((item, key) => <SelectItem value={item.toLowerCase()} key={key}>{item}</SelectItem>)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
            
        
    )
}