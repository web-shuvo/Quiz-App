
const CheckBox = ({ content, ...props }) => {
    return (
        <div style={{ ...props, }}>
            <input type='checkbox' />
            <span className="ml-[5px] font-semibold">{content}</span>
        </div>
    )
};

export default CheckBox;