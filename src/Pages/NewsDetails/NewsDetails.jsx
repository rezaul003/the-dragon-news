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

                    {
                        news.map(anews => <div id={anews.id}>
                            <img src={anews.author.img} alt="" />
                        </div>)
                    }

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