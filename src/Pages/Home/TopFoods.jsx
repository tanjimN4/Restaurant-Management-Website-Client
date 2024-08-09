
import { useEffect, useState } from "react";
import TopFoodsCard from "./TopFoodsCard";
import { Link } from "react-router-dom";


const TopFoods = () => {

    const [items,setItems]=useState([])

    useEffect(()=>{
        fetch('https://restaurant-management-website-server-nine.vercel.app/items')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <div className="my-10 flex justify-center">
                <div>
                <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Top Foods</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        items.map(item =><TopFoodsCard key={item._id} item={item}></TopFoodsCard>)
                    }
                </div>
                <div className="flex justify-center mt-5">
                    <Link to='/allfoods' className="btn btn-success text-xl text-white">see all</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TopFoods;