// import { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
// const [customer, setCustomer] = useState([])
// const [transaction, setTransactions] = useState([])
// const [FilterByName, setFilterByName] = useState('')
// const [FilterByAmount, setFilterByAmount] = useState('')

//   async function getcustomers(){
//     try {
//         const {data} = await axios.get(`http://localhost:9000/customers?name=${FilterByName}`)
//         if(data){
//           setCustomer(data)
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

//   async function getTransactions(){
//     try {
//         const {data} = await axios.get(`http://localhost:9000/transactions?amount=${FilterByAmount}`)
//         if(data){
//           setTransactions(data)
//           if (FilterByAmount) {
//             const customerIds = data.map(transaction => transaction.customer_id);
//             const uniqueCustomerIds = [...new Set(customerIds)];
//             const filteredCustomers = await Promise.all(uniqueCustomerIds.map(id => axios.get(`http://localhost:9000/customers?id=${id}`)));
//             setCustomer(filteredCustomers.map(response => response.data).flat());
//           }
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// useEffect(() => {
//   getcustomers(FilterByName);
//   getTransactions(FilterByAmount)
// }, [FilterByName, FilterByAmount]);


// const searchName = (e) => {
// setFilterByName(e.target.value)
// setFilterByAmount('')
// }
// const searchAmount = (e) => {
//   setFilterByAmount(e.target.value)
//   setFilterByName('')
// }




//   return (
//     <section className="bg-light p-10">
//      <h1 className='text-primary text-center font-bold'>Customer Transactions APP</h1>
//      <h3 className='text-center font-extrabold m-auto pt-3'>Developed by Nourseen Qandil</h3>
//       <div className=' flex justify-between mt-10'>
//         <div>
//         <input type="text" name="Name" value={FilterByName} className="form-control w-100" placeholder="Filter By Name" onChange={searchName}/>
//         </div>
//         <div>
//         <input type="number" name="Name" value={FilterByAmount} className="form-control w-100" placeholder="Filter By Amount" onChange={searchAmount}/>
//         </div>
//       </div>
//   <div className='table-responsive'>
//     <table className="table table-striped mt-3">
//   <thead className='text-2xl text-center'>
//     <tr>
//       <th>Customer ID</th>
//       <th>Customer Name</th>
//       <th>Transactions</th>
//       <th>Select</th>
//     </tr>
//   </thead>
//   <tbody className=' text-center'>
  
  
//   {customer.length > 0? customer.map((cust) => {
//             const customerTransactions = transaction.filter(transaction => transaction.customer_id == cust.id);

//             return (
//               <tr key={cust.id} className='border-b'>
//                 <td className='text-white font-medium text-lg'>{cust.id}</td>
//                 <td className='text-white font-medium text-lg'>{cust.name}</td>
//                 <td>


//                   {customerTransactions.length > 0 ? (
//                     customerTransactions.map((transaction) => (
//                       <article key={transaction.id} className='bg-white rounded-2xl py-2 px-5 my-5 w-fit m-auto'>
//                         <ul className='text-orange-600 font-medium text-lg text-left'>
//                           <li>date: {transaction.date}</li>
//                           <li>amount: {transaction.amount}</li>
//                         </ul>
//                       </article>
//                     ))
//                   ) : (
//                     <p className='text-white font-medium text-lg'>No transactions found</p>
//                   )}
//                 </td>



//                 <td>
//                   <input type="radio" name='select' className="rounded-full w-4 h-4 cursor-pointer" />
//                 </td>
//               </tr>
//             );
//           }):
//          <tr>
//           <td colSpan={4}>
//             <p className=' text-red-700 py-5 font-bold text-3xl'>No Data Matching.. Try Again!</p>
//           </td>
//          </tr>
          
//           }


//   </tbody>
//   </table>
//   </div>
    
//     </section>
//   );
// }

// export default App;

