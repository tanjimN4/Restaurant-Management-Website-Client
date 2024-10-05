import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Admin = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user && user.email === 'tanjimahemed7@gmail.com') {
            const fetchUsers = async () => {
                try {
                    const response = await fetch('http://localhost:5000/api/users');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setUsers(data);
                } catch (error) {
                    console.error('Error fetching users:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchUsers();
        } else {
            setLoading(false);
        }
    }, [user]);

    const deleteUser = async (uid) => {
        // Show confirmation alert
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${uid}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Remove the deleted user from state
                setUsers(users.filter(u => u.uid !== uid));
                Swal.fire(
                    'Deleted!',
                    'The user has been deleted.',
                    'success'
                );
            } catch (error) {
                console.error('Error deleting user:', error);
                Swal.fire(
                    'Error!',
                    'There was an error deleting the user.',
                    'error'
                );
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='m-16'>
            {users.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Favorite Color</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map through users */}
                            {users.map(use => (
                                <tr key={use.uid}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={use.photoURL}
                                                        alt="Avatar"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{use.displayName || "N/A"}</td>
                                    <td>{use.favoriteColor || "N/A"}</td>
                                    <td>{use.email}</td>
                                    <td>
                                        <button
                                            className="btn btn-ghost btn-xs"
                                            onClick={() => deleteUser(use.uid)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export default Admin;
