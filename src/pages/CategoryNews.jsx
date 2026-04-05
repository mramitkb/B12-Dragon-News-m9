import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';


const CategoryNews = () => {
    
    const {id} = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if(id === "0") {
            setCategoryNews(data);
        }
        else if(id === "1") {
            const filteredNews = data.filter(category => category.others.is_today_pick);
            setCategoryNews(filteredNews)
        }
        else {
            const filteredNews = data.filter(category => category.category_id === Number(id));
            setCategoryNews(filteredNews);
        }
    }, [data, id])


    return (
        <div>
             <h1 className='font-bold text-xl text-center'>All Dragon News <span className='text-secondary'>({categoryNews.length})</span></h1>

             {/* Category Card */}
             <div className='grid grid-cols-1 gap-5 mt-6'>
                {
                    categoryNews.map(category => <NewsCard key={category.id} news={category}></NewsCard>)
                }
             </div>
        </div>
    );
};

export default CategoryNews;