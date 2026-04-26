import { useEffect, useState } from "react";

const AdminDashboard:React.FC = ()=>{

const [contacts,setContacts]=useState<any[]>([]);

useEffect(()=>{

if(localStorage.getItem("adminLogin") !== "true"){
 window.location.href="/finals-portfolio-project/admin-login";
}else{
 loadContacts();
}

},[]);


const loadContacts = async()=>{

try{

const res = await fetch(
"http://localhost:5000/contacts"
);

const data = await res.json();

setContacts(data);

}catch(error){

console.error(error);
alert("Error loading contacts.");

}

};


return(

<div className="dashboard-page">

<h1>Admin Dashboard</h1>

{
contacts.length===0
? <p>No messages yet.</p>

: contacts.map((contact,index)=>(

<div key={index} className="message-card">

<h3>{contact.employerName}</h3>

<p>Email: {contact.email}</p>

<p>Company: {contact.company}</p>

<p>{contact.message}</p>

</div>

))
}

</div>

)

}

export default AdminDashboard;