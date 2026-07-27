"use client";

import React, { useEffect, useState } from "react";
import UserTable from "@/components/admin/userTable";

const page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/users", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(
      `http://localhost:5000/admin/users/${id}/delete`,
      {
        method: "DELETE",
        credentials: "include",
      },
    );
    const data = await response.json();

    if (response.ok) {
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } else {
      const err = await response.json();
      alert(err.message);
    }
  };
  return (
    <>
      <UserTable users={users} onDelete={handleDelete} />
    </>
  );
};

export default page;
