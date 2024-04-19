import {FC} from 'react'

interface HeaderProps{
    name: string;
}

const Header: FC <HeaderProps>= ({name}) => {
    return <h3>Welcome, {name} let's Rock...</h3>;
};

export default Header