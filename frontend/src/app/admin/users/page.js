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
  return (
    <>
      <UserTable users={users} />
    </>
  );
};

export default page;