/// بتاعى اللى اشتغل 
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   const [customer, setCustomer] = useState([]);
//   const [transaction, setTransactions] = useState([]);
//   const [FilterByName, setFilterByName] = useState('');
//   const [FilterByAmount, setFilterByAmount] = useState('');

//   async function fetchData() {
//     try {
//       const { data } = await axios.get('https://noorseenqandil.github.io/Customer-Transactions-App-API/Data.json');
//       setCustomer(data.customers);
//       setTransactions(data.transactions);
//     } catch (err) {
//       console.error('Error fetching data:', err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function getcustomers() {
//     try {
//       const { data } = await axios.get(`http://localhost:9000/customers?name=${FilterByName}`);
//       if (data) {
//         setCustomer(data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function getTransactions() {
//     try {
//       const { data } = await axios.get(`http://localhost:9000/transactions?amount=${FilterByAmount}`);
//       if (data) {
//         setTransactions(data);
//         if (FilterByAmount) {
//           const customerIds = data.map((transaction) => transaction.customer_id);
//           const uniqueCustomerIds = [...new Set(customerIds)];
//           const filteredCustomers = await Promise.all(
//             uniqueCustomerIds.map((id) => axios.get(`http://localhost:9000/customers?id=${id}`))
//           );
//           setCustomer(filteredCustomers.map((response) => response.data).flat());
//         }
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   const searchName = (e) => {
//     setFilterByName(e.target.value);
//     setFilterByAmount('');
//   };

//   const searchAmount = (e) => {
//     setFilterByAmount(e.target.value);
//     setFilterByName('');
//   };

//   return (
//     <section className="bg-light p-10">
//       <h1 className="text-primary text-center font-bold">Customer Transactions APP</h1>
//       <h3 className="text-center font-extrabold m-auto pt-3">Developed by Nourseen Qandil</h3>
//       <div className="flex justify-between mt-10">
//         <div>
//           <input
//             type="text"
//             name="Name"
//             value={FilterByName}
//             className="form-control w-100"
//             placeholder="Filter By Name"
//             onChange={searchName}
//           />
//         </div>
//         <div>
//           <input
//             type="number"
//             name="Name"
//             value={FilterByAmount}
//             className="form-control w-100"
//             placeholder="Filter By Amount"
//             onChange={searchAmount}
//           />
//         </div>
//       </div>
//       <div className="table-responsive">
//         <table className="table table-striped mt-3">
//           <thead className="text-2xl text-center">
//             <tr>
//               <th>Customer ID</th>
//               <th>Customer Name</th>
//               <th>Transactions</th>
//               <th>Select</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             {customer.length > 0 ? (
//               customer.map((cust) => {
//                 const customerTransactions = transaction.filter((transaction) => transaction.customer_id == cust.id);

//                 return (
//                   <tr key={cust.id} className="border-b">
//                     <td className="text-dark font-medium text-lg mt-5">{cust.id}</td>
//                     <td className="text-dark font-medium text-lg mt-5">{cust.name}</td>
//                     <td>
//                       {customerTransactions.length > 0 ? (
//                         customerTransactions.map((transaction) => (
//                           <article
//                             key={transaction.id}
//                             className="bg-white rounded-2xl py-2 px-5 my-5 w-fit m-auto"
//                           >
//                             <ul className="text-dark font-medium text-lg text-left">
//                               <li>date: {transaction.date}</li>
//                               <li>amount: {transaction.amount}</li>
//                             </ul>
//                           </article>
//                         ))
//                       ) : (
//                         <p className="text-dark font-medium text-lg">No transactions found</p>
//                       )}
//                     </td>
//                     <td>
//                       <input type="radio" name="select" className="mt-5 rounded-full w-4 h-4 cursor-pointer" />
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan={4}>
//                   <p className="text-red-700 py-5 font-bold text-3xl">No Data Matching.. Try Again!</p>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }

// export default App;

// شغال ومش احسن حاجة في الرسم
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios';
// import Chart from 'chart.js/auto';

// function App() {
//   const [customer, setCustomer] = useState([]);
//   const [transaction, setTransactions] = useState([]);
//   const [FilterByName, setFilterByName] = useState('');
//   const [FilterByAmount, setFilterByAmount] = useState('');
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [chartVisible, setChartVisible] = useState(false);

//   async function fetchData() {
//     try {
//       const response = await axios.get('https://noorseenqandil.github.io/Customer-Transactions-App-API/Data.json');
//       if (response.data) {
//         setCustomer(response.data.customers);
//         setTransactions(response.data.transactions);
//       }
//     } catch (err) {
//       console.error('Error fetching data:', err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const searchName = (e) => {
//     setFilterByName(e.target.value);
//     setFilterByAmount('');
//   };

//   const searchAmount = (e) => {
//     setFilterByAmount(e.target.value);
//     setFilterByName('');
//   };

//   const handleSelectCustomer = (cust) => {
//     setSelectedCustomer(cust);
//     setChartVisible(true);
//     drawChart(cust);
//   };

//   const drawChart = (selectedCust) => {
//     if (!selectedCust) {
//       setChartVisible(false);
//       return;
//     }

//     const customerTransactions = transaction.filter(transaction => transaction.customer_id === selectedCust.id);
//     const transactionDates = customerTransactions.map(transaction => transaction.date);
//     const transactionAmounts = customerTransactions.map(transaction => transaction.amount);

//     const ctx = document.getElementById('myChart');
//     new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: transactionDates,
//         datasets: [{
//           label: `Amount Analysis for ${selectedCust.name}`,
//           data: transactionAmounts,
//           borderColor: 'rgba(75, 192, 192, 1)',
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   };

