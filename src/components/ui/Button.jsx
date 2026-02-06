const Button = ({children, variant = "primary"})=>{
    const styles ={
        primary: "bg-primary text-text hover:opacity-90",
        outline: "border border-primary text-primary hover:bg-primary hover:text-text",
    };
    return(
        <button className={`px-6 py-2 rounded-lg font-medium transition ${styles[variant]}`}>
            {children} 
        </button>
    )
}
export default Button;