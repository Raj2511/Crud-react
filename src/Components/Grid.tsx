import { FC } from "react";

const Grid: FC = () => {
    return <>
        <div className="container">
            <div className="row">
                <div className="col text-start">
                    Name
                </div>
                <div className="col text-start">
                    Mail
                </div>
                <div className="col text-start">
                    City
                </div>
                <div className="col text-center">
                    Status
                </div>
                <div className="col text-center">
                    Action
                </div>
            </div>
        </div>
    </>
}

export default Grid