//   return (
//     <section className="bg-light p-10">
//       <h1 className='text-primary text-center font-bold'>Customer Transactions APP</h1>
//       <h3 className='text-center font-extrabold m-auto pt-3'>Developed by Nourseen Qandil</h3>
//       <div className=' flex justify-between mt-10'>
//         <div>
//           <input type="text" name="Name" value={FilterByName} className="form-control w-100" placeholder="Filter By Name" onChange={searchName}/>
//         </div>
//         <div>
//           <input type="number" name="Name" value={FilterByAmount} className="form-control w-100" placeholder="Filter By Amount" onChange={searchAmount}/>
//         </div>
//       </div>
//       <div className='table-responsive'>
//         <table className="table table-striped mt-3">
//           <thead className='text-2xl text-center'>
//             <tr>
//               <th>Customer ID</th>
//               <th>Customer Name</th>
//               <th>Transactions</th>
//               <th>Select</th>
//             </tr>
//           </thead>
//           <tbody className=' text-center'>
//             {customer.length > 0 ? customer.map((cust) => {
//               const customerTransactions = transaction.filter(transaction => transaction.customer_id === cust.id);
//               return (
//                 <tr key={cust.id} className='border-b'>
//                   <td className='text-dark font-medium text-lg'>{cust.id}</td>
//                   <td className='text-dark font-medium text-lg'>{cust.name}</td>
//                   <td>
//                     {customerTransactions.length > 0 ? (
//                       customerTransactions.map((transaction) => (
//                         <article key={transaction.id} className='bg-white rounded-2xl py-2 px-5 my-5 w-fit m-auto'>
//                           <ul className='text-danger font-medium text-lg text-left'>
//                             <li>date: {transaction.date}</li>
//                             <li>amount: {transaction.amount}</li>
//                           </ul>
//                         </article>
//                       ))
//                     ) : (
//                       <p className='text-dark font-medium text-lg'>No transactions found</p>
//                     )}
//                   </td>
//                   <td>
//                     <input type="radio" name='select' className="rounded-full w-4 h-4 cursor-pointer" onClick={() => handleSelectCustomer(cust)} />
//                   </td>
//                 </tr>
//               );
//             }) :
//               <tr>
//                 <td colSpan={4}>
//                   <p className=' text-red-700 py-5 font-bold text-3xl'>No Data Matching.. Try Again!</p>
//                 </td>
//               </tr>
//             }
//           </tbody>
//         </table>
//       </div>

