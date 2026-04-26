import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from './components/Portfolio'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'
import './App.css'

function App() {

const path = window.location.pathname;

return(
<>
{
path.includes("admin-login")
? <AdminLogin/>
: path.includes("admin-dashboard")
? <AdminDashboard/>
: <Portfolio/>
}
</>
)

}

export default App