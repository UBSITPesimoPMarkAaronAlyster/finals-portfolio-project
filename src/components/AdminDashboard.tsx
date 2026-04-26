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

const res = await fetch("http://localhost:5000/contacts");

const data = await res.json();

setContacts(data);

}catch(error){

console.error(error);
alert("Error loading contacts.");

}

};


const handleUpdate = async(id:string)=>{

try{

const res = await fetch(`http://localhost:5000/contacts/${id}`,{
 method:"PUT",
 headers:{
  "Content-Type":"application/json"
 },
 body:JSON.stringify({
  status:"Read"
 })
});

const data = await res.json();

alert(data.message);

loadContacts();

}catch(error){

console.error(error);
alert("Error updating message.");

}

};


const handleDelete = async(id:string)=>{

const confirmDelete = confirm("Are you sure you want to delete this message?");

if(confirmDelete === false){
 return;
}

try{

const res = await fetch(`http://localhost:5000/contacts/${id}`,{
 method:"DELETE"
});

const data = await res.json();

alert(data.message);

loadContacts();

}catch(error){

console.error(error);
alert("Error deleting message.");

}

};


const handleLogout = ()=>{
 localStorage.removeItem("adminLogin");
 window.location.href="/finals-portfolio-project/admin-login";
};


return(

<div className="dashboard-page">

<div className="dashboard-header">

<div>
<p className="section-label">
SECRET WEBSITE
</p>
<h1>Admin Dashboard</h1>
</div>

<button
onClick={handleLogout}
className="btn btn-outline-light"
>
Logout
</button>

</div>

<h2>Employer Messages</h2>

{
contacts.length===0
? <p>No messages yet.</p>

: contacts.map((contact,index)=>(

<div key={index} className="message-card">

<h3>{contact.employerName}</h3>

<p><b>Email:</b> {contact.email}</p>

<p><b>Company:</b> {contact.company}</p>

<p><b>Message:</b> {contact.message}</p>

<p><b>Status:</b> {contact.status}</p>

<p><b>Date:</b> {new Date(contact.date).toLocaleString()}</p>

<div className="dashboard-buttons">

<button
onClick={()=>handleUpdate(contact._id)}
className="btn btn-success"
>
Mark as Read
</button>

<button
onClick={()=>handleDelete(contact._id)}
className="btn btn-danger"
>
Delete
</button>

</div>

</div>

))
}

</div>

)

}

export default AdminDashboard;