//       {chartVisible ? (
//         <div className='mt-10'>
//           <canvas id="myChart" width="800" height="400"></canvas>
//         </div>
//       ) : null}

//     </section>
//   );
// }

// export default App;


// زى الفل تحفةةةةةةةةةةةةةةةةةةةةةةةةةةة
// import React, { useEffect, useState, useRef } from 'react';
// import './App.css';
// import axios from 'axios';
// import Chart from 'chart.js/auto';

// function App() {
//   const [customer, setCustomer] = useState([]);
//   const [transaction, setTransactions] = useState([]);
//   const [FilterByName, setFilterByName] = useState('');
//   const [FilterByAmount, setFilterByAmount] = useState('');
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [chartVisible, setChartVisible] = useState(false);
//   const chartRef = useRef(null); // Ref for chart instance

//   async function fetchData() {
//     try {
//       const response = await axios.get('https://noorseenqandil.github.io/Customer-Transactions-App-API/Data.json');
//       if (response.data) {
//         setCustomer(response.data.customers);
//         setTransactions(response.data.transactions);
//       }
//     } catch (err) {
//       console.error('Error fetching data:', err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const searchName = (e) => {
//     setFilterByName(e.target.value);
//     setFilterByAmount('');
//   };

//   const searchAmount = (e) => {
//     setFilterByAmount(e.target.value);
//     setFilterByName('');
//   };

//   const handleSelectCustomer = (cust) => {
//     setSelectedCustomer(cust);
//     setChartVisible(true);
//     drawChart(cust);
//   };

//   const drawChart = (selectedCust) => {
//     if (!selectedCust) {
//       setChartVisible(false);
//       return;
//     }

//     if (chartRef.current !== null) {
//       chartRef.current.destroy(); // Destroy current chart if exists
//     }

//     const customerTransactions = transaction.filter(transaction => transaction.customer_id === selectedCust.id);
//     const transactionDates = customerTransactions.map(transaction => transaction.date);
//     const transactionAmounts = customerTransactions.map(transaction => transaction.amount);

//     const ctx = document.getElementById('myChart');
//     chartRef.current = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: transactionDates,
//         datasets: [{
//           label: `Amount Analysis for ${selectedCust.name}`,
//           data: transactionAmounts,
//           borderColor: 'rgba(75, 192, 192, 1)',
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   };

//   return (
//     <section className="bg-light p-10">
//       <h1 className='text-primary text-center font-bold'>Customer Transactions APP</h1>
//       <h3 className='text-center font-extrabold m-auto pt-3'>Developed by Nourseen Qandil</h3>
//       <div className=' flex justify-between mt-10'>
//         <div>
//           <input type="text" name="Name" value={FilterByName} className="form-control w-100" placeholder="Filter By Name" onChange={searchName}/>
//         </div>
//         <div>
//           <input type="number" name="Name" value={FilterByAmount} className="form-control w-100" placeholder="Filter By Amount" onChange={searchAmount}/>
//         </div>
//       </div>
//       <div className='table-responsive'>
//         <table className="table table-striped mt-3">
//           <thead className='text-2xl text-center'>
//             <tr>
//               <th>Customer ID</th>
//               <th>Customer Name</th>
//               <th>Transactions</th>
//               <th>Select</th>
//             </tr>
//           </thead>
//           <tbody className=' text-center'>
//             {customer.length > 0 ? customer.map((cust) => {
//               const customerTransactions = transaction.filter(transaction => transaction.customer_id === cust.id);
//               return (
//                 <tr key={cust.id} className='border-b'>
//                   <td className='text-dark font-medium text-lg'>{cust.id}</td>
//                   <td className='text-dark font-medium text-lg'>{cust.name}</td>
//                   <td>
//                     {customerTransactions.length > 0 ? (
//                       customerTransactions.map((transaction) => (
//                         <article key={transaction.id} className='bg-white rounded-2xl py-2 px-5 my-5 w-fit m-auto'>
//                           <ul className='text-danger font-medium text-lg text-left'>
//                             <li>date: {transaction.date}</li>
//                             <li>amount: {transaction.amount}</li>
//                           </ul>
//                         </article>
//                       ))
//                     ) : (
//                       <p className='text-dark font-medium text-lg'>No transactions found</p>
//                     )}
//                   </td>
//                   <td>
//                     <input type="radio" name='select' className="rounded-full w-4 h-4 cursor-pointer" onClick={() => handleSelectCustomer(cust)} />
//                   </td>
//                 </tr>
//               );
//             }) :
//               <tr>
//                 <td colSpan={4}>
//                   <p className=' text-red-700 py-5 font-bold text-3xl'>No Data Matching.. Try Again!</p>
//                 </td>
//               </tr>
//             }
//           </tbody>
//         </table>
//       </div>

