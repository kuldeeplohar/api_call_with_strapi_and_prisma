"use client"
//1 import area

import { useEffect, useState } from "react";



//2 defination area
  function Home() {
    const [subjects , setSubjects] = useState([{name:'e'},{name:'f'}])
    const [subjects2 , setSubjects2] = useState([{name:'az'},{name:'ad'}])
 //   const three = 1;
     useEffect(()=>{
      
    //  console.log('jayshreeram')
      GET();
      GET1();
     
       },[])
     async function GET() {
      const res = await fetch('http://localhost:1337/api/subjects', {
        headers: {
          'Content-Type': 'application/json',
          // 'API-Key': process.env.DATA_API_KEY,
        },
      })
      const data = await res.json()
      setSubjects(data.data)
      // return Response.json({ data })
    }
     async function GET1() {
     
      
      console.log('get1')
      const res = await fetch('http://localhost:3000/api/getSubjects', {
        headers: {
          'Content-Type': 'application/json',
          // 'API-Key': process.env.DATA_API_KEY,
        },
      })
      const data1 = await res.json()
      console.log('data',data1.msg)
      setSubjects2(data1.msg)
   
      // return Response.json({ data })
    }
  return (
   <>
      <div className="container">
        <div className="card w-25  offset-4 d-flex text-center mt-5" style={{width: '18rem'}}>
            <div className="card-header fw-bolder fs-3">
              Welcome to my Quiz
            </div>
            <div className="card-body ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-start fw-bold">SELECT YOUR SUBJECT</li>
                <select className='form-control'>
                 {
                  subjects.length > 0 &&
                  subjects.map((cv,idx,arr)=>{
                    return<option key={idx}>{cv?.attributes?.name}</option>
                  })
                 }
                </select>
                <li className="list-group-item text-start fw-bold">SELECT YOUR SUBJECT2</li>
              <select className='form-control'>
                {
                  subjects2.length > 0 &&
                  subjects2.map((cv,idx,arr)=>{
                    return<option key={idx}>{cv?.name}</option>
                  })
                 }
                </select>       
              </ul>
            </div>
            
            <div className="card-footer">
              <button className='btn btn-primary'>Start Quiz </button>
            </div>
        </div>
     </div>

   </>
  )
}

//3 export area
//3.1 default export
export default Home;

//3.2 named export

