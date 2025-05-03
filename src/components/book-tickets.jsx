import React from "react";

import { useLocation } from "react-router-dom";

function BookTickets() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const routeId = queryParams.get("id");

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Book Tickets</h1>
      <p>Booking ticket for route ID: {routeId}</p>
      
    </div>
  );
}

export default BookTickets;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// function BookTickets() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const routeId = queryParams.get("id");

//   // Simulated data from localStorage or API (replace with actual API calls if needed)
//   const routes = JSON.parse(localStorage.getItem("routes")) || [];
//   const route = routes.find((r) => r.id === routeId) || {};

//   const [formData, setFormData] = useState({
//     from: route.startPoint || "",
//     to: route.endPoint || "",
//     fare: "₹50", // Example fare; replace with dynamic data if available
//     time: route.timings || "",
//     duration: "45 mins", // Example duration; replace with dynamic data if available
//     numberOfPassengers: 1,
//     name: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // alert(Ticket booked successfully!\nDetails:\n${JSON.stringify(formData, null, 2)});
//     // Optionally clear the form or navigate away
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Book Ticket</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.field}>
//           <label htmlFor="from" style={styles.label}>From:</label>
//           <input
//             type="text"
//             id="from"
//             name="from"
//             value={formData.from}
//             onChange={handleInputChange}
//             style={styles.input}
//             readOnly
//           />
//         </div>
//         <div style={styles.field}>
//           <label htmlFor="to" style={styles.label}>To:</label>
//           <input
//             type="text"
//             id="to"
//             name="to"
//             value={formData.to}
//             onChange={handleInputChange}
//             style={styles.input}
//             readOnly
//           />
//         </div>
//         <div style={styles.field}>
//           <label htmlFor="fare" style={styles.label}>Fare:</label>
//           <input
//             type="text"
//             id="fare"
//             name="fare"
//             value={formData.fare}
//             onChange={handleInputChange}
//             style={styles.input}
//             readOnly
//           />
//         </div>
//         <div style={styles.field}>
//           <label htmlFor="time" style={styles.label}>Time:</label>
//           <input
//             type="text"
//             id="time"
//             name="time"
//             value={formData.time}
//             onChange={handleInputChange}
//             style={styles.input}
//             readOnly
//           />
//         </div>
//         <div style={styles.field}>
//           <label htmlFor="duration" style={styles.label}>Duration:</label>
//           <input
//             type="text"
//             id="duration"
//             name="duration"
//             value={formData.duration}
//             onChange={handleInputChange}
//             style={styles.input}
//             readOnly
//           />
//         </div>
//         <div style={styles.field}>
//           <label htmlFor="numberOfPassengers" style={styles.label}>Number of Passengers:</label>
//           <input
//             type="number"
//             id="numberOfPassengers"
//             name="numberOfPassengers"
//             value={formData.numberOfPassengers}
//             onChange={handleInputChange}
//             style={styles.input}
//             min="1"
//           />
//         </div>
//         <div style={styles.field}>
//           <label htmlFor="name" style={styles.label}>Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <button type="submit" style={styles.button}>Book Ticket</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "2rem",
//     maxWidth: "600px",
//     margin: "0 auto",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "8px",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//   },
//   header: {
//     textAlign: "center",
//     color: "#007bff",
//     marginBottom: "1.5rem",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "1rem",
//   },
//   field: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   label: {
//     marginBottom: "0.5rem",
//     color: "#333",
//   },
//   input: {
//     padding: "0.5rem",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//   },
//   button: {
//     padding: "0.75rem",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
// };

// export default BookTickets;