//       {chartVisible ? (
//         <div className='mt-10'>
//           <canvas id="myChart" width="800" height="400"></canvas>
//         </div>
//       ) : null}

//     </section>
//   );
// }

// export default App;




// Total Amount حللوو
// import React, { useEffect, useState, useRef } from 'react';
// import './App.css';
// import axios from 'axios';
// import Chart from 'chart.js/auto';

// function App() {
//   const [customer, setCustomer] = useState([]);
//   const [transaction, setTransactions] = useState([]);
//   const [FilterByName, setFilterByName] = useState('');
//   const [FilterByAmount, setFilterByAmount] = useState('');
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [chartVisible, setChartVisible] = useState(false);
//   const chartRef = useRef(null); // Ref for chart instance

//   async function fetchData() {
//     try {
//       const response = await axios.get('https://noorseenqandil.github.io/Customer-Transactions-App-API/Data.json');
//       if (response.data) {
//         setCustomer(response.data.customers);
//         setTransactions(response.data.transactions);
//       }
//     } catch (err) {
//       console.error('Error fetching data:', err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const searchName = (e) => {
//     setFilterByName(e.target.value);
//     setFilterByAmount('');
//   };

//   const searchAmount = (e) => {
//     setFilterByAmount(e.target.value);
//     setFilterByName('');
//   };

//   const handleSelectCustomer = (cust) => {
//     setSelectedCustomer(cust);
//     setChartVisible(true);
//     drawChart(cust);
//   };

//   const drawChart = (selectedCust) => {
//     if (!selectedCust) {
//       setChartVisible(false);
//       return;
//     }

//     if (chartRef.current !== null) {
//       chartRef.current.destroy(); // Destroy current chart if exists
//     }

//     const customerTransactions = transaction.filter(transaction => transaction.customer_id === selectedCust.id);
//     const transactionDates = customerTransactions.map(transaction => transaction.date);
//     const transactionAmounts = customerTransactions.map(transaction => transaction.amount);

//     const ctx = document.getElementById('myChart');
//     chartRef.current = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: transactionDates,
//         datasets: [{
//           label: `Amount Analysis for ${selectedCust.name}`,
//           data: transactionAmounts,
//           borderColor: 'rgba(75, 192, 192, 1)',
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   };

