import React from 'react';

interface HederProps {
    title: string;

}

const Header: React.FC<HederProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;