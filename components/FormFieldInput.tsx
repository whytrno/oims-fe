import {Control} from "react-hook-form";
import InputDate from "@/components/input/InputDate";
import InputDefault from "@/components/input/InputDefault";
import InputSelect from "@/components/input/InputSelect";

export interface FormFieldInputProps {
    control: Control;
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    selectOptions?: string[];
}

const FormFieldInput = ({control, label, type = "text", name, placeholder, selectOptions = []}: FormFieldInputProps) => {
    switch (type) {
        case "date":
            return <InputDate control={control} label={label} name={name}/>
            break;
        case "select":
            return <InputSelect control={control} label={label} name={name} placeholder={placeholder}
                                selectOptions={selectOptions}/>
            break;
        default:
            return <InputDefault name={name} control={control} label={label} type={type} placeholder={placeholder}/>;
    }
}

export default FormFieldInput;
