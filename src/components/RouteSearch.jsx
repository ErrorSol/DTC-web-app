// import React, { useState } from "react";
// import "./RouteSearch.css"; // Optional, for styling

const routes = [
  // { "id": 1, "from": "Connaught Place", "to": "Dwarka", "stops": ["Janpath", "Moti Bagh", "Palam"], "time": "30 mins" },
  // { "id": 2, "from": "Saket", "to": "Gurgaon", "stops": ["Malviya Nagar", "Chhatarpur", "Sikanderpur"], "time": "40 mins" },
  // { "id": 3, "from": "New Delhi", "to": "Noida", "stops": ["Akshardham", "Mayur Vihar", "Sector 15"], "time": "50 mins" },
  // { "id": 4, "from": "Lajpat Nagar", "to": "Karol Bagh", "stops": ["Kailash Colony", "Rajendra Place"], "time": "25 mins" },
  // { "id": 5, "from": "Rohini", "to": "Janakpuri", "stops": ["Pitampura", "Paschim Vihar", "Tilak Nagar"], "time": "45 mins" },
  // { "id": 6, "from": "Chandni Chowk", "to": "Faridabad", "stops": ["Kashmere Gate", "Sarita Vihar", "Badarpur"], "time": "1 hour" },
  // { "id": 7, "from": "Vasant Vihar", "to": "Dwarka", "stops": ["Dhaula Kuan", "Jor Bagh", "Vikramshila"], "time": "35 mins" },
  // { "id": 8, "from": "Karol Bagh", "to": "Saket", "stops": ["Ajmal Khan Road", "Moti Nagar", "Chattarpur"], "time": "40 mins" },
  // { "id": 9, "from": "Akshardham", "to": "Noida Sector 15", "stops": ["Mayur Vihar", "Vivek Vihar", "Nirman Vihar"], "time": "35 mins" },
  // { "id": 10, "from": "Gurgaon", "to": "Sohna", "stops": ["MG Road", "Sikanderpur", "Sector 57"], "time": "50 mins" },
  // { "id": 11, "from": "Karol Bagh", "to": "Dwarka", "stops": ["Ajmal Khan Road", "Rajendra Place", "Indraprastha"], "time": "45 mins" },
  // { "id": 12, "from": "Rohini", "to": "Saket", "stops": ["Pritampura", "Shalimar Bagh", "Sultanpur"], "time": "55 mins" },
  // { "id": 13, "from": "Dwarka", "to": "Saket", "stops": ["Sector 10", "Dwarka Mor", "Gandhi Nagar"], "time": "45 mins" },
  // { "id": 14, "from": "Mayur Vihar", "to": "Noida", "stops": ["Akshardham", "Preet Vihar", "Sector 15"], "time": "40 mins" },
  // { "id": 15, "from": "Gurgaon", "to": "Faridabad", "stops": ["MG Road", "Sikanderpur", "Badarpur"], "time": "55 mins" },
  // { "id": 16, "from": "Lajpat Nagar", "to": "Dwarka", "stops": ["Kailash Colony", "Nehru Place", "Vikramshila"], "time": "50 mins" },
  // { "id": 17, "from": "Rajouri Garden", "to": "Karol Bagh", "stops": ["Ramesh Nagar", "Moti Nagar", "Shadipur"], "time": "35 mins" },
  // { "id": 18, "from": "Pitampura", "to": "Saket", "stops": ["Shalimar Bagh", "Rajouri Garden", "Shivaji Stadium"], "time": "50 mins" },
  // { "id": 19, "from": "Saket", "to": "Karol Bagh", "stops": ["Chhatarpur", "Vasant Vihar", "Shankar Market"], "time": "45 mins" },
  // { "id": 20, "from": "Faridabad", "to": "Connaught Place", "stops": ["Badarpur", "Sarai Kale Khan", "Jama Masjid"], "time": "1 hour" },
  // { "id": 21, "from": "Akshardham", "to": "Dwarka", "stops": ["Mayur Vihar", "Dhaula Kuan", "Janpath"], "time": "50 mins" },
  // { "id": 22, "from": "Noida", "to": "Lajpat Nagar", "stops": ["Sector 15", "Mayur Vihar", "Dhaula Kuan"], "time": "50 mins" },
  // { "id": 23, "from": "Chattarpur", "to": "Gurgaon", "stops": ["Sikanderpur", "MG Road", "Rajiv Chowk"], "time": "45 mins" },
  // { "id": 24, "from": "Dwarka", "to": "Rohini", "stops": ["Dwarka Mor", "Gandhi Nagar", "Pitampura"], "time": "55 mins" },
  // { "id": 25, "from": "Vasant Kunj", "to": "Karol Bagh", "stops": ["Gurgaon Road", "Shankar Market", "Vikramshila"], "time": "45 mins" },
  // { "id": 26, "from": "Rajendra Place", "to": "Saket", "stops": ["Karol Bagh", "Moti Nagar", "Chattarpur"], "time": "40 mins" },
  // { "id": 27, "from": "Sohna", "to": "Noida", "stops": ["Gurgaon", "MG Road", "Sikanderpur"], "time": "50 mins" },
  // { "id": 28, "from": "Chandni Chowk", "to": "Rohini", "stops": ["Kashmere Gate", "Shalimar Bagh", "Shivaji Park"], "time": "50 mins" },
  // { "id": 29, "from": "Rajouri Garden", "to": "Noida", "stops": ["Shadipur", "Moti Nagar", "Sector 15"], "time": "55 mins" },
  // { "id": 30, "from": "Pitampura", "to": "Faridabad", "stops": ["Shalimar Bagh", "Badarpur", "Sarai Kale Khan"], "time": "1 hour" },
  // { "id": 31, "from": "Vikramshila", "to": "Saket", "stops": ["Dhaula Kuan", "Chhatarpur", "Vasant Vihar"], "time": "40 mins" },
  // { "id": 32, "from": "Saket", "to": "Dwarka", "stops": ["Chattarpur", "Vasant Kunj", "Dwarka Mor"], "time": "45 mins" },
  // { "id": 33, "from": "Noida", "to": "Vasant Vihar", "stops": ["Sector 15", "Akshardham", "Dhaula Kuan"], "time": "55 mins" },
  // { "id": 34, "from": "Lajpat Nagar", "to": "Sohna", "stops": ["Kailash Colony", "Rajiv Chowk", "Sikanderpur"], "time": "50 mins" },
  // { "id": 35, "from": "Connaught Place", "to": "Karol Bagh", "stops": ["Jama Masjid", "Rajendra Place", "Ajmal Khan Road"], "time": "30 mins" },
  // { "id": 36, "from": "Chandni Chowk", "to": "Pitampura", "stops": ["Sarai Kale Khan", "Shalimar Bagh", "Rajouri Garden"], "time": "45 mins" },
  // { "id": 37, "from": "Saket", "to": "Gurgaon", "stops": ["Malviya Nagar", "Sikanderpur", "MG Road"], "time": "40 mins" },
  // { "id": 38, "from": "Akshardham", "to": "Faridabad", "stops": ["Mayur Vihar", "Sarita Vihar", "Badarpur"],"time":"45 mins" }
    { "id": 1, "from": "Connaught Place", "to": "Dwarka", "stops": ["Janpath", "Moti Bagh", "Palam"], "fare": 35, "time": "30 mins" },
    { "id": 2, "from": "Saket", "to": "Gurgaon", "stops": ["Malviya Nagar", "Chhatarpur", "Sikanderpur"], "fare": 65, "time": "40 mins" },
    { "id": 3, "from": "New Delhi", "to": "Noida", "stops": ["Akshardham", "Mayur Vihar", "Sector 15"], "fare": 50, "time": "50 mins" },
    { "id": 4, "from": "Lajpat Nagar", "to": "Karol Bagh", "stops": ["Kailash Colony", "Rajendra Place"], "fare": 30, "time": "25 mins" },
    { "id": 5, "from": "Rohini", "to": "Janakpuri", "stops": ["Pitampura", "Paschim Vihar", "Tilak Nagar"], "fare": 70, "time": "45 mins" },
    { "id": 6, "from": "Chandni Chowk", "to": "Faridabad", "stops": ["Kashmere Gate", "Sarita Vihar", "Badarpur"], "fare": 90, "time": "1 hour" },
    { "id": 7, "from": "Vasant Vihar", "to": "Dwarka", "stops": ["Dhaula Kuan", "Jor Bagh", "Vikramshila"], "fare": 45, "time": "35 mins" },
    { "id": 8, "from": "Karol Bagh", "to": "Saket", "stops": ["Ajmal Khan Road", "Moti Nagar", "Chattarpur"], "fare": 60, "time": "40 mins" },
    { "id": 9, "from": "Akshardham", "to": "Noida Sector 15", "stops": ["Mayur Vihar", "Vivek Vihar", "Nirman Vihar"], "fare": 55, "time": "35 mins" },
    { "id": 10, "from": "Gurgaon", "to": "Sohna", "stops": ["MG Road", "Sikanderpur", "Sector 57"], "fare": 85, "time": "50 mins" },
    { "id": 11, "from": "Karol Bagh", "to": "Dwarka", "stops": ["Ajmal Khan Road", "Rajendra Place", "Indraprastha"], "fare": 70, "time": "45 mins" },
    { "id": 12, "from": "Rohini", "to": "Saket", "stops": ["Pritampura", "Shalimar Bagh", "Sultanpur"], "fare": 50, "time": "55 mins" },
    { "id": 13, "from": "Dwarka", "to": "Saket", "stops": ["Sector 10", "Dwarka Mor", "Gandhi Nagar"], "fare": 60, "time": "45 mins" },
    { "id": 14, "from": "Mayur Vihar", "to": "Noida", "stops": ["Akshardham", "Preet Vihar", "Sector 15"], "fare": 40, "time": "40 mins" },
    { "id": 15, "from": "Gurgaon", "to": "Faridabad", "stops": ["MG Road", "Sikanderpur", "Badarpur"], "fare": 85, "time": "55 mins" },
    { "id": 16, "from": "Lajpat Nagar", "to": "Dwarka", "stops": ["Kailash Colony", "Nehru Place", "Vikramshila"], "fare": 75, "time": "50 mins" },
    { "id": 17, "from": "Rajouri Garden", "to": "Karol Bagh", "stops": ["Ramesh Nagar", "Moti Nagar", "Shadipur"], "fare": 35, "time": "35 mins" },
    { "id": 18, "from": "Pitampura", "to": "Saket", "stops": ["Shalimar Bagh", "Rajouri Garden", "Shivaji Stadium"], "fare": 70, "time": "50 mins" },
    { "id": 19, "from": "Saket", "to": "Karol Bagh", "stops": ["Chhatarpur", "Vasant Vihar", "Shankar Market"], "fare": 55, "time": "45 mins" },
    { "id": 20, "from": "Faridabad", "to": "Connaught Place", "stops": ["Badarpur", "Sarai Kale Khan", "Jama Masjid"], "fare": 90, "time": "1 hour" },
    { "id": 21, "from": "Akshardham", "to": "Dwarka", "stops": ["Mayur Vihar", "Dhaula Kuan", "Janpath"], "fare": 65, "time": "50 mins" },
    { "id": 22, "from": "Noida", "to": "Lajpat Nagar", "stops": ["Sector 15", "Mayur Vihar", "Dhaula Kuan"], "fare": 80, "time": "50 mins" },
    { "id": 23, "from": "Chattarpur", "to": "Gurgaon", "stops": ["Sikanderpur", "MG Road", "Rajiv Chowk"], "fare": 60, "time": "45 mins" },
    { "id": 24, "from": "Dwarka", "to": "Rohini", "stops": ["Dwarka Mor", "Gandhi Nagar", "Pitampura"], "fare": 75, "time": "55 mins" },
    { "id": 25, "from": "Vasant Kunj", "to": "Karol Bagh", "stops": ["Gurgaon Road", "Shankar Market", "Vikramshila"], "fare": 60, "time": "45 mins" },
    { "id": 26, "from": "Rajendra Place", "to": "Saket", "stops": ["Karol Bagh", "Moti Nagar", "Chattarpur"], "fare": 55, "time": "40 mins" },
    { "id": 27, "from": "Sohna", "to": "Noida", "stops": ["Gurgaon", "MG Road", "Sikanderpur"], "fare": 85, "time": "50 mins" },
    { "id": 28, "from": "Chandni Chowk", "to": "Rohini", "stops": ["Kashmere Gate", "Shalimar Bagh", "Shivaji Park"], "fare": 70, "time": "50 mins" },
    { "id": 29, "from": "Rajouri Garden", "to": "Noida", "stops": ["Shadipur", "Moti Nagar", "Sector 15"], "fare": 80, "time": "55 mins" },
    { "id": 30, "from": "Pitampura", "to": "Faridabad", "stops": ["Shalimar Bagh", "Badarpur", "Sarai Kale Khan"], "fare": 90, "time": "1 hour" },
    { "id": 31, "from": "Vikramshila", "to": "Saket", "stops": ["Dhaula Kuan", "Chhatarpur", "Vasant Vihar"], "fare": 55, "time": "40 mins" },
    { "id": 32, "from": "Saket", "to": "Dwarka", "stops": ["Chattarpur", "Vasant Kunj", "Dwarka Mor"], "fare": 65, "time": "45 mins" },
    { "id": 33, "from": "Noida", "to": "Vasant Vihar", "stops": ["Sector 15", "Akshardham", "Dhaula Kuan"], "fare": 80, "time": "55 mins" },
    { "id": 34, "from": "Lajpat Nagar", "to": "Sohna", "stops": ["Kailash Colony", "Rajiv Chowk", "Sikanderpur"], "fare": 75, "time": "50 mins" },
    { "id": 35, "from": "Connaught Place", "to": "Karol Bagh", "stops": ["Jama Masjid", "Rajendra Place", "Ajmal Khan Road"], "fare": 30, "time": "30 mins" },
    { "id": 36, "from": "Chandni Chowk", "to": "Pitampura", "stops": ["Sarai Kale Khan", "Shalimar Bagh", "Rajouri Garden"], "fare": 60, "time": "45 mins" },
    { "id": 37, "from": "Saket", "to": "Gurgaon", "stops": ["Malviya Nagar", "Sikanderpur", "MG Road"], "fare": 65, "time": "40 mins" },
    { "id": 38, "from": "Akshardham", "to": "Faridabad", "stops": ["Mayur Vihar", "Sarita Vihar", "Badarpur"], "fare": 70, "time": "45 mins" }
  
];

