import { useState } from "react";

const AdminLogin:React.FC = ()=>{

const [formData,setFormData]=useState({
 username:"",
 password:""
});

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
 setFormData({
  ...formData,
  [e.target.name]:e.target.value
 });
};

const handleSubmit=async(e:React.FormEvent)=>{
e.preventDefault();

const res=await fetch("http://localhost:5000/admin-login",{
 method:"POST",
 headers:{
  "Content-Type":"application/json"
 },
 body:JSON.stringify(formData)
});

const data=await res.json();

if(data.success){
 localStorage.setItem("adminLogin","true");
window.location.href = "#admin-dashboard";
}else{
 alert(data.message);
}

};

return(

<div className="admin-login-page">

<form
onSubmit={handleSubmit}
className="admin-login-form card shadow-lg"
>

<h1>Secret Admin Login</h1>

<input
type="text"
name="username"
placeholder="Username"
value={formData.username}
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
value={formData.password}
onChange={handleChange}
/>

<button
type="submit"
className="btn btn-outline-light"
>
Login
</button>

</form>

</div>

)

}

export default AdminLogin;