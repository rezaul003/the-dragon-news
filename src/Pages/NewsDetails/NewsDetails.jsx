import { useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightNav from "../../shared/RightNav/RightNav";

const NewsDetails = () => {

    const news = useLoaderData();
    // console.log(news)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">


                <div className="md:col-span-2 border">
                    <h1 className="text-3xl font-semibold p-4">Dragon News</h1>


                    <div className="py-3">
                        {
                            news.map(anews => <div className="block py-3 font-poppins-500 pl-2 space-y-2" id={anews.id}>
                                <img className="rounded-md" src={anews.image_url} alt="" />
                                <h3 className='items-center font-semibold'>{anews.title}</h3>

                               <p className=" text-justify justify-between">{anews.details}</p>
                            </div>)
                        }
                    </div>

                   

                </div>

                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>


            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default NewsDetails;