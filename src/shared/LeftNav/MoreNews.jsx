import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { CiCalendarDate } from "react-icons/ci";


const MoreNews = () => {

    const [moreNews, setMoreNews] = useState([]);




    useEffect(() => {
        fetch('moreNews.json')
            .then(res => res.json())
            .then(data => setMoreNews(data))
    }, []);


    return (
        <div className='py-3'>

            {
                moreNews.map(news => <div
                    className="block py-3 font-poppins-500 pl-2 space-y-2"
                    id={news.id}
                    >
                    <Link to={`/news/${news.id}`}> <img className='rounded-sm' src={news.img} alt="" /></Link>
                    <h3 className='items-center font-semibold'>{news.title}</h3>
                    <p className=' flex text-md items-center font-light text-sm'><span className='mr-4 font-medium'>{news.genre}</span> <CiCalendarDate className='mr-2'></CiCalendarDate> <span>{moment().format("MMM D, YYYY")}</span> </p>


                </div>)
            }

        </div>
    );
};

export default MoreNews;