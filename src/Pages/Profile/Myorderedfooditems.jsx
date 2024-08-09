import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';

const Myorderedfooditems = () => {

    const { user } = useContext(AuthContext)
    const [myFood, setMyFood] = useState([])
    const [loding, setLoading] = useState(true)

    const url = `https://restaurant-management-website-server-omega.vercel.app/purchase/data/email?email=${user.email}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setMyFood(res.data)
                setLoading(false)
            })
    }, [url])


    const handleDelete = (id) => {
        axios.delete(`https://restaurant-management-website-server-omega.vercel.app/purchase/${id}`, { withCredentials: true })
        .then(res=>{
            // console.log(res);
            
            if (res.status === 200) {
                setMyFood(myFood.filter(food => food._id !== id));
                toast.success('Item deleted successfully')
            }
            
        })
    };

    if (loding) {
        return <div className="flex justify-center my-20"><span className="loading loading-spinner loading-lg"></span></div>
    }

    return (

        <div className="flex justify-center my-10">
            <ToastContainer></ToastContainer>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> 
                {myFood.map(food => <>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={food.image}
                                alt="Shoes"
                                className="rounded-xl h-96 w-96" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name :{food.name}</h2>
                            <p>Price : {food.price}</p>
                            <p>Date : {food.date}</p>
                            <p>Chief : {food.addedBy}</p>
                            <div className="card-actions">
                                <button onClick={()=>handleDelete(food._id)} className="btn btn-primary" >Delete</button>
                            </div>
                        </div>
                        
                    </div>
                </>)}
            </div>
        </div>

    );
};

export default Myorderedfooditems;