"use client";

import React, { useEffect, useState } from "react";
import UserTable from "@/components/admin/userTable";
import {toast} from 'sonner';

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
  try {
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
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
  }
  };
  return (
    <>
      <UserTable users={users} onDelete={handleDelete} />
    </>
  );
};

export default page;