//   return (
//     <section className="bg-light p-10">
//       <h1 className='text-primary text-center font-bold'>Customer Transactions APP</h1>
//       <h3 className='text-center font-extrabold m-auto pt-3'>Developed by Nourseen Qandil</h3>
//       <div className=' flex justify-between mt-10'>
//         <div>
//           <input type="text" name="Name" value={FilterByName} className="form-control w-100" placeholder="Filter By Name" onChange={searchName}/>
//         </div>
//         <div>
//           <input type="number" name="Name" value={FilterByAmount} className="form-control w-100" placeholder="Filter By Amount" onChange={searchAmount}/>
//         </div>
//       </div>
//       <div className='table-responsive'>
//         <table className="table table-striped mt-3">
//           <thead className='text-2xl text-center'>
//             <tr>
//               <th>Customer ID</th>
//               <th>Customer Name</th>
//               <th>Transactions</th>
//               <th>Total Amount</th>
//               <th>Select</th>
//             </tr>
//           </thead>
//           <tbody className=' text-center'>
//             {customer.length > 0 ? customer.map((cust) => {
//               const customerTransactions = transaction.filter(transaction => transaction.customer_id === cust.id);
//               const totalAmount = customerTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
//               return (
//                 <tr key={cust.id} className='border-b'>
//                   <td className='text-dark font-medium text-lg'>{cust.id}</td>
//                   <td className='text-dark font-medium text-lg'>{cust.name}</td>
//                   <td>
//                     {customerTransactions.length > 0 ? (
//                       customerTransactions.map((transaction) => (
//                         <article key={transaction.id} className='bg-white rounded-2xl py-2 px-5 my-5 w-fit m-auto'>
//                           <ul className='text-danger font-medium text-lg text-left'>
//                             <li>date: {transaction.date}</li>
//                             <li>amount: {transaction.amount}</li>
//                           </ul>
//                         </article>
//                       ))
//                     ) : (
//                       <p className='text-dark font-medium text-lg'>No transactions found</p>
//                     )}
//                   </td>
//                   <td className='text-dark font-medium text-lg'>{totalAmount}</td>
//                   <td>
//                     <input type="radio" name='select' className="rounded-full w-4 h-4 cursor-pointer" onClick={() => handleSelectCustomer(cust)} />
//                   </td>
//                 </tr>
//               );
//             }) :
//               <tr>
//                 <td colSpan={5}>
//                   <p className=' text-red-700 py-5 font-bold text-3xl'>No Data Matching.. Try Again!</p>
//                 </td>
//               </tr>
//             }
//           </tbody>
//         </table>
//       </div>

//       {chartVisible ? (
//         <div className='mt-10'>
//           <canvas id="myChart" width="800" height="400"></canvas>
//         </div>
//       ) : null}

//     </section>
//   );
// }

// export default App;

// Search by name             حلللووووووووووووووووووووو
// import React, { useEffect, useState, useRef } from 'react';
// import './App.css';
// import axios from 'axios';
// import Chart from 'chart.js/auto';

// function App() {
//   const [customer, setCustomer] = useState([]);
//   const [transaction, setTransactions] = useState([]);
//   const [filterByName, setFilterByName] = useState('');
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [chartVisible, setChartVisible] = useState(false);
//   const chartRef = useRef(null); // Ref for chart instance

//   async function fetchData() {
//     try {
//       const response = await axios.get('https://noorseenqandil.github.io/Customer-Transactions-App-API/Data.json');
//       if (response.data) {
//         setCustomer(response.data.customers);
//         setTransactions(response.data.transactions);
//       }
//     } catch (err) {
//       console.error('Error fetching data:', err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const searchName = (e) => {
//     setFilterByName(e.target.value);
//   };

//   const handleSelectCustomer = (cust) => {
//     setSelectedCustomer(cust);
//     setChartVisible(true);
//     drawChart(cust);
//   };

//   const drawChart = (selectedCust) => {
//     if (!selectedCust) {
//       setChartVisible(false);
//       return;
//     }

//     if (chartRef.current !== null) {
//       chartRef.current.destroy(); // Destroy current chart if exists
//     }

//     const customerTransactions = transaction.filter(transaction => transaction.customer_id === selectedCust.id);
//     const transactionDates = customerTransactions.map(transaction => transaction.date);
//     const transactionAmounts = customerTransactions.map(transaction => transaction.amount);

