import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import moment from 'moment';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetails = () => {
    const { id } = useParams();
    const newsData = useLoaderData();

    const singleNews = newsData.find(news => news.id == id);

    const {
        title,
        image_url,
        details,
        author,
        total_view,
        rating,
        category_id
    } = singleNews;

    return (
        <div className="max-w-5xl mx-auto">
            <div className="bg-base-100 shadow-md border border-base-200 rounded-md p-4">

                {/* Image */}
                <img
                    src={image_url}
                    alt={title}
                    className="w-full object-cover rounded-md mb-4"
                />

                {/* Title */}
                <h2 className="text-2xl font-bold mb-2">
                    {title}
                </h2>

                {/* Author + Date */}
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-black">{author.name}</p>
                        <p>
                            {moment(author.published_date).format("MMMM D, YYYY")}
                        </p>
                    </div>
                </div>

                {/* Details */}
                <p className="text-justify text-gray-700 mb-4">
                    {details}
                </p>

                {/* Rating + Views */}
                <div className="flex justify-between items-center border-t pt-3">
                    <div className="flex items-center gap-2">
                                        <div className="text-orange-400 flex">
                                            {Array.from({ length: rating.number }).map((_, i) => (
                                <FaStar key={i} />))}
                                        </div>
                                        <span>{rating.number}</span>
                                    </div>

                    <div className="flex items-center gap-2">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>

                {/* Button */}
                <Link to={`/category/${category_id}`}>
                    <button className="btn btn-error mt-5">
                        ← All news in this category
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default NewsDetails;