import { FC } from "react";

const Grid: FC = () => {
    return <>
    <h3 className='text-start m-2'>List</h3>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className="col-1 text-start">#</th>
                    <th scope="col" className="col-2 text-start">Name</th>
                    <th scope="col" className="col-3 text-start">Mail ID</th>
                    <th scope="col" className="col-2 text-start">City</th>
                    <th scope="col" className="col-2 start-center">Status</th>
                    <th scope="col" className="col-2 start-center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" className="text-start">1</th>
                    <td className="text-start">Mark</td>
                    <td className="text-start">Otto</td>
                    <td className="text-start">@mdo</td>
                    <td className="text-center">@mdo</td>
                    <td className="text-center">@mdo</td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">2</th>
                    <td className="text-start">Mark</td>
                    <td className="text-start">Otto</td>
                    <td className="text-start">@mdo</td>
                    <td className="text-center">@mdo</td>
                    <td className="text-center">@mdo</td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">3</th>
                    <td className="text-start">Mark</td>
                    <td className="text-start">Otto</td>
                    <td className="text-start">@mdo</td>
                    <td className="text-center">@mdo</td>
                    <td className="text-center">@mdo</td>
                </tr>
            </tbody>
        </table>
    </>
}

export default Grid