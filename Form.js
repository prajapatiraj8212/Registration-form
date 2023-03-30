import React,{useState,useEffect} from "react";

export default function Form(){
    const data={name:"",email:"",password:""};
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    useEffect(()=>{
        console.log("Registered");
    },[flag])

    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Fields are Mendatory")
        }else{
            setFlag(true)
        }
    }

    return(
        <>
        <pre>{(flag)?<h2>Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
        <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <input type='text' name='name' value={inputData.name} onChange={handleData} placeholder="Enter Your Name"></input> <br/>

            <input type='text' name='email' value={inputData.email} onChange={handleData} placeholder="Enter Your Email"></input> <br/>

            <input type='password' name='password' value={inputData.password} onChange={handleData} placeholder="Enter Your Password"></input> <br/>

            <button type='Submit'>Register</button>
        </form>
        </>
    )
}
