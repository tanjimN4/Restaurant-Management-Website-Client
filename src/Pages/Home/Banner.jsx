import { Link } from 'react-router-dom';
import img1 from '../../assets/pexels-owpictures-106343.jpg'
import img2 from '../../assets/pexels-pixabay-416471.jpg'
import img3 from '../../assets/pexels-valeriya-1639556.jpg'
import img4 from '../../assets/pexels-vanmalidate-769289.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px] rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full" />
                    <div className="absolute h-full left-0 top-0 flex items-center gap-5 bg-gradient-to-r from-[#151515] to-[ rgb(21, 21, 21)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-6xl font-extrabold'>Savoring Global Flavors</h1>
                            <p>Explore the rich history and cultural significance of traditional dishes. Uncover the stories and flavors that connect us across cultures.</p>
                            <div>
                                <Link to='/allfoods' className='btn btn-active btn-primary mr-5'>ALL FOODS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full" />
                    <div className="absolute h-full left-0 top-0 flex items-center gap-5 bg-gradient-to-r from-[#151515] to-[ rgb(21, 21, 21)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-6xl font-extrabold'>Farm-to-Table Delights</h1>
                            <p>Celebrate fresh, seasonal produce with farm-to-table recipes. Support local agriculture while enjoying vibrant, flavorful meals.</p>
                            <div>
                                <Link to='/allfoods' className='btn btn-active btn-primary mr-5'>ALL FOODS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full" />
                        <div className="absolute h-full left-0 top-0 flex items-center gap-5 bg-gradient-to-r from-[#151515] to-[ rgb(21, 21, 21)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-6xl font-extrabold'>Savoring Global Flavors</h1>
                            <p>Explore the rich history and cultural significance of traditional dishes. Uncover the stories and flavors that connect us across cultures.</p>
                            <div>
                                <Link to='/allfoods' className='btn btn-active btn-primary mr-5'>ALL FOODS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full" />
                        <div className="absolute h-full left-0 top-0 flex items-center gap-5 bg-gradient-to-r from-[#151515] to-[ rgb(21, 21, 21)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-6xl font-extrabold'>Farm-to-Table Delights</h1>
                            <p>Celebrate fresh, seasonal produce with farm-to-table recipes. Support local agriculture while enjoying vibrant, flavorful meals.</p>
                            <div>
                                <Link to='/allfoods' className='btn btn-active btn-primary mr-5'>ALL FOODS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;