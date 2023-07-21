import React from 'react';
import Link from 'next/link';
const TopMenu = () => {
    return (
        <div className="topnav">
            <Link href='/'><a>Home</a></Link>
            <Link href='../src/posts'><a>Posts</a></Link>
        </div>
    );
}
export default TopMenu;