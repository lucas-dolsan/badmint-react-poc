import axios from "axios";
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import BadmintonComponent from "./BadmintonComponent";

export default function App() {
  return (
    <div>
      <h1>Exemplo de rotas</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<NotFound />} />
          <Route path="example-1" element={(
            <BadmintonComponent titulo={''}>
              <Dashboard />
            </BadmintonComponent>
          )} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/example-1">Exemplo 1</Link>
          </li>
          <li>
            <Link to="/not-found">Not found</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  const [count, setCount] = React.useState(0);
  const [isTituloLoading, setIsTituloLoading] = React.useState(true);
  const [titulo, setTitulo] = React.useState('');

  function onMount() {
    async function fetchData() {
      try {
        const response = await axios.get('https://viacep.com.br/ws/01001000/json/')
        setTitulo(response.data.logradouro)
      } catch (error) {
        alert(error) 
      } finally {
        setIsTituloLoading(false);
      }
    }
    fetchData()
  }

  React.useEffect(onMount, []);

  function cliquei() {
    setCount(count + 1);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <h2>Dashboard</h2>
      <button style={{ width: "5rem" }} onClick={cliquei}>
        teste
      </button>
      <h3>{count}</h3>
      <h3>{!isTituloLoading ? titulo : 'Carregando'}</h3>
    </div>
  );
}

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <h2>404 NOT FOUND</h2>
      <p>
        <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
