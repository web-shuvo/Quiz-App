
const InputElement = ({ type, placeholder, iconTitle, margin }) => {
    return (
        <div className='inputdiv' style={{ margin: margin }}>
            <input type={type} placeholder={placeholder} className="inputelem" />
            <span className="w-[40px] flex justify-center items-center">
                <img src={iconTitle} alt='Input Icon' className="h-[20px]" />
            </span>
        </div>
    )
};

export default InputElement;