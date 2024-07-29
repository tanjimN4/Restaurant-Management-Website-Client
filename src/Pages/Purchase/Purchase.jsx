import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";
import { ItemContext } from "../../SingleItemGate/Single";


const Purchase = () => {

    const {item}=useContext(ItemContext)
    const {user}=useContext(AuthContext)
    // console.log(user);
    console.log(item);
    return (
        <form className="card-body">
            <div className=" flex-none lg:flex gap-10 justify-center">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" placeholder="Food Name" defaultValue={item.name} className="input input-bordered w-auto lg:w-96" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder=" Price" defaultValue={item.price} className="input input-bordered w-auto lg:w-96" required />
                </div>
            </div>
            <div className=" flex-none lg:flex gap-10 justify-center">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Buyer Name</span>
                    </label>
                    <input type="text" placeholder="Buyer Name" defaultValue={user.displayName} className="input input-bordered w-auto lg:w-96" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Buyer Email</span>
                    </label>
                    <input type="text" placeholder="Buyer Email" defaultValue={user.email} className="input input-bordered w-auto lg:w-96" required />
                </div>
            </div>
            <div className=" flex-none lg:flex gap-10 justify-center">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" placeholder="Quantity" className="input input-bordered w-auto lg:w-96" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Buying Date</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered w-auto lg:w-96" required />
                </div>
            </div>
            <div className=" flex justify-center mt-6">
                <button className="btn w-auto lg:w-[900px] btn-primary">purchase</button>
            </div>
        </form>
    );
};

export default Purchase;