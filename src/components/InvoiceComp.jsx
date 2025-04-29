// import React, {useState} from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import '../css/Invoice.css'; // Import the CSS file for styling

// const Invoice = () => {
//   const generateInvoice = () => {
//     const input = document.getElementById('invoice');
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 0, 0);
//       pdf.save('invoice.pdf');
//     });
//   };

//   const [formData, setFormData] = useState({
//     date: "",
//     client_name: "",
//     company_name: "",
//     client_address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };


//   return (
//     <>
//     <div className="invoicePage">
//       <div className="invoice-heading">
//         <h1>Invoice Info</h1>
//       </div>
//     <div className="inputsAndInvoice">
//       <form className="invoice-form" onSubmit={{}}>
//         <div className="form-group">
//           <label htmlFor="name">Date:</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               placeholder="Date Today"
//               style={{ color: "black"}}
//               required
//         />
//         </div>
//         <div className="form-group">
//           <label htmlFor="name">Bill To:</label>
//             <input
//               type="text"
//               id="client_name"
//               name="client_name"
//               value={formData.client_name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               style={{ color: "black"}}
//               required
//         />
//         </div>
//         <div className="form-group">
//           <label htmlFor="name">Company Name:</label>
//             <input
//               type="text"
//               id="company_name"
//               name="company_name"
//               value={formData.company_name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               style={{ color: "black"}}
//               required
//         />
//         </div>
//         <div className="form-group">
//           <label htmlFor="name">Address:</label>
//             <input
//               type="text"
//               id="client_address"
//               name="client_address"
//               value={formData.client_address}
//               onChange={handleChange}
//               placeholder="Your Name"
//               style={{ color: "black"}}
//               required
//         />
//         </div>
//       </form>
  
//     <div className="invoiceDoc">
//       <div id="invoice" className="invoice">
//         <div className="invoiceHeading">
//           <div className="">
//             <h1>INVOICE</h1>
//           </div>
//           <div className="companyInfo">
//             <h4>Jay's Woodworks</h4>
//             <p>49 14th Avenue</p>
//             <p>Pelican Park, Cape Town</p>
//             <p>7941</p>
//             <p>South Africa</p>
//             <p>+27 69 315 5864</p>
//           </div>
//         </div>
//         <p>Date: {formData.date}</p>
//         <p>Invoice Number: 001</p>
//         <p>Bill To: {formData.client_name}</p>
//         <p>Name: {}</p>
//         <p>Address: 123 Main St, City, Country</p>
//         <table>
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Quantity</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Example Product</td>
//               <td>1</td>
//               <td>$100.00</td>
//             </tr>
//             <tr>
//               <td>Another Item</td>
//               <td>2</td>
//               <td>$50.00</td>
//             </tr>
//           </tbody>
//         </table>
//         <p>Total: $200.00</p>
//       </div>
//       <button onClick={generateInvoice}>Download Invoice</button>
//     </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Invoice;