
const Form = ({ children, action, method }) => {
    return (
        <form action={action} method={method}>
            {children}
        </form>
    )
};
export default Form;