import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Users() {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("DELETED Success");
          //Remove the user grom UI
          const remainingUsers = users.filter((user) => user._id != id);
          setUsers(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h1>Users: {loadedUsers.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created Time</th>
              <th>Last Logged in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdTime}</td>
                <td></td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-outline btn-info "
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
