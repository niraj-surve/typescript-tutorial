function App() {
  let myName: string = "";

  // function printName(name: string){
  //   myName = name
  //   console.log(name)
  // }

  // printName("Niraj");
  
  let printName: Function;
  // let printName: (name: string) => unknown; // When the return type can be anything.... Instead of any, unknown is recommended
  // let printName: (name: string) => void; // Returns undefined
  // let printName: (name: string) => void; // Returns nothing

  

  return (
    <>
      <h1>Hello {myName}</h1>
    </>
  );
}

export default App;
