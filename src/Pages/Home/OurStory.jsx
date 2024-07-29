import img1 from '../../assets/pexels-owpictures-106343.jpg'
import img2 from '../../assets/pexels-pixabay-416471.jpg'
import img3 from '../../assets/pexels-valeriya-1639556.jpg'

const OurStory = () => {
    return (
        <div className="card grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl mx-0 lg:mx-10">
            <div className="">
                <div className="grid grid-rows-1 lg:grid-rows-3 lg:grid-flow-col  gap-0 lg:gap-4">
                    <div className="row-span-3 ..."><img src={img1} className='rounded-lg w-96 h-96' alt="" /></div>
                    <div className="col-span-2 ..."><img src={img2} className='rounded-lg h-96 lg:h-40 w-96 mt-2 lg:mt-0 lg:w-72' alt="" /></div>
                    <div className="row-span-2 col-span-2 ..."><img src={img3} className='rounded-lg h-96 lg:h-48 w-96 mt-2 lg:mt-0 lg:w-72' alt="" /></div>
                </div>
            </div>
            <div className="card-body ">
                <h2 className="card-title">Our Story</h2>
                <p className=' text-gray-300'>At Foody, we bring the essence of Tuscany to you. Founded by Maria Rossi, our restaurant blends traditional Italian recipes with fresh, local ingredients. Enjoy our hand-tossed pizzas and rich pastas in a warm, elegant setting. Whether you're celebrating a special occasion or just savoring a delicious meal, our team is dedicated to providing an exceptional dining experience. Discover the taste of Italy right here in your city.</p>
            </div>
        </div>
    );
};

export default OurStory;