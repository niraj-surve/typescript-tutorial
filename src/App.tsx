function App() {
  type Person = {
    name: string,
    age?: number | string, // Union type
  }

  let person: Person = {
    name: "Niraj",
    age: '22'
  }

  return (
    <>
      <h1>Hello {person.name}</h1>
      <h2>Your age is {person.age}</h2>
    </>
  );
}

export default App;
