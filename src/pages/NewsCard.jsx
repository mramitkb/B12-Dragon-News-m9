import React from 'react';
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from 'react-router';

const NewsCard = ({ news }) => {

    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view
    } = news;

    return (
        <div className="bg-base-100 border border-base-300 rounded-lg p-4 space-y-4">

            {/* Author Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold">{author.name}</h3>
                        <p className="text-sm text-gray-500">
                            {new Date(author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold">
                {title}
            </h2>

            {/* Image */}
            <img
                src={thumbnail_url}
                alt=""
                className="w-full rounded-lg"
            />

            {/* Details */}
            <p className="text-gray-600">
                {details.slice(0, 200)}...
                <Link to={`/newsDetails/${id}`} className="text-orange-500 font-semibold ml-2 cursor-pointer">
                    Read More
                </Link>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center border-t pt-3">

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="text-orange-400 flex">
                        {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />))}
                    </div>
                    <span>{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;