import { useEffect,useState } from "react";

interface Contact{
_id:string;
employerName:string;
email:string;
company:string;
message:string;
status:string;
}

const AdminDashboard:React.FC=()=>{

const [contacts,setContacts]=useState<Contact[]>([]);

const loadContacts=async()=>{

const res=await fetch(
"http://localhost:5000/contacts"
);

const data=await res.json();

setContacts(data);

};

useEffect(()=>{
loadContacts();
},[]);

const deleteMessage=async(id:string)=>{

await fetch(
`http://localhost:5000/delete/${id}`,
{
method:"DELETE"
}
);

loadContacts();

};

const markRead=async(id:string)=>{

await fetch(
`http://localhost:5000/update/${id}`,
{
method:"PUT"
}
);

loadContacts();

};

return(

<div className="container mt-5">

<h1>Employer Messages Dashboard</h1>

<button
className="btn btn-danger mb-4"
onClick={()=>
window.location.href="#admin-login"
}
>
Logout
</button>

{
contacts.map((item)=>(

<div
key={item._id}
className="card p-4 mb-4"
>

<h4>{item.employerName}</h4>

<p>{item.email}</p>

<p>{item.company}</p>

<p>{item.message}</p>

<p>Status: {item.status}</p>

<button
className="btn btn-warning me-2"
onClick={()=>
markRead(item._id)
}
>
Mark Read
</button>

<button
className="btn btn-danger"
onClick={()=>
deleteMessage(item._id)
}
>
Delete
</button>

</div>

))
}

</div>

)

}

export default AdminDashboard;