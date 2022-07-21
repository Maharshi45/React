import UserComponent from './Components/User'

function App() {
  return (
    <div>
      <UserComponent projects={["React", "Angular"]} age={18}></UserComponent>
    </div>
  );
}

export default App;
