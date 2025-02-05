import "./App.css";
// import Child from "./Child";
// import Parent from "./Parent";
import SignIn from "./SignIn";
// import Log from "./Log";
// import Home from "./Home";
// import PersonDetails from "./PersonDetails";
// import Teams from "./Teams";
// import Teams1 from "./Teams1";

function App() {
  // Object :
  // const Details = {
  //   fName: "Ravendra",
  //   lName: "Singh",
  //   age: 22,
  // };

  // Array :
  // const IPL = ["CSK", "RCB", "MI"];

  // Array of objects :
  // const IPLTeams = [
  //   {
  //     name: "RCB",
  //     clr: "Red",
  //   },
  //   {
  //     name: "MI",
  //     clr: "Blue",
  //   },
  //   {
  //     name: "CSK",
  //     clr: "Yellow",
  //   },
  // ];

  // Passing props
  // return <Home name="Ravendra" surname="Singh" age={20} isEligible={true} />;

  // Passing props as objects
  // return <PersonDetails Details={Details} />;

  // Passing props as arrays
  // return <Teams IPL={IPL} />;

  // Passing props as array of objects
  // return <Teams1 IPLTeams={IPLTeams} />;

  // Advanced Topics :
  // return <Log status="ravendra"/>
  // return <Log status="Info" />;

  // Passing Component as props :
  // return <Parent Children={<Child></Child>}></Parent>;

  // TS in useState-Hook
  return <SignIn/>
}

export default App;
