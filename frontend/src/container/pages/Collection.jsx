import { useState } from "react";
import { BiArrowBack, BiSolidCollection } from "react-icons/bi";
import { BsFillSave2Fill } from "react-icons/bs";
import { SiLinuxcontainers } from "react-icons/si";
import { TbPaperBagOff } from "react-icons/tb";
import * as reactRouterDom from "react-router-dom";
import CollectionContainer from "../../components/Collection/CollectionContainer";
import SavedCollection from "../../components/Collection/SavedCollection";
import FoodCard from "../../components/card/FoodCard";
import { food } from "../../constants/cardselect";

const colCard = [...food];

const Collection = () => {
    const [collection, setCollection] = useState(colCard);
    const [savedContent, setSaveContent] = useState(colCard);
    const [activeCard, setActiveCard] = useState(colCard?.[0]?.id);


    let [change, setChange] = useState(colCard[0]);
    const [toggleTab, setToggleTab] = useState(1);
    const activeToggle = (index) => {
        setToggleTab(index);
    };

    return (
        <div className="contentCollection">
            <reactRouterDom.Link to={"/"} className="backBtn" id="setBackCol">
                <BiArrowBack />
            </reactRouterDom.Link>
            {/* TABS */}
            <div className="tabs">
                <li
                    className="tab"
                    onClick={() => activeToggle(1)}
                    id={toggleTab === 1 ? "active-tab" : "h1Hide"}
                >
                    <BiSolidCollection className="tabIcon" />
                    Your Collection
                </li>
                <li
                    className="tab"
                    onClick={() => activeToggle(2)}
                    id={toggleTab === 2 ? "active-tab" : "h1Hide"}
                >
                    <BsFillSave2Fill className="tabIcon" />
                    Saved Collections
                </li>
            </div>
            <div className="contentPages">
                <div
                    className="bigContainer"
                    id={toggleTab === 1 ? "active-content" : "unActive-tab"}
                >
                    <div>
                        {collection.length === 0 ? (
                            <h3 className="e-Col">
                                Empty Collection <SiLinuxcontainers className="e-Col-icon" />{" "}
                            </h3>
                        ) : (
                            activeCard && (
                                <CollectionContainer
                                    imgUrl={change.imageUrl}
                                    ingredients={change.recipes}
                                    time={change.cookingTime}
                                    head={change.name}
                                    desc={change.instructions}
                                    cal={change.calories}
                                    sub={change.category}
                                />
                            )
                        )}
                    </div>

                    <div className="setMainFlex" style={{ display: "flex" }}>
                        {collection.length === 0 ? (
                            <h3 className="e-Col">
                                Empty Collection <SiLinuxcontainers className="e-Col-icon" />{" "}
                            </h3>
                        ) : (
                            /*  <FoodCard /> */
                            collection.map((col, index) => {
                                return (
                                    <div
                                        className={
                                            activeCard == col.id ? "activeSet" : "unActiveSet"
                                        }
                                        id="foodCard"
                                        key={Math.random()}
                                    >
                                        <FoodCard
                                            index={index}
                                            data={col}
                                            changeIndex={(col) => setActiveCard(col.id)}
                                            changeCard={(col) => setChange(col)}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
                <div
                    className="page2Main"
                    id={toggleTab === 2 ? "active-content" : "unActive-tab"}
                >
                    {savedContent.length === 0 ? (
                        <h3 className="e-Col">
                            Nothing Saved <TbPaperBagOff className="e-Col-icon" />{" "}
                        </h3>
                    ) : (
                        savedContent.map((col, index) => {
                            return (
                                <div key={Math.random()}>
                                    <div>
                                        <SavedCollection
                                            data={col}
                                            index={col.id}
                                            id={index}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                
            </div>
        </div>
    );
};

export default Collection;