// // function RouteSearch() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [filteredRoutes, setFilteredRoutes] = useState(routes);
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const itemsPerPage =5;

// //   const handleSearch = (e) => {
// //     const term = e.target.value.toLowerCase();
// //     setSearchTerm(term);
// //     const filtered = routes.filter(
// //       (route) =>
// //         route.from.toLowerCase().includes(term) ||
// //         route.to.toLowerCase().includes(term)
// //     );
// //     setFilteredRoutes(filtered);
// //     setCurrentPage(0); // Reset to the first page when searching
// //   };

// //   const handleNextPage = () => {
// //     if ((currentPage + 1) * itemsPerPage < filteredRoutes.length) {
// //       setCurrentPage(currentPage + 1);
// //     }
// //   };

// //   const handlePreviousPage = () => {
// //     if (currentPage > 0) {
// //       setCurrentPage(currentPage - 1);
// //     }
// //   };

// //   const displayedRoutes = filteredRoutes.slice(
// //     currentPage * itemsPerPage,
// //     currentPage * itemsPerPage + itemsPerPage
// //   );

// //   return (
// //     <div className="route-search-container">
// //       <h2>Find Your Route</h2>
// //       <input
// //         type="text"
// //         placeholder="Search routes..."
// //         value={searchTerm}
// //         onChange={handleSearch}
// //         className="search-input"
// //       />
// //       <div className="route-results">
// //         {displayedRoutes.length > 0 ? (
// //           displayedRoutes.map((route) => (
// //             <div key={route.id} className="route-item">
// //               From: {route.from} → To: {route.to}
// //             </div>
// //           ))
// //         ) : (
// //           <div className="no-results">No routes found</div>
// //         )}
// //       </div>
// //       <div className="pagination">
// //         {/* <button onClick={handlePreviousPage} disabled={currentPage === 0}>
// //           Previous
// //         </button>
// //         <button
// //           onClick={handleNextPage}
// //           disabled={(currentPage + 1) * itemsPerPage >= filteredRoutes.length}
// //         >
// //           Next
// //         </button> */}
// //       </div>
// //     </div>
// //   );
// // }
// function RouteSearch({ onAddRoute }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredRoutes, setFilteredRoutes] = useState(routes);
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 5;

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     const filtered = routes.filter(
//       (route) =>
//         route.from.toLowerCase().includes(term) ||
//         route.to.toLowerCase().includes(term)
//     );
//     setFilteredRoutes(filtered);
//     setCurrentPage(0); // Reset to the first page when searching
//   };

//   const displayedRoutes = filteredRoutes.slice(
//     currentPage * itemsPerPage,
//     currentPage * itemsPerPage + itemsPerPage
//   );

//   return (
//     <div className="route-search-container">
//       <h2>Find Your Route</h2>
//       <input
//         type="text"
//         placeholder="Search routes..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="search-input"
//       />
//       <div className="route-results">
//         {displayedRoutes.length > 0 ? (
//           displayedRoutes.map((route) => (
//             <div key={route.id} className="route-item" onClick={() => onAddRoute(route)}>
//               From: {route.from} → To: {route.to}
//               {/* <button onClick={() => onAddRoute(route)}>Add</button> */}
//             </div>
//           ))
//         ) : (
//           <div className="no-results">No routes found</div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./RouteSearch.css";


function RouteSearch({ onAddRoute }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filtered = routes.filter(
        (route) =>
          route.from.toLowerCase().includes(term) ||
          route.to.toLowerCase().includes(term)
      );
      setFilteredRoutes(filtered);
      setShowList(true); // Show list when typing
    } else {
      setShowList(false); // Hide list when input is cleared
    }
  };

  return (
    <div className="route-search-container">
      <h2>Find Your Route</h2>
      <input
        type="text"
        placeholder="Search routes..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {showList && (
        <div className="route-results">
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map((route) => (
              <div key={route.id} className="route-item" onClick={() => onAddRoute(route)}>
                From: {route.from} → To: {route.to}
              </div>
            ))
          ) : (
            <div className="no-results">No routes found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default RouteSearch;




