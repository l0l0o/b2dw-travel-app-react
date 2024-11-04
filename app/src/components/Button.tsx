const Button = ({ type = "text", text, variant = "primary" }) => {
    return ( 
        <button type={type} className="">
            {text}
        </button>
     );
}
 
export default Button;