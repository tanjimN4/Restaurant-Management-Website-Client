import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const Gallery = () => {
    const { user } = useContext(AuthContext);
    const [myFood, setMyFood] = useState([]);
    const modalRef = useRef(null);

    const url = `http://localhost:5000/gallery?email=${user.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setMyFood(res.data))
            .catch(err => console.error("Error fetching food items:", err));
    }, [url]);

    console.log(myFood);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const description = form.description.value;

        const newFoodItem = {
            name,
            image,
            description,
            email: user.email
        };

        axios.post('http://localhost:5000/gallery/add', newFoodItem)
            .then(res => {
                setMyFood([...myFood, res.data]);
                toast.success("Food item added successfully!");
                form.reset();
                modalRef.current.close();
            })
            .catch(err => {
                toast.error("Failed to add food item.");
                console.error("Error adding food item:", err);
            });
    };

    return (
        <div className="flex justify-center my-20">
            <div>
                <div className="bg-[url(https://i.ibb.co/Df4gjTp/pexels-ella-olsson-572949-1640774.jpg)] rounded-xl bg-cover bg-center h-96 flex justify-center  ">
                <h1 className="text-black text-center text-4xl font-greyQo font-semibold items-center flex justify-center">MY GALLERY</h1>
                </div>
                <div className="flex justify-end mt-5"><button className="btn btn-primary font-semibold" onClick={() => modalRef.current.showModal()}>Add</button></div>
                <dialog ref={modalRef} className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit} method="dialog">
                            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => modalRef.current.close()}>✕</button>
                            <div className="form-control gap-5">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user.displayName} className="input input-bordered" required readOnly />
                            </div>
                            <div className="form-control gap-5">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control gap-5">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Add" />
                        </form>
                    </div>
                </dialog>
                <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {myFood.map(food => (
                        <div key={food._id} className="card relative bg-base-100 w-96 h-96 shadow-xl border-2">
                            <div>
                                <figure className="p-8">
                                    <img
                                        src={food.image}
                                        alt="Food Item"
                                        className="rounded-xl h-80 w-96" />
                                </figure>
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white text-center">
                                    <div>
                                        <p className="text-white text-3xl"><span className="font-medium">Name</span> : {user.displayName}</p>
                                        <p className="text-white"><span className="font-medium">Description</span> : {food.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
