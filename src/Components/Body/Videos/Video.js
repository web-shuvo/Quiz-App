import cardImg from '../../../Assets/images/3.jpg';

const Video = () => {
    return (
        <div className='max-w-[400px] p-[10px] bg-white pb-[1rem] rounded-[4px]'>
            <a href='/video'>
                <div>
                    <img src={cardImg} alt='Card Img' />
                    <p className='videoDes'>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                </div>
                <div className='videoQMeta'>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </a>
        </div>
    )
};

export default Video;