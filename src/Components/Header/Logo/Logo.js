import logoImg from '../../../Assets/images/react-icon.png'

const Logo = () => {
    return (
        <div className='w-[300px]'>
            <a href='/home'>
                <img src={logoImg} alt='Main logo' className='h-[40px] md:inline-block pr-[5px]' />
                <span className='text-slate-400 font-semibold'>React Quiz App</span>
            </a>
        </div>
    )
}

export default Logo;