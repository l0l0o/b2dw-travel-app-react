type InputProps = {
    type: "text" | "number" | "email" | "password";
    name: string;
    value: string;
    placeholder: string;
    required: boolean;
    onChange?: (e: React.ChangeEvent) => void;
    className?: string
}

const Input = ({type, name, value, placeholder, required, onChange, className}: InputProps) => {
    return ( 
        <input 
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required} 
            onChange={onChange}
            className={className}
        />
     );
}
 
export default Input;