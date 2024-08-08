import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { ItemContext } from "../../SingleItemGate/Single";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


const Purchase = () => {

    const {item}=useContext(ItemContext)
    const {user}=useContext(AuthContext)
    // console.log(item);

    const [date,setdate]=useState()
    // const [isAvailable, setIsAvailable] = useState(true)

    useEffect(()=>{
        const presantDate =new Date().toLocaleDateString()
        setdate(presantDate)
        // setIsAvailable( item.quantity> 0)
    },[])

    const handlePurchase =e=>{
        e.preventDefault()

        if(user.email===item.email){
            toast.error('you cant buy your won food')
        }

        // if (!isAvailable) {
        //     toast.error('Item is not available for purchase.');
        //     return;
        // }

        
        const form =e.target
        const name = form.name.value
        const email = form.email.value
        const foodName = form.foodName.value
        const price = form.price.value
        const quantity = parseInt(form.quantity.value, 10);
        const date = form.date.value
        const image=item.image
        const addedBy=item.addedBy

        if (quantity > item.quantity) {
            toast.error('Requested quantity exceeds available stock.');
            return;
        }

        const store ={addedBy,name,image,email,foodName,price,quantity,date}

        axios.post(`http://localhost:5000/purchase/data`,store,{
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.status === 200) {
                toast.success('Purchase completed successfully!');
            }
        })
        .catch(error => {
            console.error(error);
            toast.error('An error occurred. Please try again.');
        });

        axios.put(`http://localhost:5000/itemsAllCount/${item._id}`, {
            count: 1,
            quantity:quantity
          },{ withCredentials: true }, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
    }

    // console.log(user);
    console.log(item);
    return (
        <div>
            <form onSubmit={handlePurchase}  className="card-body">
            <div className=" flex-none lg:flex gap-10 justify-center">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input name="foodName" type="text" defaultValue={item.name} className="input input-bordered w-auto lg:w-96" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder=" Price" defaultValue={item.price} className="input input-bordered w-auto lg:w-96" required />
                </div>
            </div>
            <div className=" flex-none lg:flex gap-10 justify-center">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Buyer Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={user.displayName} className="input input-bordered w-auto lg:w-96" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Buyer Email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user.email} className="input input-bordered w-auto lg:w-96" required />
                </div>
            </div>
            <div className=" flex-none lg:flex gap-10 justify-center">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-auto lg:w-96" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Buying Date</span>
                    </label>
                    <input type="text" name="date" value={date} className="input input-bordered w-auto lg:w-96" required />
                </div>
            </div>
            <div className=" flex justify-center mt-6">
                <input className="btn w-auto lg:w-[900px] btn-primary" type="submit" value="purchase" />
                
            </div>
        </form>
        <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Purchase;