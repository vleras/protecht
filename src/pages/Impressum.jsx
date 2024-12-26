// import React, { useState } from "react";
// import { Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import ImpressumPdf from "../images/Impressum.pdf"; // Correctly imported PDF

// const Impressum = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to toggle modal visibility
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div>
//       <h1>Impressum</h1>
//       {/* Thumbnail or link to open modal */}
//       <div
//         style={{
//           cursor: "pointer",
//           display: "inline-block",
//           margin: "20px",
//           border: "1px solid #ccc",
//           padding: "10px",
//           borderRadius: "8px",
//           backgroundColor: "#f9f9f9",
//         }}
//         onClick={toggleModal}
//       >
//         <img
//           src="https://via.placeholder.com/150" // Replace with your thumbnail if available
//           alt="Impressum Thumbnail"
//           style={{ display: "block", width: "100%", borderRadius: "8px" }}
//         />
//         <p style={{ textAlign: "center" }}>View Impressum</p>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               width: "80%",
//               height: "80%",
//               backgroundColor: "#fff",
//               borderRadius: "10px",
//               overflow: "hidden",
//               position: "relative",
//             }}
//           >
//             <button
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "10px",
//                 backgroundColor: "#ff5c5c",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "5px",
//                 padding: "5px 10px",
//                 cursor: "pointer",
//                 zIndex: 1001,
//               }}
//               onClick={toggleModal}
//             >
//               Close
//             </button>
//             <Viewer fileUrl={ImpressumPdf} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Impressum;
