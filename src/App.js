import Title from "./components/Title";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="w-full max-w-3xl px-5 mx-auto sm:w-1/2">
      <Title />
      <Todos />
    </div>
  );
}

export default App;
