function App() {
  interface Person{
    name: string;
    age?: number;
  }

  type X = Person & {
    a: string;
    b: number;
  }
  
  // Extending interface
  interface Guy extends Person{
    profession: string;
  }

  let me: Guy = {
    name: "Niraj",
    age: 22,
    profession: "Engineer"
  }
  
  return (
    <>
      <h1>Hello {me.name}</h1>
      <h2>My age is {me.age}</h2>
      <h3>I'm a {me.profession}</h3>
    </>
  );
}

export default App;
