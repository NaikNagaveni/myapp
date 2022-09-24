import React, {useState} from 'react';  //useState is a hook

function Form(){
    const[name, setName]=useState('');  //variable and parameter passing
    const[email, setEmail]=useState('');
    const[branch, setBranch]=useState('');
    const[phno, setPhno]=useState();
    const[usn, setUsn]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            name: name,
            email: email,
            branch: branch,
            phno: phno,
            usn: usn
        }
        console.log(data);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="Student name" onChange={(e) => setName(e.target.value)}/>  <br/>
                <input type="email" value={email} placeholder="example@gmail.com" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type='text' value={branch} placeholder='branch' onChange={(e)=>setBranch(e.target.value)}/><br/>
                <input type='phno' value={phno} placeholder='phone number' onChange={(e)=>setPhno(e.target.value)}/><br/>
                <input type='text' value={usn} placeholder='usn' onChange={(e)=>setUsn(e.target.value)}/><br/>
                <input type="submit" value="submit"/>
                {/* <p>{name}</p>
                <p>{email}</p>
                <p>{branch}</p>
                <p>{phno}</p>
                <p>{usn}</p> */}
                
            </form>
            
        </div>
    );
}

export default Form;