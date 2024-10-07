import Footer from "../../shared/Footer/Footer";
import BreakingLine from "../../shared/Header/BreakingLine";
import Header from "../../shared/Header/Header";
import LeftNav from "../../shared/LeftNav/LeftNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightNav from "../../shared/RightNav/RightNav";
import MiddleNews from "./MiddleNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingLine></BreakingLine>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

                <div className=" border">
                    <LeftNav></LeftNav>
                </div>

                <div className="md:col-span-2 border">
                    <MiddleNews></MiddleNews>

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

export default Home; 