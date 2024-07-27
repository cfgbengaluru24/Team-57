import React, { useState } from 'react';
import MainNav from '../ui/MainNav';
import AppLayout from '../ui/AppLayout';

const AddPolicy = () => {
  const [formValues, setFormValues] = useState({
    aadhaar: 'false',
    panCard: 'false',
    rationCard: 'false',
  });

  const [name,setName]=useState("")
  const [desc,setDesc]=useState("")
  const [crit,setCrit]=useState("")
  const [minAge,setMinAge]=useState("")
  const [maxAge,setMaxAge]=useState("")
  const [res,setRes]=useState("")
  const [aadhar,setAadhar]=useState("")
  const [pan,setPan]=useState("")
  const [ration,setRation]=useState("")
  const [disable,setDisable]=useState("")


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);
  };

  return (
    <div className='flex flex-col items-center justify-center'>

      <form onSubmit={handleSubmit}>
      <div className='p-2'>
          <label htmlFor="name" className='p-2'>Name of the policy:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='pl-2'></input>
        </div>

        <div className='p-2'>
          <label htmlFor="desc" className='p-2'>Description : </label>
            <input type="text" className='pl-2' value={desc} onChange={(e) => setDesc(e.target.value)}></input>
        </div>

        <div className='p-2'>
          <label htmlFor="crit" className='p-2'>Eligibility Criteria : </label>
          <label htmlFor="age">MinAge:</label>
          <input
            type="number"
            id="age"
            name="age"
            defaultValue={0}
            value={minAge}
            onChange={(e)=>setMinAge(e.target.value)}
            min="0"
            max="120"
          />
                    <label htmlFor="age">MaxAge:</label>
          <input
            type="number"
            id="age"
            name="age"
            defaultValue={0}
            value={maxAge}
            onChange={(e)=>setMaxAge(e.target.value)}
            min="0"
            max="120"
          />
        <label htmlFor="disability">Disability:</label>
        <select id="disable" name="disable" value={disable} onChange={(e)=>setDisable(e.target.value)} className='p-2'>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <label htmlFor="rationCard" className='p-2'>Reservation:</label>
          <select id="reservation" name="reservation" value={res} onChange={(e)=>setRes(e.target.value)} className='p-2'>
            <option value="false">SC</option>
            <option value="true">ST</option>
            <option value="true">OBC</option>
          </select>
        </div>

        <div>
          <label htmlFor="aadhaar" className='p-2'>Aadhaar:</label>
          <select id="aadhaar" name="aadhaar" value={aadhar} onChange={(e)=>setAadhar(e.target.value)} className='p-2'>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>


        <div>
          <label htmlFor="panCard" className='p-2'>PAN Card:</label>
          <select id="panCard" name="panCard" value={pan} onChange={(e)=>setPan(e.target.value)} className='p-2'>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>


        <div>
          <label htmlFor="rationCard" className='p-2'>Ration Card:</label>
          <select id="rationCard" name="rationCard" value={ration} onChange={(e)=>setRation(e.target.value)} className='p-2'>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        
        <button type="submit" className='bg-blue-500 text-white p-2'>Submit</button>
      </form>
    </div>
  );
};

export default AddPolicy;
