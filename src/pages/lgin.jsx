// import React, { useState } from "react";
// import { auth } from "./firebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/dashboard"); // Redirect to dashboard or home after login
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
//       <h1 style={{ textAlign: "center", color: "#007bff" }}>Login</h1>
//       <form onSubmit={handleLogin} style={{ marginTop: "1.5rem" }}>
//         {/* Email */}
//         <div style={{ marginBottom: "1rem" }}>
//           <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//         </div>

//         {/* Password */}
//         <div style={{ marginBottom: "1rem" }}>
//           <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div
//             style={{
//               marginBottom: "1rem",
//               color: "red",
//               fontSize: "0.9rem",
//             }}
//           >
//             {error}
//           </div>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#007bff",
//             color: "white",
//             padding: "0.75rem 1.5rem",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             width: "100%",
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from "react";
// import { auth } from "./firebaseConfig"; // Path to your Firebase config file
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { useLocation, useNavigate } from "react-router-dom";
// import { getDatabase, ref, set } from "firebase/database";

// function Login() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//   });
//   const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign-Up
//   const [error, setError] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       if (isSignUp) {
//         // Create a new user
//         const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//         const userId = userCredential.user.uid;
    
//         // Save user data to Firebase Database
//         const db = getDatabase();
//         await set(ref(db, `users/${userId}`), {
//           name: formData.name,
//           email: formData.email,
//           phoneNumber: formData.phoneNumber,
//         });
//       } else {
//         // Log in an existing user
//         const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
//         const userId = userCredential.user.uid;
    
//         // Fetch user data from Firebase Database
//         const db = getDatabase();
//         const userRef = ref(db, `users/${userId}`);
//         const snapshot = await get(userRef);
    
//         if (snapshot.exists()) {
//           const userData = snapshot.val();
    
//           // Populate the form with retrieved data
//           formData.name = userData.name;
//           formData.phoneNumber = userData.phoneNumber;
//         } else {
//           console.error("User data not found in the database.");
//         }
//       }
    
//       // Redirect to the ticket booking page
//       navigate("/ticket-booking", { state: { formData } });
//     } catch (err) {
//       setError(err.message);
//     }
    
//   };

//   return (
//     <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
//       <h1 style={{ textAlign: "center", color: "#007bff" }}>
//         {isSignUp ? "Sign Up" : "Login"}
//       </h1>
//       <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
//         {/* Name */}
//         {isSignUp && (
//           <div style={{ marginBottom: "1rem" }}>
//             <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>
//               Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required={isSignUp}
//               style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
//             />
//           </div>
//         )}

//         {/* Email */}
//         <div style={{ marginBottom: "1rem" }}>
//           <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//         </div>

//         {/* Password */}
//         <div style={{ marginBottom: "1rem" }}>
//           <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//             style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//         </div>

//         {/* Phone Number */}
//         {isSignUp && (
//           <div style={{ marginBottom: "1rem" }}>
//             <label htmlFor="phoneNumber" style={{ display: "block", marginBottom: "0.5rem" }}>
//               Phone Number:
//             </label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               required={isSignUp}
//               style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
//             />
//           </div>
//         )}

//         {/* Error Message */}
//         {error && (
//           <div style={{ marginBottom: "1rem", color: "red", fontSize: "0.9rem" }}>
//             {error}
//           </div>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#007bff",
//             color: "white",
//             padding: "0.75rem 1.5rem",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             width: "100%",
//           }}
//         >
//           {isSignUp ? "Sign Up" : "Login"}
//         </button>

//         {/* Toggle Login/Sign-Up */}
//         <p
//           style={{
//             marginTop: "1rem",
//             textAlign: "center",
//             cursor: "pointer",
//             color: "#007bff",
//           }}
//           onClick={() => setIsSignUp(!isSignUp)}
//         >
//           {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { auth } from "./firebaseConfig"; // Path to your Firebase config file
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, get } from "firebase/database";
import app from "./firebaseConfig";


