import React, { useState } from "react";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "what is React",
    content: "React is a front library",
  },
  {
    title: "what is React component",
    content: "React is a front library",
  },
  {
    title: "what is React function",
    content: "React is a front library",
  },
];
const options = [
  {
    label: "the red color",
    value: "red",
  },
  {
    label: "the blue color",
    value: "blue",
  },
  {
    label: "the green color",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState([0]);
  // const [showDropdown,setShowDropdown]=useState(true)

  // const showAccordion = () => {
  //   if (window.location.pathname === "/") {
  //     return <Accordion items={items} />;
  //   }
  // };
  // const showList = () => {
  //   if (window.location.pathname === "./list") {
  //     return <Search />;
  //   }
  // };
  // const showDropdown = () => {
  //   if (window.location.pathname === "./dropdown") {
  //     return <Dropdown />;
  //   }
  // };
  // const showTranslate = () => {
  //   if (window.location.pathname === "./translate") {
  //     return <Translate />;
  //   }
  // };
  // const showComponent = (route, component) => {
  //   return window.location.pathname === route ? component : null;
  // };

  return (
    <div>
      {/* <button onClick={()=> setShowDropdown(!showDropdown)}>toggle dropdown</button>
     {showDropdown?
      <Dropdown
       options={options} 
       onSelectedChange={setSelected}
       selected={selected}
      //  showDropdown={showDropdown}
      //  setShowDropdown={}
       />:null
      } */}
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
