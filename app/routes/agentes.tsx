import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/agentes.css";
import Header from "../components/Header";
import AgenteCard from "~/components/AgenteCard";
import { useEffect, useState } from "react";

export default function Agentes() {
  const [agentes, setAgentes] = useState<AgenteCardProps[]>([]);
  const [filtroRol, setFiltroRol] = useState<string>("all"); // Estado para el filtro

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((data) => {
        const agentesJugables = data.data
          .filter((agente: any) => agente.isPlayableCharacter) // ✅ Solo agentes jugables
          .filter((agente: any) => agente.bustPortrait !== null); // ✅ Solo agentes con imagen
  
        setAgentes(agentesJugables);
      })
      .catch((error) => console.error("Error al obtener los agentes:", error));
  }, []);
  

  // Filtrar los agentes según el rol seleccionado
  const agentesFiltrados = filtroRol === "all" 
  ? agentes 
  : agentes.filter((agente) => agente.role && agente.role.displayName === filtroRol);


  return (
    <>
      <Header />
      <main className="container">
        <h1 className="titulos">AGENTES</h1>
        
        {/* Selector de roles */}
        <select 
          id="roleSelect" 
          className="roleValorant" 
          onChange={(e) => setFiltroRol(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="Initiator">Initiator</option>
          <option value="Duelist">Duelist</option>
          <option value="Sentinel">Sentinel</option>
          <option value="Controller">Controller</option>
        </select>

        {/* Renderizado de las tarjetas de los agentes */}
        <div className="row">
          {agentesFiltrados.map((agente) => (
            <AgenteCard 
                  id={agente.uuid}
                  img={agente.displayIcon}
                  nombre={agente.displayName}
            />
          ))}
        </div>
      </main>
    </>
  );
}