function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign-Up
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        // Create a new user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const userId = userCredential.user.uid;

        // Save user data to Firebase Database
        const db = getDatabase(app);
        await set(ref(db, `users/${userId}`),{
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
        });
        console.log("User data saved successfully");
      } else {
        // Log in an existing user
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const userId = userCredential.user.uid;

        // Fetch user data from Firebase Database
        const db = getDatabase();
        const userRef = ref(db, `users/${userId}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log("Welcome, " + userData.name);
        } else {
          console.error("User data not found in the database.");
        }
      }

      // Redirect to the ticket booking page
      navigate(`/ticket-booking`, { state: { } });
      // navigate(redirectTo, '/ticket-booking', { state: { route } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>
        {isSignUp ? "Sign Up" : "Login"}
      </h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
        {/* Name */}
        {isSignUp && (
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required={isSignUp}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}

        {/* Email */}
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Phone Number */}
        {isSignUp && (
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="phoneNumber"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required={isSignUp}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div
            style={{
              marginBottom: "1rem",
              color: "red",
              fontSize: "0.9rem",
            }}
          >
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {isSignUp ? "Sign Up" : "Login"}
        </button>

        {/* Toggle Login/Sign-Up */}
        <p
          style={{
            marginTop: "1rem",
            textAlign: "center",
            cursor: "pointer",
            color: "#007bff",
          }}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  );
}

export default Login;



// import React, { useState } from "react";
// import { auth } from "./firebaseConfig"; // Path to your Firebase config file
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { getDatabase, ref, set, get } from "firebase/database";

// function Login() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//   });
//   const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign-Up
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       if (isSignUp) {
//         // Create a new user
//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           formData.email,
//           formData.password
//         );
//         const userId = userCredential.user.uid;

//         // Save user data to Firebase Database
//         const db = getDatabase();
//         await set(ref(db, users/${userId}), {
//           name: formData.name,
//           email: formData.email,
//           phoneNumber: formData.phoneNumber,
//         });
//         console.log("User data saved successfully");
//       } else {
//         // Log in an existing user
//         const userCredential = await signInWithEmailAndPassword(
//           auth,
//           formData.email,
//           formData.password
//         );
//         const userId = userCredential.user.uid;

//         // Fetch user data from Firebase Database
//         const db = getDatabase();
//         const userRef = ref(db, users/${userId});
//         const snapshot = await get(userRef);

//         if (snapshot.exists()) {
//           const userData = snapshot.val();
//           console.log("Welcome, " + userData.name);

//           // Redirect to the ticket booking page with user data
//           navigate("/ticket-booking", { state: { userData } });
//         } else {
//           console.error("User data not found in the database.");
//         }
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
//       <h1 style={{ textAlign: "center", color: "#007bff" }}>
//         {isSignUp ? "Sign Up" : "Login"}
//       </h1>
//       <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
//         {/* Name */}
//         {isSignUp && (
//           <div style={{ marginBottom: "1rem" }}>
//             <label
//               htmlFor="name"
//               style={{ display: "block", marginBottom: "0.5rem" }}
//             >
//               Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required={isSignUp}
//               style={{
//                 width: "100%",
//                 padding: "0.5rem",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//               }}
//             />
//           </div>
//         )}

//         {/* Email */}
//         <div style={{ marginBottom: "1rem" }}>
//           <label
//             htmlFor="email"
//             style={{ display: "block", marginBottom: "0.5rem" }}
//           >
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             style={{
//               width: "100%",
//               padding: "0.5rem",
//               borderRadius: "4px",
//               border: "1px solid #ccc",
//             }}
//           />
//         </div>

//         {/* Password */}
//         <div style={{ marginBottom: "1rem" }}>
//           <label
//             htmlFor="password"
//             style={{ display: "block", marginBottom: "0.5rem" }}
//           >
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//             style={{
//               width: "100%",
//               padding: "0.5rem",
//               borderRadius: "4px",
//               border: "1px solid #ccc",
//             }}
//           />
//         </div>

//         {/* Phone Number */}
//         {isSignUp && (
//           <div style={{ marginBottom: "1rem" }}>
//             <label
//               htmlFor="phoneNumber"
//               style={{ display: "block", marginBottom: "0.5rem" }}
//             >
//               Phone Number:
//             </label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               required={isSignUp}
//               style={{
//                 width: "100%",
//                 padding: "0.5rem",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//               }}
//             />
//           </div>
//         )}

//         {/* Error Message */}
//         {error && (
//           <div
//             style={{
//               marginBottom: "1rem",
//               color: "red",
//               fontSize: "0.9rem",
//             }}
//           >
//             {error}
//           </div>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#007bff",
//             color: "white",
//             padding: "0.75rem 1.5rem",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             width: "100%",
//           }}
//         >
//           {isSignUp ? "Sign Up" : "Login"}
//         </button>

//         {/* Toggle Login/Sign-Up */}
//         <p
//           style={{
//             marginTop: "1rem",
//             textAlign: "center",
//             cursor: "pointer",
//             color: "#007bff",
//           }}
//           onClick={() => setIsSignUp(!isSignUp)}
//         >
//           {isSignUp
//             ? "Already have an account? Login"
//             : "Don't have an account? Sign Up"}
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;