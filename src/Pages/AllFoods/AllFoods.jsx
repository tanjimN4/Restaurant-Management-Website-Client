import { useEffect, useState } from "react";
import AllFoodesCard from "./AllFoodesCard";

const AllFoods = () => {
    const [items, setItems] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/itemsAll',{credentials: 'include'})
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <div className="bg-[url(https://i.ibb.co/r7xHGzf/pexels-heftiba-940302.jpg)] rounded-xl bg-cover bg-center h-96 flex justify-center mx-0 md:mx-5 lg:mx10 my-0 md:my-5 lg:my-10">
            <div>
            <h1 className="text-5xl text-center font-extrabold my-10 text-black font-greyQo">All Food</h1>
            <div className="flex justify-center">
                <form className="mb-5 flex" onSubmit={(event) => { event.preventDefault() }}>
                    <input
                        type="text"
                        placeholder="Search for food..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-60 lg:w-80 h-12 rounded-xl"
                    />
                    <div className=""><button className=" btn btn-primary ml-4">Search</button></div>
                </form>
            </div>
            </div>
            </div>
            <div className=" mx-0 md:mx-5 lg:mx-10 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {
                        items.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                        }).map(item => <AllFoodesCard key={item._id} item={item}></AllFoodesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoods;