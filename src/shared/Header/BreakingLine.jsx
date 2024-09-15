import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingLine = () => {
    return (
        <div className="flex p-4 bg-base-200  "> 
            <button className="btn bg-red-600 px-6 text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
           <Link className="font-medium"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingLine;