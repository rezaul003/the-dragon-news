import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoreNews from "./moreNews";


const LeftNav = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

  




    return (
        <div className="p-4 space-y-3 mb-3">
            <h2 className="text-3xl font-semibold mb-6 ">All Category</h2>
            <h2 className="text-xl font-semibold bg-base-200 border rounded-md px-6 py-3 mx-2 mb-4">National News</h2>


            {/* National News */}
            <div className="pl-10">

                {
                    categories.map(category => <Link
                        className="block py-3 font-poppins-500 text-lg font-extralight"
                        id={category.id}
                        to={`/category/${category.id}`}
                    > {category.name} </Link>)
                }
            </div>


            <div>
               <MoreNews></MoreNews>
            </div>


        </div>
    );
};

export default LeftNav;