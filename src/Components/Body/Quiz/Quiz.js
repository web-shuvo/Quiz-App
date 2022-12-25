import Answers from './Answers/Answers';
import Progress from './Progress/Progress';
const Quiz = () => {
    return (
        <div>
            <h2 className="text-[2rem] font-bold">Pick three of your favorite Star Wars Flims</h2>
            <p className="text-[20px] font-semibold text-[#7c83a7] p-[10px_0] mb-[10px] border-b border-solid border-[#e5e5e5]">Question can have multiple answers</p>
            <div className='m-[2rem_0] grid grid-rows-[repeat(5,auto)] gap-[10px] grid-flow-col'>
                <Answers />
                <Answers />
                <Answers />
                <Answers />
                <Answers />
                <Answers />
            </div>
            <Progress />

        </div>
    )
};

export default Quiz;