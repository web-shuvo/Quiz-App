import loginImg from '../../../Assets/images/login-status.svg';

const Account = () => {
    return (
        <div className='md:pt-[5px]'>
            <a href='/login'>
                <img src={loginImg} alt="login logo" className='h-[25px] pr-[5px] md:inline-block' />
                <span className='text-white'>Login / Signup</span>
            </a>
        </div>
    )
}

export default Account;