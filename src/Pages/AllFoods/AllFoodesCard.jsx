import { Link } from "react-router-dom";

const AllFoodesCard = ({item}) => {
    const {_id, name, image, category, price, addedBy, email, origin, description } = item
    return (
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-72 w-96" />
            </figure>
            <div className="card-body">
                <p className="font-bold">Name : <span>{name}</span></p>
                <p className="font-bold">Category : <span>{category}</span></p>
                <p className="font-bold">Price : <span>{price}$</span></p>
                <div className=" flex justify-center">
                    <button className="btn"><Link to={`/singlefood/${_id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default AllFoodesCard;