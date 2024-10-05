import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
    
    const { user, logOut } = useContext(AuthContext)
    let email, adminEmail, admin;

    if (user) {
        email = user.email;
        adminEmail = 'admin@gmail.com';
        admin = email === adminEmail;
    }
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allfoods'>All Foods</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        {
            admin && <li><Link to='/admin'>Admin</Link></li>
        }

    </>


    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="h-12" src="https://i.ibb.co/9TxGZwz/download.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user.photoURL}/>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                      <li>
                       
                        <Link to='/myaddefdoodtems' className="justify-between">My added food items</Link>
                      </li>
                      <li><Link to='/addfood'>Add a food item</Link></li>
                      <li><Link to='/myorderedfdoodtems'>My ordered food items</Link></li>
                    </ul>
                  </div>
                }
                {
                    user ? <button onClick={handleSignOut} className="btn">Sign Out</button> :
                        <Link className="btn" to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;