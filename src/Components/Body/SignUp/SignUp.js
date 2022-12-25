import IllustrationImg from '../../../Assets/images/signup.svg';
import Form from '../Form/Form';
import InputElement from '../Form/InputElement';
import CheckBox from '../Form/CheckBox';
import SubmitButton from '../Form/SubmitButton';
import UserName from '../../../Assets/images/user-regular.svg';
import MailAt from '../../../Assets/images/at-solid.svg';
import Lock from '../../../Assets/images/lock-solid.svg';
import LockSame from '../../../Assets/images/unlock-keyhole-solid.svg';

const SignUp = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold ">Create an account</h1>
            <div className="grid md:grid-cols-[1fr_1fr] gap-4">
                <div className='pt-[5rem] md:p-[5rem_2rem]'>
                    <img src={IllustrationImg} alt="SignupImage" className='w-[80%]' />
                </div>
                <div className='p-[2rem_0]'>
                    <Form action='#' method='post'>
                        <InputElement type='text' placeholder='Type your name' iconTitle={UserName} margin='1rem 0' />
                        <InputElement type='text' placeholder='Type your name' iconTitle={MailAt} margin='1rem 0' />
                        <InputElement type='text' placeholder='Type your name' iconTitle={Lock} margin='1rem 0' />
                        <InputElement type='text' placeholder='Type your name' iconTitle={LockSame} margin='1rem 0' />
                        <CheckBox content='I agree to the Terms & Conditions' />
                        <SubmitButton content='Submit' margin='2.5rem 0' width='100%' padding='0.6rem 1.2rem' justify='center' />
                    </Form>
                </div>
            </div>
            <div className='text-center'>Already have an account? <a href='/login' className='text-blue-700'> Login </a> instead.</div>
        </div>
    );
};

export default SignUp;