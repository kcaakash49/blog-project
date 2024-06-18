import { ChangeEvent } from "react";

interface propstype{
    label: string;
    placeholder: string;
    type?: string;
    onChange:(e: ChangeEvent<HTMLInputElement>) => void;

}

export const InputBox = ({label, placeholder,type,onChange}:propstype) => {
    return <div>
        <div className="font-bold text-sm">{label}</div>
        <input type={type} placeholder = {placeholder} className="border rounded-md text-sm p-2 w-[200px] sm:w-[400px] " onChange={onChange}/>
    </div>
}