//     const ctx = document.getElementById('myChart');
//     chartRef.current = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: transactionDates,
//         datasets: [{
//           label: `Amount Analysis for ${selectedCust.name}`,
//           data: transactionAmounts,
//           borderColor: 'rgba(75, 192, 192, 1)',
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   };

//   const filteredCustomers = customer.filter(cust => 
//     cust.name.toLowerCase().includes(filterByName.toLowerCase())
//   );

//   return (
//     <section className="bg-light p-10">
//       <h1 className='text-primary text-center font-bold'>Customer Transactions APP</h1>
//       <h3 className='text-center font-extrabold m-auto pt-3'>Developed by Nourseen Qandil</h3>
//       <div className=' flex justify-between mt-10'>
//         <div>
//           <input type="text" name="Name" value={filterByName} className="form-control w-100" placeholder="Search By Name" onChange={searchName}/>
//         </div>
//       </div>
//       <div className='table-responsive'>
//         <table className="table table-striped mt-3">
//           <thead className='text-2xl text-center'>
//             <tr>
//               <th>Customer ID</th>
//               <th>Customer Name</th>
//               <th>Transactions</th>
//               <th>Total Amount</th>
//               <th>Select</th>
//             </tr>
//           </thead>
//           <tbody className=' text-center'>
//             {filteredCustomers.length > 0 ? filteredCustomers.map((cust) => {
//               const customerTransactions = transaction.filter(transaction => transaction.customer_id === cust.id);
//               const totalAmount = customerTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
//               return (
//                 <tr key={cust.id} className='border-b'>
//                   <td className='text-dark font-medium text-lg'>{cust.id}</td>
//                   <td className='text-dark font-medium text-lg'>{cust.name}</td>
//                   <td>
//                     {customerTransactions.length > 0 ? (
//                       customerTransactions.map((transaction) => (
//                         <article key={transaction.id} className='bg-white rounded-2xl py-2 px-5 my-5 w-fit m-auto'>
//                           <ul className='text-danger font-medium text-lg text-left'>
//                             <li>date: {transaction.date}</li>
//                             <li>amount: {transaction.amount}</li>
//                           </ul>
//                         </article>
//                       ))
//                     ) : (
//                       <p className='text-dark font-medium text-lg'>No transactions found</p>
//                     )}
//                   </td>
//                   <td className='text-dark font-medium text-lg'>{totalAmount}</td>
//                   <td>
//                     <input type="radio" name='select' className="rounded-full w-4 h-4 cursor-pointer" onClick={() => handleSelectCustomer(cust)} />
//                   </td>
//                 </tr>
//               );
//             }) :
//               <tr>
//                 <td colSpan={5}>
//                   <p className=' text-red-700 py-5 font-bold text-3xl'>No Data Matching.. Try Again!</p>
//                 </td>
//               </tr>
//             }
//           </tbody>
//         </table>
//       </div>

//       {chartVisible ? (
//         <div className='mt-10'>
//           <canvas id="myChart" width="800" height="400"></canvas>
//         </div>
//       ) : null}

//     </section>
//   );
// }

// export default App;

/// Filter by amount   
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import Chart from 'chart.js/auto';

