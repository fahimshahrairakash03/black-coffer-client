import React from "react";

const NewsCard = ({ n }) => {
  const {
    intensity,
    likelihood,
    relevance,
    topic,
    published,
    country,
    region,
    insight,
  } = n;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold  text-center">Topic: {topic}</h2>
          <h2 className="text-xl font-bold text-center">
            Intensity: {intensity}
          </h2>
          <h2 className="text-xl font-bold text-center">
            Likelihood: {likelihood}
          </h2>
          <h2 className="text-xl font-bold text-center">
            Revelance: {relevance}
          </h2>

          <p>{insight}</p>
          <p>Published On: {published}</p>
          <p>Region: {region}</p>
          <p>Country: {country}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
