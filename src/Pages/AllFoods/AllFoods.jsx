import { useEffect, useState } from "react";
import AllFoodesCard from "./AllFoodesCard";

const AllFoods = () => {
    const [items, setItems] = useState([])
    const [search,setSearch]=useState('')

    useEffect(() => {
        fetch('http://localhost:5000/itemsAll')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl text-center font-extrabold my-10">All Food</h1>
           <div className="flex justify-center">
           <form className="mb-5 flex" onSubmit={(event)=>{event.preventDefault()}}>
                <input
                    type="text"
                    placeholder="Search for food..."
                    onChange={(e)=>setSearch(e.target.value)}
                    className="w-60 lg:w-80 h-12 rounded-xl"
                />
                <div className=""><button className=" btn">Search</button></div>
            </form>
           </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    items.filter((item)=>{
                        return search.toLowerCase()===''?item : item.name.toLowerCase().includes(search)
                    }).map(item => <AllFoodesCard key={item._id} item={item}></AllFoodesCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default AllFoods;