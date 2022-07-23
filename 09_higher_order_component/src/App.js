// import EmployeeListNormal from './components/EmployeeListNormal'
// import CustomerListNormal from './components/CustomerListNormal'
import EmployeeList from './components/EmployeeList'
import CustomerList from './components/CustomerList'

function App() {
  return (
    <div>
      <EmployeeList heading="Employees" />
      <CustomerList heading="Customers" />
    </div>
  );
}

export default App;