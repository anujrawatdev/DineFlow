// // // "use client"
// // // import React from "react";
// // // import Link from "next/link";
// // // import { useState, useRef, useEffect } from "react";
// // // import { User, CalendarDays, Store, LogOut, ChevronDown } from "lucide-react";
// // // import {useRouter} from "next/navigation";

// // // const Navbar = () => {
// // //      const router = useRouter();

// // //      const [user, setUser] = useState(null);
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const dropdownRef = useRef(null);

// // //   useEffect(() => {
    
// // //     const handleClickOutside = (event) => {
// // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // //         setIsOpen(false);
// // //       }
// // //     };

// // //     document.addEventListener("mousedown", handleClickOutside);

// // //     return () => {
// // //       document.removeEventListener("mousedown", handleClickOutside);
// // //     };
// // //   }, []);

// // //   const handleLogout = async () => {

// // //     try {
// // //       const response = await fetch("http://localhost:5000/logout", {
// // //         method: "POST",
// // //         credentials: "include",
// // //       });

// // //       const data = await response.json();
// // //       alert(data.message);

// // //       router.push("/login");
// // //     } catch (error) {
// // //       console.log("error:",error)
// // //     }
// // //   };

// // //     useEffect(() => {
// // //       async function userProfile() {
// // //         const reponse = await fetch("http://localhost:5000/profile", {
// // //           method: "GET",
// // //           credentials: "include",
// // //         });
// // //         const data = await reponse.json();
// // //         setUser(data);
// // //       }
// // //       userProfile();
// // //     }, []);
  
// // //     if (!user) {
// // //     return (
// // //       <div className="min-h-screen flex justify-center items-center">
// // //         Loading...
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <nav
// // //       className="
// // //       fixed top-0 left-0 z-50
// // //       w-full h-[10vh]
// // //       flex items-center justify-between
// // //       px-8
// // //       bg-amber-900/90
// // //       backdrop-blur-xl
// // //       border-b border-white/10
// // //       shadow-md
// // //     "
// // //     >
// // //       <div className="font-bold text-2xl text-white">
// // //         Dine<span className="text-amber-500">Flow</span>
// // //       </div>

// // //       <div className="flex gap-8 text-white">
// // //         <Link
// // //           href="/home"
// // //           className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
// // //         >
// // //           Home
// // //         </Link>

// // //         <Link
// // //           href="#about"
// // //           className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
// // //         >
// // //           About Us
// // //         </Link>

// // //         <Link
// // //           href="#contact"
// // //           className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
// // //         >
// // //           Contact Us
// // //         </Link>
// // //       </div>
// // //       <div className="relative" ref={dropdownRef}>
// // //         <button
// // //           onClick={() => setIsOpen(!isOpen)}
// // //           className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-white/10 transition"
// // //         >
// // //           <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white">
// // //             {user?.name?.charAt(0).toUpperCase()}
// // //           </div>

// // //           <ChevronDown
// // //             size={18}
// // //             className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
// // //           />
// // //         </button>

// // //         {isOpen && (
// // //           <div className="absolute right-0 mt-3 w-60 rounded-xl text-neutral-200 bg-black/55 backdrop-blur-3xl border border-zinc-700 overflow-hidden">
// // //             <Link
// // //               href="/profile"
// // //               className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-300/55 transition"
// // //             >
// // //               <User size={18} />
// // //               My Profile
// // //             </Link>

// // //             <Link
// // //               href="/myBookings"
// // //               className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-300/55 transition"
// // //             >
// // //               <CalendarDays size={18} />
// // //               My Bookings
// // //             </Link>

// // //             <hr className="border-zinc-700" />

// // //             <button
// // //               onClick={handleLogout}
// // //               className="w-full flex items-center gap-3 px-4 py-3 text-neutral-200 hover:bg-red-600 transition"
// // //             >
// // //               <LogOut size={18} />
// // //               Logout
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // "use client";
// // import React from "react";
// // import Link from "next/link";
// // import { useState, useRef, useEffect } from "react";
// // import { User, CalendarDays, LogOut, ChevronDown } from "lucide-react";
// // import { useRouter } from "next/navigation";

// // const Navbar = () => {
// //   const router = useRouter();
// //   const [user, setUser] = useState(null);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const dropdownRef = useRef(null);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   const handleLogout = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/logout", {
// //         method: "POST",
// //         credentials: "include",
// //       });
// //       const data = await response.json();
// //       alert(data.message);
// //       router.push("/login");
// //     } catch (error) {
// //       console.log("error:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     async function userProfile() {
// //       try {
// //         const response = await fetch("http://localhost:5000/profile", {
// //           method: "GET",
// //           credentials: "include",
// //         });
// //         const data = await response.json();
// //         setUser(data);
// //       } catch (e) {
// //         console.error(e);
// //       }
// //     }
// //     userProfile();
// //   }, []);

