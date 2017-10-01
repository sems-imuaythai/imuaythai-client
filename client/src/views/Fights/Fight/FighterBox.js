import React from "react";
import UserAvatar from "react-user-avatar";
import moment from "moment";
import CornerBox from "./CornerBox";

export const FighterBox = props => {
    const { fighter, corner } = props;
    const row = corner === "blue" ? "row flex-row-reverse" : "row";
    const fighterColumn = corner === "blue" ? "col-md-9 text-left align-self-center" : "col-md-9 text-right align-self-center";
    return (
        <div className={row}>
            <div className="col-md-3">
                <CornerBox color={corner}>
                    <div className="row justify-content-center" style={{ height: "100%" }}>
                        <div className="col-md-10 align-self-center">
                            <UserAvatar size="75" name={fighter.firstname + " " + fighter.surname} color="#FFF" />
                        </div>
                    </div>
                </CornerBox>
            </div>

            <div className={fighterColumn}>
                {fighter.id == undefined && <h3 className="card-title">The winner of previous fight</h3>}
                {fighter.id && <h3 className="card-title">{fighter.firstname + " " + fighter.surname}</h3>}
                {fighter.id && (
                    <h6 className="card-subtitle mb-2 text-muted">
                        {fighter.gymName || "No gym"}, {fighter.countryName}
                    </h6>
                )}

                {fighter.id && <h5 className="card-title">{moment(fighter.birthdate).format("YYYY-MM-DD")}</h5>}
                {fighter.id && <h5 className="card-title">{fighter.won}</h5>}
                {fighter.id && <h5 className="card-title">{fighter.lost}</h5>}
                {fighter.khanLevel.name == null && <h5 className="card-title"> '' </h5>}
                {fighter.khanLevel !== null && <h5 className="card-title">{fighter.khanLevel.name}</h5>}
            </div>
        </div>
    );
};

export default FighterBox;
