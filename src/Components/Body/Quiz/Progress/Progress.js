import Left from '../../../../Assets/images/arrow-left-solid.svg';
import Right from '../../../../Assets/images/arrow-right-solid.svg';

const Progress = () => {
    return (
        <div className='grid grid-cols-[auto_1fr_auto] bg-white p-[10px] rounded-[8px] items-center gap-[20px] fixed bottom-[20px] w-[90%] m-[0_auto]'>
            <div className='bg-[#47f5901c] hover:bg-[#47f5953a] rounded-[8px] p-[10px_15px] cursor-pointer'>
                <img src={Left} alt='Left' className='w-[20px]' />
            </div>
            <div className='bg-[#e4e8ee] rounded-[20px] h-[4px]'>
                <div className='bg-[#002333] h-full relative rounded-[20px] pDrag' style={{ width: '20%' }}>
                </div>
            </div>
            <div className='bg-[#47f5901c] hover:bg-[#47f5953a] rounded-[8px] p-[10px_15px] cursor-pointer'>
                <span className='text-[15px] font-semibold hidden md:inline-block'>Next Question</span>
                <img src={Right} alt='Left' className='w-[20px] inline-block md:ml-[10px]' />
            </div>
        </div>
    )
};

export default Progress;