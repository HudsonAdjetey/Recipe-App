import React from "react";

const FoodCard = ({ data, index,changeCard, changeIndex }) => {
    const handleClick = () => {
        if (index + 1 !== data.id) {
        changeCard(data)
        changeIndex(data);
        }
    };

    return (
        <div onClick={handleClick} className="d-flex">
     
            <img src={data.imageUrl} alt="food" />
            <p>{data.name}</p>

        </div>
    );
};

export default FoodCard;
