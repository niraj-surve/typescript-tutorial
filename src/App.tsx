function App() {
  type X = {
    a: string,
    b: number
  }

  type Y = X & {
    c: string,
    d: number,
  }

  let y: Y = {
    c: "Niraj",
    d: 23
  }

  return (
    <>
      <h1>Hello {myName}</h1>
    </>
  );
}

export default App;
