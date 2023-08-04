import React from 'react';

const users = [
  { id: 1, firstName: "Duane", lastName: "Watson" },
  { id: 2, firstName: "Duane", lastName: "Johnson" },
];

const UserList = () => {
  const userHeadings = users.map((user) => (
    <h1 key={user.id}>{user.firstName}</h1>
  ));

  return (
    <div>
      {userHeadings}
    </div>
  );
};

export default UserList;
