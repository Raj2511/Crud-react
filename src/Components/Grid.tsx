import { FC, useEffect, useState } from "react";
import { ReadUser } from "../API's/API";

const Grid: FC = () => {
    interface User {
        id: number;
        name: string;
        mailId: string;
        city: string;
        isActive: boolean;
        // ... other properties
    }
    let count = 1;
    const [users, setUsers] = useState<User[]>([]); // Assuming User interface

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await ReadUser();
                console.log("Return: " + response[0].name)

                setUsers(response);
            } catch (error) {
                console.error('Failed to fetch users:', error); // Handle errors more gracefully if needed
            }
        };

        fetchdata();
    }, []);

    return (
        <>
            <h3 className="text-start m-2">List</h3>
            {users.length === 0 ? (
                <div>Loading users...</div>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="col-1 text-start">#</th>
                            <th scope="col" className="col-2 text-start">Name</th>
                            <th scope="col" className="col-3 text-start">Mail ID</th>
                            <th scope="col" className="col-2 text-start">City</th>
                            <th scope="col" className="col-2 text-start">Status</th>
                            <th scope="col" className="col-2 start-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user) => (

                            <tr key={user.id}> {/* Use unique identifier from user object */}
                                <th scope="row" className="text-start">{count++}</th>
                                <td className="text-start">{user.name}</td>
                                <td className="text-start">{user.mailId}</td>
                                <td className="text-start">{user.city}</td>
                                <td className="text-start">{user.isActive ? "Active":"InActive"}</td>
                                <td><button type="button" className="btn btn-outline-primary">Edit</button>
                                <button type="button" className="btn btn-outline-danger mx-2">Delete</button></td>
                                {/* ... other table cells based on user properties */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Grid;