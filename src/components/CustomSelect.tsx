import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UseFormReturn } from "react-hook-form"

type Props = {
    form: UseFormReturn<any>,
    name:string,
    label?:string,
    placeholder?:string
    options:string[];
}

export function CustomSelect({form, name, label, placeholder, options}:Props) {

    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>   
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {options?.map((item, key) => <SelectItem value={item.toLowerCase()} key={key}>{item}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}