function App() {
  const [customer, setCustomer] = useState([]);
  const [transaction, setTransactions] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByAmount, setFilterByAmount] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null); // Ref for chart instance

  async function fetchData() {
    try {
      const response = await axios.get('https://noorseenqandil.github.io/Customer-Transactions-App-API/Data.json');
      if (response.data) {
        setCustomer(response.data.customers);
        setTransactions(response.data.transactions);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const searchName = (e) => {
    setFilterByName(e.target.value);
    setFilterByAmount(''); // Reset amount filter when searching by name
  };

  const searchAmount = (e) => {
    setFilterByAmount(e.target.value);
    setFilterByName(''); // Reset name filter when searching by amount
  };

  const handleSelectCustomer = (cust) => {
    setSelectedCustomer(cust);
    setChartVisible(true);
    drawChart(cust);
  };

  const drawChart = (selectedCust) => {
    if (!selectedCust) {
      setChartVisible(false);
      return;
    }

    if (chartRef.current !== null) {
      chartRef.current.destroy(); // Destroy current chart if exists
    }

    const customerTransactions = transaction.filter(transaction => transaction.customer_id === selectedCust.id);
    const transactionDates = customerTransactions.map(transaction => transaction.date);
    const transactionAmounts = customerTransactions.map(transaction => transaction.amount);

    const ctx = document.getElementById('myChart');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: transactionDates,
        datasets: [{
          label: `Amount Analysis for ${selectedCust.name}`,
          data: transactionAmounts,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  // حساب المبلغ الإجمالي لكل زبون وإضافة هذا المبلغ إلى الزبون نفسه
  const customersWithTotalAmount = customer.map(cust => {
    const customerTransactions = transaction.filter(transaction => transaction.customer_id === cust.id);
    const totalAmount = customerTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    return { ...cust, totalAmount };
  });

  // فلترة الزبائن بناءً على الاسم والمبلغ الإجمالي
  const filteredCustomers = customersWithTotalAmount.filter(cust => {
    const matchesName = cust.name.toLowerCase().includes(filterByName.toLowerCase());
    const matchesAmount = filterByAmount ? cust.totalAmount === parseFloat(filterByAmount) : true;
    return matchesName && matchesAmount;
  });

  return (
    <section className="bg-light p-10">
      <h1 className='text-primary text-center font-bold'>Customer Transactions APP</h1>
      <h3 className='text-center font-extrabold m-auto pt-3'>Developed by Nourseen Qandil</h3>
      <div className=' flex justify-between mt-10'>
        <div>
          <input type="text" name="Name" value={filterByName} className="form-control w-100" placeholder="Search By Name" onChange={searchName}/>
        </div>
        <div>
          <input type="number" name="Amount" value={filterByAmount} className="form-control w-100" placeholder="Filter By Total Amount" onChange={searchAmount}/>
        </div>
      </div>
      <div className='table-responsive'>
        <table className="table table-striped mt-3">
          <thead className='text-2xl text-center'>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Transactions & Date</th>
              <th>Total Amount</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody className=' text-center'>
            {filteredCustomers.length > 0 ? filteredCustomers.map((cust) => {
              const customerTransactions = transaction.filter(transaction => transaction.customer_id === cust.id);
              return (
                <tr key={cust.id} className='border-b'>
                  <td className='text-dark font-medium text-lg'>{cust.id}</td>
                  <td className='text-dark font-medium text-lg'>{cust.name}</td>
                  <td>
                    {customerTransactions.length > 0 ? (
                      customerTransactions.map((transaction) => (
                        <article key={transaction.id} className='bg-white rounded-2xl py-2 px-5 my-5 w-fit m-auto'>
                          <ul className='text-danger font-medium text-lg text-left'>
                            <li>date: {transaction.date}</li>
                            <li>amount: {transaction.amount}</li>
                          </ul>
                        </article>
                      ))
                    ) : (
                      <p className='text-dark font-medium text-lg'>No transactions found</p>
                    )}
                  </td>
                  <td className='text-dark font-medium text-lg'>{cust.totalAmount}</td>
                  <td>
                    <input type="radio" name='select' className="rounded-full w-4 h-4 cursor-pointer" onClick={() => handleSelectCustomer(cust)} />
                  </td>
                </tr>
              );
            }) :
              <tr>
                <td colSpan={5}>
                  <p className=' text-red-700 py-5 font-bold text-3xl'>No Data Matching.. Try Again!!!</p>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      {chartVisible ? (
        <div className='mt-10'>
          <canvas id="myChart" width="800" height="400"></canvas>
        </div>
      ) : null}

    </section>
  );
}

export default App;


