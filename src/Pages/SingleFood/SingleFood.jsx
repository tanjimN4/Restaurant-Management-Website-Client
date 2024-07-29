import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemContext } from "../../SingleItemGate/Single";

const SingleFood = () => {
    const [items, setItems] = useState([])
    const [loding, setLoding] = useState(true)

    const {setItem} =useContext(ItemContext)

    const handlePurchase =e=>{
        e.prventDefult
        setItem(item)
    }
    useEffect(() => {
        fetch('http://localhost:5000/itemsAll')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoding(false)
            }
            )
    }, [])

    const { _id } = useParams()

    // console.log(items);
    const item = items.find(item => item._id === _id)
    // console.log(item);

    if (loding) {
        return <div className="flex justify-center my-20"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return (
        <div>
            <div className="card card-side flex-col lg:flex-row bg-base-100 shadow-xl mx-10 my-10 border-2">
                <figure>
                    <img
                        src={item.image}
                        className="h-96 w-96 lg:w-[600px]"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name : {item.name}</h2>
                    <p>Food Category : {item.category}</p>
                    <p>Price : {item.price}</p>
                    <p>Made By : {item.addedBy}</p>
                    <p>Food Origin : {item.origin}</p>
                    <p>Food Description : {item.description}</p>
                    <div className="card-actions justify-end">
                        <Link to='/purchase' onClick={handlePurchase}><button className="btn btn-primary">Purchase</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;