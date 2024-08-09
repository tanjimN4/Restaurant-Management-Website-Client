import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


const Addfooditem = () => {

    const {user}=useContext(AuthContext)
    // console.log(user);

    const addFood =e=>{
        e.preventDefault()

        const form=e.target
        const name=form.name.value
        const image=form.image.value
        const price=form.price.value
        const email=form.email.value
        const category=form.category.value
        const origin=form.origin.value
        const description=form.description.value
        const quantity=form.quantity.value
        const addedBy=form.username.value

        const newAddFood={name,image,price,email,category,origin,description,quantity,addedBy}

        // console.log(newAddFood);

        axios.post('https://restaurant-management-website-server-nine.vercel.app/addfood', newAddFood)
        toast.success("Food item added successfully!");
            form.reset();
    }
    return (
        <div className="flex justify-center mx-16 my-20">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={addFood} className="card-body">
                    <div className="grid gap-0 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Food Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Food Image" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid gap-0 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Food Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid gap-0 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Add By</span>
                            </label>
                            <div className="flex gap-5">
                            <input type="text" name="email" defaultValue={user.displayName} className="input input-bordered w-full" required />
                            <input type="text" name="username" defaultValue={user.email}  className="input input-bordered w-full" required />
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-0 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Origin</span>
                            </label>
                            <input type="text" name="origin" placeholder="Food Origin" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="description" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Add" />
                    </div>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Addfooditem;