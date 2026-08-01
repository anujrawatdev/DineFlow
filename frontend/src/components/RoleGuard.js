"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RoleGuard = ({ role, children }) => {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/profile", {
          credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) {
          router.push("/login");
          return;
        }

        if (data.role !== role) {
          router.push("/home");
          return;
        }

        setAllowed(true);
      } catch (error) {
        router.push("/login");
      }
    };

    checkUser();
  }, []);

  if (!allowed) {
    return null;
  }

  return children;
};

export default RoleGuard;
