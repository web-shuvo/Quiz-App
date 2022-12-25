import Logo from "./Logo/Logo";
import Account from './Account/Account';

const Header = () => {
    return (
        <nav className="header">
            <Logo />
            <Account />
        </nav>
    )
};

export default Header;