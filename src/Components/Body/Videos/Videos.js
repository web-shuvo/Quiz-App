import Video from "./Video";

const Videos = () => {
    return (
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[20px]'>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    )
};

export default Videos;