import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="">
            <iframe className="w-full h-screen relative" src="https://lottie.host/embed/40318dbb-ebbb-4e1e-9468-22b4fc4fc86f/DELm03f1cJ.json"></iframe>
            <div className="flex justify-center items-center -mt-10"><Link to='/' className="btn btn-primary absolute">Go Back</Link></div>
        </div>
    );
};

export default ErrorPage;