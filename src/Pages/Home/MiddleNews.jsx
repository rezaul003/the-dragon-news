import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from 'react-router-dom';


const MiddleNews = () => {

    const [midNews, setMidNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setMidNews(data))
    }, []);

    return (
        <div>

            <h1 className="text-3xl font-semibold p-4">Dragon News Home</h1>

            {
                midNews.map(news => <div className='mb-6'
                    id={news.id}>


                    <div className='flex justify-between bg-base-200 p-4 rounded-t-lg'>
                        <div className='flex space-x-3'>
                            <img className='w-14 rounded-full' src={news.author.img} alt="" />
                            <div>
                                <h4 className='text-xl font-medium'>{news.author.name}</h4>
                                <p className="text-sm">{moment().format("YYYY-MM-DD")}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <CiBookmark ></CiBookmark>
                            <CiShare2 ></CiShare2>
                        </div>
                    </div>

                    <div className='space-y-3 p-4'>
                        <h2 className='text-lg font-semibold'>{news.title}</h2>
                        <img src={news.image_url} alt="" />
                        {/* <p className='text-sm'>{news.details}</p> */}

                        <div className='text-sm text-justify justify-between'>
                            {
                                news.details.length > 200 ?
                                    <p>{news.details.slice(0, 200)}
                                        <Link to={`/details/${news._id}`}
                                            className="text-red-500 pl-2">Read more...</Link></p>
                                    :
                                    <p>{news.details}</p>
                            }

                        </div>
                    </div>



                    <div>
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name={`rating-${news.rating.number}`}
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <h5 className='pl-4 text-xl'>
                                {news.rating.number}
                            </h5>
                        </div>

                    </div>






                </div>)
            }


        </div>
    );
};

export default MiddleNews;