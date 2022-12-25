

const SubmitButton = ({ content, margin, padding, width, justify }) => {
    return (
        <div style={{ margin: margin, textAlign: justify }}>
            <button className="bg-[#00ff84] hover:bg-[#002333] hover:text-white" style={{ width, padding, borderRadius: '8px', fontWeight: 600, textTransform: 'uppercase' }}>{content}</button>
        </div>
    )
};

export default SubmitButton;