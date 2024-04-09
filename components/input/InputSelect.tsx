import {FormFieldInputProps} from "@/components/FormFieldInput";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const InputSelect = ({control, label, name, placeholder, selectOptions}: FormFieldInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue className="capitalize"
                                             placeholder={field.value ? field.value : placeholder}/>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {
                                selectOptions?.map((option, index) => (
                                    <SelectItem key={index} value={option} className="capitalize">{option}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

export default InputSelect