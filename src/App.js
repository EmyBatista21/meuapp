import { Welcome } from "./Components/Welcome/Welcome";

export default function App(){
  return(
    <div>
      <h1>Hello World</h1>
      <Welcome nome = 'Emy' idade = '22' />
      <Welcome nome = 'Kira' idade = '25' />
      <h2>Tu vai ser foda piveta</h2>
    </div>
  );
}