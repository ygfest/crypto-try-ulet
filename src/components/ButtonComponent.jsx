const ButtonComponent = () => {
  const handleEvent = (name) => {
    alert(`Hello, ${name}`);
  }

  return <button className="btn btn-warning" onClick={() => handleEvent("Tati")}>Click me!</button>; 
};

export default ButtonComponent