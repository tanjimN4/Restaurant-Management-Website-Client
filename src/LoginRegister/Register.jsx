import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {register} =useContext(AuthContext)

    const handleRegister =e=>{
        e.preventDefault()
        const form =e.target
        const name =form.name.value
        const photo =form.photo.value
        const email =form.email.value
        const password =form.password.value
        // console.log(name,photo,password,email);

        register(email,password)
        .then(result=>{
            // console.log(result);
            toast.success('success')
            updateProfile(result.user,{
                displayName:name,
                photoURL:photo
            })

        })
        .catch(error=>{
            // console.error(error);
            toast.error('error')
        })
    }
    return (
       <div>
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold pb-2">Have a account<Link className="text-sky-700" to='/login'> Login</Link></p>
                </div>
            </div>
        </div>
        <ToastContainer />
       </div>
    );
};

export default Register;