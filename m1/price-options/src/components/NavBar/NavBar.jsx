import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line, RiMenu3Fill } from "react-icons/ri";


const NavBar = () =>{

    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ]

    return (
        <nav>
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RiMenu3Fill /> : <RiMenu2Line />
                }
                
            </div>
            {/* <ul className={`${open ? '' : 'hidden'} md:flex duration-1000 gap-8 m-4 px-6 shadow-lg rounded-lg absolute`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul> */}
            <ul className={`${open ? 'top-6' : '-top-60'} md:flex duration-1000 gap-8 px-6 rounded-lg absolute md:static`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;