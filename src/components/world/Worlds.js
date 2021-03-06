import React, { useEffect, useLayoutEffect } from "react";
import BaseListLarge from "../base/BaseListLarge";
import BaseMultipleContent from "../base/BaseMultipleContent";
import "../../styles/worlds.css";
import LargeButton from "../base/LargeButton";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";
import { getWorlds } from "../../store/world/world";

const Worlds = () => {
    const { worlds } = useSelector((state) => state.worlds);
    const dispatch = useDispatch();

    return (
        <div className="worlds">
            <BaseMultipleContent title="Worlds">
                <div className="worlds-content">
                    <BaseListLarge>
                        {worlds.map((world) => {
                            return (
                                <Link
                                    to={`/worlds/${world._id}`}
                                    key={world._id}
                                >
                                    <LargeButton>{world.name}</LargeButton>
                                </Link>
                            );
                        })}
                        <Link to={"/worlds/new"}>
                            <LargeButton className="newbutton">
                                NEW <PlusIcon />
                            </LargeButton>
                        </Link>
                    </BaseListLarge>
                </div>
            </BaseMultipleContent>
        </div>
    );
};

export default Worlds;
