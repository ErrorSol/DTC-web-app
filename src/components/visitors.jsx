// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./VisitingPage.css"; // Include a CSS file for styles
// import { initializeApp } from "firebase/app";
// import {
//   getDatabase,
//   ref,
//   set,
//   get,
//   child,
// } from "firebase/database";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBO9a2QMkLAC0rmmaugKRaEwhSxrJQFq48",
//   authDomain: "dtc-website-7e178.firebaseapp.com",
//   projectId: "dtc-website-7e178",
//   storageBucket: "dtc-website-7e178.firebasestorage.app",
//   messagingSenderId: "903589248427",
//   databaseURL: "https://dtc-website-7e178-default-rtdb.firebaseio.com/",
//   appId: "1:903589248427:web:069ed35c83836299f4e6ee"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth(app);

// function VisitingPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   // Handle form changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle login
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     signInWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         alert("Login successful!");
//         navigate("/home");
//       })
//       .catch((error) => {
//         alert("Login failed: " + error.message);
//       });
//   };

//   // Handle registration
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const { name, phone, email, password } = formData;

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         set(ref(database, `users/${user.uid}`), {
//           name,
//           phone,
//           email,
//         });
//         alert("Registration successful!");
//         navigate("/Routres");
//       })
//       .catch((error) => {
//         alert("Registration failed: " + error.message);
//       });
//   };

//   return (
//     <div className="visiting-page">
//       <header className="header">
//         <h1>Welcome to Delhi Transport Corporation</h1>
//       </header>
//       <section className="main-section">
//         <div className="gallery">
//           <img src="delhi-bus.jpg" alt="Delhi Bus" className="gallery-image" />
//           <img src="red-fort.jpg" alt="Red Fort" className="gallery-image" />
//           <img src="qutub-minar.jpg" alt="Qutub Minar" className="gallery-image" />
//           <img src="lotus-temple.jpg" alt="Lotus Temple" className="gallery-image" />
//         </div>
//         <div className="about">
//           <p>
//             Delhi Transport Corporation (DTC) offers a comprehensive public
//             transport system. Explore Delhi's rich heritage with convenient bus
//             routes covering historic sites like the Red Fort, Qutub Minar, and
//             more.
//           </p>
//         </div>
//       </section>
//       <section className="auth-section">
//         <div className="auth-container">
//           <h2>{isLogin ? "Log In" : "Register"}</h2>
//           <form onSubmit={isLogin ? handleLogin : handleRegister}>
//             {!isLogin && (
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             )}
//             {!isLogin && (
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             )}
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
//           </form>
//           <p>
//             {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//             <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
//               {isLogin ? "Sign Up" : "Log In"}
//             </button>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default VisitingPage;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getDatabase, ref, set, get, child } from "firebase/database";
// import { initializeApp } from "firebase/app";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBO9a2QMkLAC0rmmaugKRaEwhSxrJQFq48",
//   authDomain: "dtc-website-7e178.firebaseapp.com",
//   projectId: "dtc-website-7e178",
//   storageBucket: "dtc-website-7e178.firebasestorage.app",
//   messagingSenderId: "903589248427",
//   databaseURL: "https://dtc-website-7e178-default-rtdb.firebaseio.com/",
//   appId: "1:903589248427:web:069ed35c83836299f4e6ee"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// function VisitingPage() {
//   const navigate = useNavigate();

//   // States for login, registration, and user status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [registerData, setRegisterData] = useState({ name: "", email: "", phone: "", password: "" });

//   // Handle form input changes
//   const handleInputChange = (e, formType) => {
//     const { name, value } = e.target;
//     if (formType === "login") {
//       setLoginData({ ...loginData, [name]: value });
//     } else {
//       setRegisterData({ ...registerData, [name]: value });
//     }
//   };

//   // Handle login
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const dbRef = ref(database);
//     get(child(dbRef, `users/${loginData.email.replace(/\./g, "_")}`))
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const userData = snapshot.val();
//           if (userData.password === loginData.password) {
//             setIsLoggedIn(true);
//             setShowPopup(true);
//           } else {
//             alert("Incorrect password");
//           }
//         } else {
//           alert("User not found");
//         }
//       })
//       .catch((error) => console.error(error));
//   };

//   // Handle registration
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const userKey = registerData.email.replace(/\./g, "_");
//     set(ref(database, `users/${userKey}`), registerData)
//       .then(() => {
//         alert("Registration successful!");
//         setRegisterData({ name: "", email: "", phone: "", password: "" });
//       })
//       .catch((error) => console.error(error));
//   };

//   // Popup close and navigation
//   const handlePopupClose = () => {
//     setShowPopup(false);
//     navigate("/ticket-booking");
//   };

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <h1 className="hero-title"> RAAHI welcomes you to Delhi Bus Transport.</h1>
//         <p className="hero-description">Plan your journey in an easy way..</p>
//         <div className="hero-buttons">
//           <Link
//             to={isLoggedIn ? "/ticket-booking" : "#login-section"}
//             className="hero-btn primary-btn"
//           >
//             Book Tickets
//           </Link>
//           <Link
//             to={isLoggedIn ? "/live-tracking" : "#login-section"}
//             className="hero-btn secondary-btn"
//           >
//             Live Tracking
//           </Link>
//         </div>
//       </div>

