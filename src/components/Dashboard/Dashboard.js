import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { DashboardWrapper } from './Dashboard.styled';

function Dashboard() {
const [employees, setEmployee] = useState([]);
const navigate = useNavigate();

useEffect(() =>{
   const headers = {
      'Content-Type': 'application/json',
      'method': 'GET'
   }
   axios.get("https://employees-mockdata.free.beeceptor.com/api/v1",{headers})
   .then((res) =>{
      setEmployee(res.data);

   })
   .catch((err) =>{
      console.error(err)
   })
   .finally(() => {
      console.info("fetchEmployees")
   })


//    setEmployee(
//             [
//                {
//     "id": 1,
//     "employeeId": "emp001",
//     "employeeName": "Omosehin Olanrewaju",
//     "employeeLevel": "Director",
//     "earnings": {
//         "basic": "200000",
//         "transport": "100000",
//         "housing": "700000",
//         "pension": "500000",
//         "tax": "15000"
//     },
//     "deductions": {
//         "basic": "100000",
//         "transport": "70000",
//         "housing": "300000",
//         "pension": "200000",
//         "tax": "5000"
//     }
// },
// {
//     "id": 2,
//     "employeeId": "emp002",
//     "employeeName": "Susan Adams",
//     "employeeLevel": "Chief Auditor",
//     "earnings": {
//         "basic": "300000",
//         "transport": "200000",
//         "housing": "1000000",
//         "pension": "700000",
//         "tax": "10000"
//     },
//     "deductions": {
//         "basic": "150000",
//         "transport": "170000",
//         "housing": "300000",
//         "pension": "200000",
//         "tax": "5000"
//     }
// },
// {
//     "id": 3,
//     "employeeId": "emp003",
//     "employeeName": "Oluwaseun Olaniyan",
//     "employeeLevel": "Auditor",
//     "earnings": {
//         "basic": "400000",
//         "transport": "800000",
//         "housing": "2000000",
//         "pension": "700000",
//         "tax": "25000"
//     },
//     "deductions": {
//         "basic": "200000",
//         "transport": "370000",
//         "housing": "900000",
//         "pension": "500000",
//         "tax": "20000"
//     }
// },
// {
//     "id": 4,
//     "employeeId": "emp004",
//     "employeeName": "Rosemary Njoku",
//     "employeeLevel": "Intern",
//     "earnings": {
//         "basic": "200000",
//         "transport": "100000",
//         "housing": "700000",
//         "pension": "500000",
//         "tax": "15000"
//     },
//     "deductions": {
//         "basic": "100000",
//         "transport": "70000",
//         "housing": "300000",
//         "pension": "200000",
//         "tax": "5000"
//     }
// },
// {
//     "id": 5,
//     "employeeId": "emp005",
//     "employeeName": "Kent Edujobi",
//     "employeeLevel": "I.T Engineer",
//     "earnings": {
//         "basic": "350000",
//         "transport": "150000",
//         "housing": "750000",
//         "pension": "400000",
//         "tax": "45000"
//     },
//     "deductions": {
//         "basic": "120000",
//         "transport": "70000",
//         "housing": "350000",
//         "pension": "200000",
//         "tax": "5000"
//     }
// },
// {
//     "id": 6,
//     "employeeId": "emp006",
//     "employeeName": "Maureen Abdulazeez",
//     "employeeLevel": "HR officer",
//     "earnings": {
//         "basic": "270000",
//         "transport": "110000",
//         "housing": "750000",
//         "pension": "550000",
//         "tax": "35000"
//     },
//     "deductions": {
//         "basic": "105000",
//         "transport": "50000",
//         "housing": "350000",
//         "pension": "250000",
//         "tax": "25000"
//     }
// },
// {
//     "id": 7,
//     "employeeId": "emp007",
//     "employeeName": "Abigail Stevens",
//     "employeeLevel": "Auditor",
//     "earnings": {
//         "basic": "900000",
//         "transport": "300000",
//         "housing": "700000",
//         "pension": "500000",
//         "tax": "85000"
//     },
//     "deductions": {
//         "basic": "800000",
//         "transport": "145000",
//         "housing": "400000",
//         "pension": "300000",
//         "tax": "45000"
//     }
// },
// {
//     "id": 8,
//     "employeeId": "emp008",
//     "employeeName": "Elizabeth Nwosu",
//     "employeeLevel": "HR Officer",
//     "earnings": {
//         "basic": "400000",
//         "transport": "300000",
//         "housing": "500000",
//         "pension": "200000",
//         "tax": "55000"
//     },
//     "deductions": {
//         "basic": "300000",
//         "transport": "200000",
//         "housing": "200000",
//         "pension": "100000",
//         "tax": "5000"
//     }
// },
// {
//     "id": 9,
//     "employeeId": "emp009",
//     "employeeName": "Jammie foxx",
//     "employeeLevel": "I.T Engineer",
//     "earnings": {
//         "basic": "350000",
//         "transport": "150000",
//         "housing": "750000",
//         "pension": "400000",
//         "tax": "45000"
//     },
//     "deductions": {
//         "basic": "120000",
//         "transport": "70000",
//         "housing": "350000",
//         "pension": "200000",
//         "tax": "5000"
//     }
// },
// {
//     "id": 10,
//     "employeeId": "emp0010",
//     "employeeName": "Magaret Oluwabamishe",
//     "employeeLevel": "Auditor",
//     "earnings": {
//         "basic": "800000",
//         "transport": "500000",
//         "housing": "700000",
//         "pension": "200000",
//         "tax": "25000"
//     },
//     "deductions": {
//         "basic": "500000",
//         "transport": "200000",
//         "housing": "500000",
//         "pension": "50000",
//         "tax": "17000"
//     }
// }
//             ])
},[])

const viewDetails = (e, employee) =>{
   e.preventDefault()
   console.log("row>>",employee)
   let changeEmp = JSON.stringify(employee);
   localStorage.setItem('employee', changeEmp);
   navigate(`/profile/${employee.id}`)
}


const showData = employees.map((employee, index) =>{
   // console.log("employee>>>", employee.employeeName);

   return(
      <tbody className="">
       <tr key={index+1} className="bg-gray-50 dark:bg-gray-300 text-stone-800 dark:border-gray-700 text-sm bg-white border-b md:text-2xl ">
          <td className="px-6 py-4 font-medium whitespace-nowrap ">{employee.id}</td>
          <td>{employee.employeeName}</td>
          <td>{employee.employeeLevel}</td>
          <td>{employee.employeeId}</td>
          <td><button className="bg-gray-200 text-xs px-4 py-2 rounded md:text-xl" onClick={(e)=>viewDetails(e, employee)}>View Details</button></td>
       </tr>
      </tbody>
      )
})   
   return (
         <div className="bg-gray-200 w-full h-full pt-1 md:w-screen">
            <div className="flex justify-between">
                 <p className="ml-5 font-semibold mt-5 text-stone-500 text-2xl md:text-3xl">Admin Dashboard Page</p>
                 <img src="./images/avatar.svg" alt="" className="w-4 mt-3 md:w-7 mr-4"/>
            </div>


            <div className="">
               <div className="px-6 shadow-md relative overflow-x-auto mt-20">
                  <table className=" w-[420px] md:w-full text-left">
                      <thead>
                           <tr className=" uppercase bg-stone-500 text-white text-xs md:text-xl ">
                            <th className="pl-2">ID</th>
                            <th>Employee-Name</th>
                            <th>Employee-Level</th>
                            <th>Employee-ID</th>
                            <th>Profile</th>
                           </tr>
                      </thead>
                      {showData}
                  </table>
               </div>
            </div>
         </div>

      )
}
 

export default Dashboard;