// //   if (!user) {
// //     return (
// //       <div className="min-h-screen flex justify-center items-center bg-[#f8f5f0] text-stone-600 font-serif">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (
// //     <nav
// //       className="
// //       fixed top-0 left-0 z-50
// //       w-full h-[12vh]
// //       flex items-center justify-between
// //       px-8 md:px-16
// //       bg-[#f8f5f0]/80 backdrop-blur-md
// //       border-b-1 border-stone-200
// //       transition-all duration-300
// //     "
// //     >
// //       {/* Brand Logo */}
// //       <div className="flex flex-col leading-none">
// //         <span className="font-serif text-2xl tracking-widest text-stone-900 uppercase">
// //           Dine<span className="italic font-light text-[#7A6A5C]">Flow</span>
// //         </span>
// //         <span className="text-[9px] tracking-[0.3em] uppercase text-stone-500 font-sans mt-1">
// //           Culinary Experiences
// //         </span>
// //       </div>

// //       {/* Navigation Links */}
// //      <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
// //         <Link
// //           href="/home"
// //           className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
// //         >
// //           Home
// //         </Link>

// //         <Link
// //           href="/home#about"
// //           className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
// //         >
// //           About Us
// //         </Link>

// //         <Link
// //           href="/home#ContactUs"
// //           className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
// //         >
// //           Contact Us
// //         </Link>
// //       </div>

// //       {/* Action / User Dropdown */}
// //       <div className="relative" ref={dropdownRef}>
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="flex items-center gap-3 bg-stone-900 text-stone-100 px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all text-xs tracking-wider uppercase font-sans shadow-sm"
// //         >
// //           <div className="h-6 w-6 rounded-full bg-stone-700 text-stone-200 flex items-center justify-center font-serif text-xs">
// //             {user?.name?.charAt(0).toUpperCase()}
// //           </div>
// //           <span>{user?.name?.split(" ")[0]}</span>
// //           <ChevronDown
// //             size={14}
// //             className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
// //           />
// //         </button>

