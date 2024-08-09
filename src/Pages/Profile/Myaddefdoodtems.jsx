import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const MyAddedFoodItems = () => {
    const { user } = useContext(AuthContext);
    const [myFood, setMyFood] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const url = `https://restaurant-management-website-server-nine.vercel.app/itemsAll/email?email=${user.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setMyFood(res.data))
            .catch(err => console.error(err));
    }, [url]);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const category = form.category.value;

        const updatedFood = { name, description, price, category };

        axios.put(`https://restaurant-management-website-server-nine.vercel.app/update/${selectedFood._id}`, updatedFood, { withCredentials: true })
            .then(() => {
                setModalOpen(false);
                setMyFood(prevFood => prevFood.map(food => food._id === selectedFood._id ? { ...food, ...updatedFood } : food));
                toast.success("Food item updated successfully!")
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="flex justify-center my-10">
            <ToastContainer></ToastContainer>
            <div>
                {myFood.map(food => (
                    <div key={food._id} className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={food.image} alt={food.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name: {food.name}</h2>
                            <p>Price: {food.price}$</p>
                            <div className="card-actions">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setSelectedFood(food);
                                        setModalOpen(true);
                                    }}
                                >
                                    Update
                                </button>
                                {modalOpen && (
                                    <dialog className="modal" open>
                                        <div className="modal-box">
                                            <form onSubmit={handleUpdate}>
                                                <div className="grid gap-0 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Food Name</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            defaultValue={food.name}
                                                            className="input input-bordered"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Category</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="category"
                                                            defaultValue={food.category}
                                                            className="input input-bordered"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid gap-0 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Price</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="price"
                                                            defaultValue={food.price}
                                                            className="input input-bordered"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Description</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="description"
                                                            defaultValue={food.description}
                                                            className="input input-bordered"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <input className="btn btn-primary my-5" type="submit" value="Update" />
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    onClick={() => setModalOpen(false)}
                                                >
                                                    Close
                                                </button>
                                            </form>
                                        </div>
                                    </dialog>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAddedFoodItems;
