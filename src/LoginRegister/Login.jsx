import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {

    const { signIN,signInPop } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInPop(provider)
        .then(result => {
            toast.success('success')
        })
        .catch(error => {
            console.error(error);
            toast.error('error')
        });
    }

    const handleLogin = e => {
        e.preventDefault()
        const from = new FormData(e.currentTarget)
        const email = from.get('email')
        const password = from.get('password')


        signIN(email, password)
            .then(result => {
                toast.success('success')
                const from = location.state?.from || '/';
                navigate(from, { replace: true });
                console.log(result);


            })
            .catch(error => {
                console.error(error);
                toast.error('error')
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            
                        </div>
                    </form>
                    <button onClick={handleGoogle} className="items-center text-center btn mt-5 mx-8"><FaGoogle /></button>
                    <div><p className="text-center mt-2 pb-2">Do not have a account<Link className="text-blue-600 font-bold" to='/register'>  Register</Link></p></div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;