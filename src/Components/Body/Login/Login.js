import IllustrationImg from '../../../Assets/images/login.svg';
import Form from '../Form/Form';
import InputElement from '../Form/InputElement';
import SubmitButton from '../Form/SubmitButton';
import MailAt from '../../../Assets/images/at-solid.svg';
import Lock from '../../../Assets/images/lock-solid.svg';

const Login = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold ">Login to your account</h1>
            <div className="grid md:grid-cols-[1fr_1fr] gap-4">
                <div className='pt-[5rem] md:p-[5rem_2rem]'>
                    <img src={IllustrationImg} alt="SignupImage" className='w-[80%]' />
                </div>
                <div className='p-[2rem_0]'>
                    <Form action='#' method='post'>
                        <InputElement type='text' placeholder='Type your name' iconTitle={MailAt} margin='1rem 0' />
                        <InputElement type='text' placeholder='Type your name' iconTitle={Lock} margin='1rem 0' />
                        <SubmitButton content='Submit' margin='2.5rem 0' width='100%' padding='0.6rem 1.2rem' justify='center' />
                    </Form>
                    <div className='text-center'>Don't have an account? <a href='/sign-up' className='text-blue-700'> SignUp </a> instead.</div>
                </div>
            </div>

        </div>
    )
};

export default Login;