//       {/* Login Section */}
//       <div id="login-section" className="auth-section">
//         <div className="auth-container">
//           <h2>Login</h2>
//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={loginData.email}
//               onChange={(e) => handleInputChange(e, "login")}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={loginData.password}
//               onChange={(e) => handleInputChange(e, "login")}
//               required
//             />
//             <button type="submit">Login</button>
//           </form>
//         </div>

//         {/* Registration Section */}
//         <div className="auth-container">
//           <h2>Register</h2>
//           <form onSubmit={handleRegister}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={registerData.name}
//               onChange={(e) => handleInputChange(e, "register")}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={registerData.email}
//               onChange={(e) => handleInputChange(e, "register")}
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={registerData.phone}
//               onChange={(e) => handleInputChange(e, "register")}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={registerData.password}
//               onChange={(e) => handleInputChange(e, "register")}
//               required
//             />
//             <button type="submit">Register</button>
//           </form>
//         </div>
//       </div>

//       {/* Success Popup */}
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Successfully Logged In!</h3>
//             <div className="bus-animation"></div>
//             <button onClick={handlePopupClose}>Proceed to Booking</button>
//           </div>
//         </div>
//       )}

//       {/* Inline CSS */}
//       <style>
//         {`
//           body {
//             margin: 0;
//             font-family: Arial, sans-serif;
//           }

//           .hero-section {
//             text-align: center;
//             padding: 4rem 2rem;
//             background-color: #007bff;
//             color: white;
//           }

//           .hero-title {
//             font-size: 2.5rem;
//             margin-bottom: 1rem;
//           }

//           .hero-buttons {
//             margin-top: 1.5rem;
//           }

//           .hero-btn {
//             text-decoration: none;
//             padding: 0.75rem 1.5rem;
//             border-radius: 5px;
//             color: white;
//             margin: 0 0.5rem;
//             font-weight: bold;
//             transition: background-color 0.3s;
//           }

//           .primary-btn {
//             background-color: #ff9800;
//           }

//           .secondary-btn {
//             background-color: #4caf50;
//           }

//           .auth-section {
//             padding: 2rem;
//             background-color: #f0f0f0;
//           }

//           .auth-container {
//             background: white;
//             padding: 2rem;
//             margin: 1rem auto;
//             max-width: 400px;
//             border-radius: 10px;
//             box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
//           }

//           .auth-container h2 {
//             margin-bottom: 1rem;
//           }

//           .auth-container input {
//             width: 100%;
//             padding: 0.5rem;
//             margin-bottom: 1rem;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//           }

//           .auth-container button {
//             width: 100%;
//             padding: 0.75rem;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//           }

//                       .popup {
//                 position: fixed;
//                 top: 0;
//                 left: 0;
//                 width: 100%;
//                 height: 100%;
//                 background: rgba(0, 0, 0, 0.6);
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 z-index: 1000;
//             }

//             .popup-content {
//                 background-color: white;
//                 padding: 2rem;
//                 text-align: center;
//                 border-radius: 10px;
//                 box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//                 width: 300px;
//                 animation: popupAnimation 0.5s ease-out;
//             }

//             .popup h3 {
//                 font-size: 1.5rem;
//                 margin-bottom: 1rem;
//             }

//             .bus-animation {
//                 background-image: url('https://via.placeholder.com/150'); /* Placeholder for bus animation */
//                 background-size: cover;
//                 width: 100px;
//                 height: 100px;
//                 margin: 0 auto 1.5rem;
//                 animation: moveBus 2s infinite ease-in-out;
//             }

//             @keyframes moveBus {
//                 0% { transform: translateX(0); }
//                 50% { transform: translateX(50px); }
//                 100% { transform: translateX(0); }
//             }

//             .popup button {
//                 padding: 0.75rem 1.5rem;
//                 background-color: #007bff;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
//                 font-weight: bold;
//                 transition: background-color 0.3s;
//             }

//             .popup button:hover {
//                 background-color: #0056b3;
//             }

//             /* Mobile responsiveness */
//             @media (max-width: 768px) {
//                 .hero-section {
//                     padding: 3rem 1rem;
//                 }

//                 .hero-title {
//                     font-size: 2rem;
//                 }

//                 .auth-container {
//                     max-width: 90%;
//                     padding: 1.5rem;
//                 }
//             }

//             @media (max-width: 480px) {
//                 .hero-title {
//                     font-size: 1.5rem;
//                 }
//                 .hero-btn {
//                     padding: 0.5rem 1rem;
//                     font-size: 0.9rem;
//                 }
//                 .auth-container input {
//                     padding: 0.4rem;
//                 }
//                 .auth-container button {
//                     padding: 0.65rem;
//                 }
//             }
//         `}
//       </style>
//     </div>
//   );
// }

// export default VisitingPage;