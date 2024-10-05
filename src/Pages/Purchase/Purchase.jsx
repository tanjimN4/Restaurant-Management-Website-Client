import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

const Purchase = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [isPurchaseAllowed, setIsPurchaseAllowed] = useState(true);

    const { _id } = useParams();
    const { user } = useContext(AuthContext);
    // console.log(item);

    useEffect(() => {
        // Fetch items and set the specific item
        fetch('http://localhost:5000/itemsAll')
            .then(res => res.json())
            .then(data => {
                const selectedItem = data.find(item => item._id === _id);
                setItem(selectedItem);
                setItems(data);
                // Check purchase conditions
                if (selectedItem) {
                    setIsPurchaseAllowed(
                        selectedItem.quantity > 0 &&
                        user?.email !== selectedItem.email
                    );
                }
            })
            .catch(error => {
                console.error('Error fetching items:', error);
                toast.error('Error fetching item details.');
            });
    }, [_id, user]);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);

        // Update purchase button state
        if (item) {
            setIsPurchaseAllowed(newQuantity > 0 && newQuantity <= item.quantity && user?.email !== item.email);
        }
    };

    const handlePurchase = (e) => {
        e.preventDefault();

        if (!item || item.quantity === 0 || !isPurchaseAllowed) {
            toast.error('Cannot purchase this item.');
            return;
        }

        if (quantity > item.quantity) {
            toast.error('Cannot purchase more than available quantity');
            return;
        }

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const date = form.date.value;
        const image = item.image;
        const addedBy = item.addedBy;

        const store = { addedBy, name, image, email, foodName, price, quantity, date };

        axios.post('http://localhost:5000/purchase/data', store, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.status === 200) {
                toast.success('Purchase completed successfully!');
                setQuantity(0);
            form.reset();
            }
        })
        .catch(error => {
            console.error(error);
            toast.error('An error occurred. Please try again.');
        });

        axios.put(`http://localhost:5000/itemsAllCount/${item._id}`, {
            count: 1,
            updateQuantity: item.quantity - quantity
        }, { withCredentials: true }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.status !== 200) {
                toast.error('Error updating item quantity.');
            }
        })
        .catch(error => {
            console.error(error);
            toast.error('An error occurred while updating item quantity.');
        });
        form.reset();
    };

    return (
        <div>
            {item ? (
                item.quantity === 0 ? (
                   <div className="rounded-xl "> <p className="text-center rounded-xl text-red-500 my-10 h-80  bg-gray-400 text-4xl pt-20 font-semibold">This item is not available for purchase.</p></div>
                ) : (
                    <form onSubmit={handlePurchase} className="card-body">
                        <div className="flex-none lg:flex gap-10 justify-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input name="foodName" type="text" defaultValue={item.name} className="input input-bordered w-auto lg:w-96" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" defaultValue={item.price} className="input input-bordered w-auto lg:w-96" required readOnly />
                            </div>
                        </div>
                        <div className="flex-none lg:flex gap-10 justify-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buyer Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered w-auto lg:w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buyer Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} className="input input-bordered w-auto lg:w-96" required />
                            </div>
                        </div>
                        <div className="flex-none lg:flex gap-10 justify-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="Quantity"
                                    className="input input-bordered w-auto lg:w-96"
                                    required
                                    min="1"
                                    max={item.quantity}
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buying Date</span>
                                </label>
                                <input type="text" name="date" value={new Date().toLocaleDateString()} className="input input-bordered w-auto lg:w-96" readOnly />
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <input
                                className="btn w-auto lg:w-[900px] btn-primary"
                                type="submit"
                                value="Purchase"
                                disabled={!isPurchaseAllowed || item.quantity === 0}
                            />
                        </div>
                    </form>
                )
            ) : (
                <p className="text-center">Loading...</p>
            )}
            <ToastContainer />
        </div>
    );
};

export default Purchase;