// //         {isOpen && (
// //           <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-[#FAF8F5] shadow-xl border border-stone-200/80 overflow-hidden text-stone-700 text-xs uppercase tracking-wider font-sans">
// //             <Link
// //               href="/profile"
// //               className="flex items-center gap-3 px-5 py-3.5 hover:bg-stone-200/50 transition-colors"
// //             >
// //               <User size={15} />
// //               My Profile
// //             </Link>
// //             <Link
// //               href="/myBookings"
// //               className="flex items-center gap-3 px-5 py-3.5 hover:bg-stone-200/50 transition-colors"
// //             >
// //               <CalendarDays size={15} />
// //               My Bookings
// //             </Link>
// //             <hr className="border-stone-200" />
// //             <button
// //               onClick={handleLogout}
// //               className="w-full flex items-center gap-3 px-5 py-3.5 text-red-700 hover:bg-red-50 transition-colors"
// //             >
// //               <LogOut size={15} />
// //               Logout
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { User, CalendarDays, LogOut, ChevronDown } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Navbar = () => {
//   const router = useRouter();
//   const [user, setUser] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const dropdownRef = useRef(null);

//   // Mark component as mounted to safely render client-only UI
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Handle click outside to close dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Fetch user profile on mount
//   useEffect(() => {
//     async function userProfile() {
//       try {
//         const response = await fetch("http://localhost:5000/profile", {
//           method: "GET",
//           credentials: "include",
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setUser(data);
//         }
//       } catch (e) {
//         console.error("Failed to fetch user profile:", e);
//       }
//     }
//     userProfile();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/logout", {
//         method: "POST",
//         credentials: "include",
//       });
//       const data = await response.json();
//       alert(data.message);
//       router.push("/login");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   // Prevent hydration mismatch by rendering a fallback structure or consistent shell until mounted
//   if (!isMounted) {
//     return (
//       <nav className="fixed top-0 left-0 z-50 w-full h-[12vh] flex items-center justify-between px-8 md:px-16 bg-[#f8f5f0]/80 border-b border-stone-200">
//         <div className="flex flex-col leading-none">
//           <span className="font-serif text-2xl tracking-widest text-stone-900 uppercase">
//             Dine<span className="italic font-light text-[#7A6A5C]">Flow</span>
//           </span>
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <nav className="fixed top-0 left-0 z-50 w-full h-[12vh] flex items-center justify-between px-8 md:px-16 bg-[#f8f5f0]/80 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
//       {/* Brand Logo */}
//       <div className="flex flex-col leading-none">
//         <span className="font-serif text-2xl tracking-widest text-stone-900 uppercase">
//           Dine<span className="italic font-light text-[#7A6A5C]">Flow</span>
//         </span>
//         <span className="text-[9px] tracking-[0.3em] uppercase text-stone-500 font-sans mt-1">
//           Culinary Experiences
//         </span>
//       </div>

//       {/* Navigation Links */}
//       <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
//         <Link
//           href="/home"
//           className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
//         >
//           Home
//         </Link>

//         <Link
//           href="/home#about"
//           className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
//         >
//           About Us
//         </Link>

//         <Link
//           href="/home#ContactUs"
//           className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
//         >
//           Contact Us
//         </Link>
//       </div>

//       {/* Action / User Dropdown */}
//       <div className="relative" ref={dropdownRef}>
//         {user ? (
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center gap-3 bg-stone-900 text-stone-100 px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all text-xs tracking-wider uppercase font-sans shadow-sm"
//           >
//             <div className="h-6 w-6 rounded-full bg-stone-700 text-stone-200 flex items-center justify-center font-serif text-xs">
//               {user?.name?.charAt(0).toUpperCase()}
//             </div>
//             <span>{user?.name?.split(" ")[0]}</span>
//             <ChevronDown
//               size={14}
//               className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//             />
//           </button>
//         ) : (
//           <Link
//             href="/login"
//             className="bg-stone-900 text-stone-100 px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all text-xs tracking-wider uppercase font-sans"
//           >
//             Sign In
//           </Link>
//         )}

//         {isOpen && user && (
//           <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-[#FAF8F5] shadow-xl border border-stone-200/80 overflow-hidden text-stone-700 text-xs uppercase tracking-wider font-sans">
//             <Link
//               href="/profile"
//               className="flex items-center gap-3 px-5 py-3.5 hover:bg-stone-200/50 transition-colors"
//             >
//               <User size={15} />
//               My Profile
//             </Link>
//             <Link
//               href="/myBookings"
//               className="flex items-center gap-3 px-5 py-3.5 hover:bg-stone-200/50 transition-colors"
//             >
//               <CalendarDays size={15} />
//               My Bookings
//             </Link>
//             <hr className="border-stone-200" />
//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center gap-3 px-5 py-3.5 text-red-700 hover:bg-red-50 transition-colors"
//             >
//               <LogOut size={15} />
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { User, CalendarDays, LogOut, ChevronDown, } from "lucide-react";
import { useRouter } from "next/navigation";
import {toast} from 'sonner';
const OwnerNavbar = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

const handleLogout = async () => {
  const loadingToast = toast.loading("Logging out...");

  try {
    const response = await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Logged out successfully", {
        id: loadingToast,
      });

      router.push("/login");
    } else {
      toast.error(data.message || "Logout failed", {
        id: loadingToast,
      });
    }
  } catch (error) {
    console.log("error:", error);

    toast.error("Server error. Please try again.", {
      id: loadingToast,
    });
  }
};

  useEffect(() => {
    async function userProfile() {
      const reponse = await fetch("http://localhost:5000/profile", {
        method: "GET",
        credentials: "include",
      });
      const data = await reponse.json();
      setUser(data);
    }
    userProfile();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#FDFCFB] text-[#7A6A5C] text-sm tracking-widest uppercase font-medium">
        Loading...
      </div>
    );
  }

  return (
    <nav
      className="
        fixed top-0 left-0 z-50
        w-full h-20
        flex items-center justify-between
        px-8 md:px-12
        bg-[#FDFCFB]/90
        backdrop-blur-md
        border-b border-[#E5E2DE]
      "
    >
      {/* Brand Logo */}
      <div className="flex flex-col leading-none">
        <span className="font-serif text-2xl tracking-widest text-stone-900 uppercase">
          Dine<span className="italic font-light text-[#7A6A5C]">Flow</span>
        </span>
        <span className="text-[9px] tracking-[0.3em] uppercase text-stone-500 font-sans mt-1">
          Culinary Experiences
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
        <Link
          href="/home"
          className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
        >
          Home
        </Link>

        <Link
          href="/home#about"
          className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
        >
          About Us
        </Link>

        <Link
          href="/home#ContactUs"
          className="relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#1A1A1A] after:transition-all hover:after:w-full"
        >
          Contact Us
        </Link>
      </div>

      {/* User Dropdown */}
     <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 bg-stone-900 text-stone-100 px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all text-xs tracking-wider uppercase font-sans shadow-sm"
        >
          <div className="h-6 w-6 rounded-full bg-stone-700 text-stone-200 flex items-center justify-center font-serif text-xs">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <span>{user?.name?.split(" ")[0]}</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-60 rounded-2xl bg-white border border-[#E5E2DE] shadow-xl overflow-hidden py-2 text-sm text-[#1A1A1A]">
            <Link
              href="/profile"
              className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition text-[#1A1A1A] font-medium"
            >
              <User size={16} className="text-[#7A6A5C]" />
              My Profile
            </Link>
             <Link
              href="/myBookings"
              className="flex items-center gap-3 px-5 py-3 hover:bg-[#F7F5F2] transition text-[#1A1A1A] font-medium"
            >
              <CalendarDays size={16} className="text-[#7A6A5C]" />
              My Bookings
            </Link>

            <hr className="border-[#E5E2DE] my-1" />

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 transition text-left font-medium"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default OwnerNavbar;