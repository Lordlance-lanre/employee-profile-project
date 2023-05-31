import React from 'react';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { ProfileWrapper } from './Profile.styled';

const Profile = () => {
   let [getEmployee, setGetEmployee] = useState(localStorage.getItem('employee'))
   const navigate = useNavigate();
   let [employeeObj, setEmployeeObj] = useState({});
   let [earnings, setEarnings] = useState({});
   let [deductions, setDeductions] = useState({});
   const [show, setShow] = useState(false);
   const [open, setOpen] = useState(false);

   useEffect(() =>{
      let getValue = JSON.parse(getEmployee);
      console.log("getval>>", getValue);
      // setEmployeeObj(getValue);
      setEmployeeObj(getValue);
   }, [])

   const returnBtn = () => {
      localStorage.removeItem('employee');
       navigate('/');
    }
     


return (
   <div>
     <div>
        <button onClick={returnBtn} className="bg-gray-200 flex mx-4 mt-5 px-5 py-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
            </svg>
            Return
         </button>
     </div>
      <section className="pt-16 bg-blueGray-50">
         <div className="">
          <div className=" break-words bg-white w-full mb-6 rounded-lg mt-1">
            <div className="px-6">
            <div className="">
            <div className="w-full px-4 flex justify-center">
            <div className="relative">
               <img alt="..." src="../images/avatar1.svg" className="shadow-xl rounded-full h-auto border-none w-40"/>
            </div>
        </div>
        
      </div>
      <div className="text-center mt-12 ">
        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
         Employee ID: {employeeObj.employeeId}
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
         <p>Employee Name: {employeeObj.employeeName}</p>
        </div>

        <div className="text-sm leading-normal mr-9 mt-0 mb-2 text-blueGray-400 font-bold uppercase">
         <p>Employee Level: {employeeObj.employeeLevel}</p>
        </div>

         <div className=" text-sm leading-normal mr-4 mt-0 mb-2 text-blueGray-400 font-bold uppercase">
         <p>Earnings: 
         <button onClick={() => {setEarnings(employeeObj.earnings); setShow(!show); setOpen(null);}} class="bg-blue-500 hover:bg-blue-700 ml-6 text-white font-bold py-2 px-4 rounded">
            View Earnings
         </button>
         </p>
        </div>
        <div className="text-sm leading-normal mt-0  ml-6 mb-2 text-blueGray-400 font-bold uppercase">
         <p>Deductions: 
         <button onClick={() => {setDeductions(employeeObj.deductions); setOpen(!open); setShow(null);}} class="bg-blue-500 hover:bg-blue-700 ml-6 text-white font-bold py-2 px-4 rounded">
           View Deductions
         </button>
         </p>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="">
      
         {
            show && <div className="px-6 shadow-md relative overflow-x-auto mt-2">
            <p className="text-center mb-10 text-xl font-semibold tracking-wide">Earnings</p>
            <table className=" w-[420px] md:w-full text-left">
             <thead>
               <tr className="w-full uppercase text-black text-xs md:text-xl ">
                  <th className="pl-2">BASIC</th>
                  <th>TRANSPORT</th>
                  <th>HOUSING</th>
                  <th>PENSION</th>
                  <th>TAX</th>
               </tr>
             </thead>
            <tbody className="">
             <tr className="  text-stone-800 dark:border-gray-700 text-sm bg-white border-b md:text-2xl ">
                <td>{earnings.basic}</td>
                <td>{earnings.transport}</td>
                <td>{earnings.housing}</td>
                <td>{earnings.pension}</td>
                <td>{earnings.tax}</td>
             </tr>
            </tbody>
         </table>
         </div>
         }
       </div>

       <div className="">
         {
            open && <div className="px-6 shadow-md overflow-x-auto mt-2 pb-10">
                <p className="text-center mb-10 text-xl font-semibold tracking-wide">Deductions</p>
            <table className=" w-[420px] md:w-full text-left">
             <thead>
               <tr className=" uppercase text-black text-xs md:text-xl ">
                  <th className="pl-2">BASIC</th>
                  <th>TRANSPORT</th>
                  <th>HOUSING</th>
                  <th>PENSION</th>
                  <th>TAX</th>
               </tr>
             </thead>
            <tbody className="">
             <tr className=" text-stone-800 dark:border-gray-700 text-sm bg-white border-b md:text-2xl ">
                <td>{deductions.basic}</td>
                <td>{deductions.transport}</td>
                <td>{deductions.housing}</td>
                <td>{deductions.pension}</td>
                <td>{deductions.tax}</td>
             </tr>
            </tbody>
         </table>
         </div>
         }
       </div>
</section>

   </div>
);

}

// Profile.propTypes = {};

// Profile.defaultProps = {};

export default Profile;
