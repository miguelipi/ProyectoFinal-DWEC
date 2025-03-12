import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/agente.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Agente() {
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    const [agente, setAgente] = useState<Agente | null>(null);

    useEffect(() => {
        // Realizar la solicitud a la API con el id
        fetch(`https://valorant-api.com/v1/agents/${id}`)
          .then((response) => response.json())  // Convertir la respuesta a JSON
          .then((data) => {
            const agenteData = data.data;  // Los datos están en data.data, así que los asignamos
            setAgente(agenteData);  // Actualizamos el estado con los datos del agente
            setLoading(false);  // Indicamos que ya hemos terminado de cargar
          })
          .catch((error) => {
            console.error("Error al obtener el agente:", error);
            setLoading(false);  // Si hay un error, también cambiamos el estado de loading
          });
      }, [id]);  // El useEffect se ejecuta cada vez que cambia el id
    
      if (loading) {
        return <div>Cargando...</div>;  // Muestra un mensaje mientras carga
      }
    
      if (!agente) {
        return <div>No se encontró el agente.</div>;  // Muestra si no hay datos
      }
    return (
        <>
            <Header></Header>
            <main className="container">
      {/* Sección de información del agente */}
      <section className="info" id="plantilla">
        <div>
          <h1 className="title" id="nombreAgente">{agente.displayName}</h1>
          <p id="descripcionAgente">{agente.description}</p>
          <div className="mt-5 w-25 justify-content-center row rol p-4">
            {agente.role && (
              <>
                <img
                  className="img-fluid w-50"
                  src={agente.role.displayIcon}
                  alt={agente.role.displayName}
                  id="imagenRol"
                />
                <p className="text-center mt-3">ROL</p>
                <p className="text-center" style={{ color: "#ff4655" }} id="nombreRol">
                  {agente.role.displayName}
                </p>
              </>
            )}
          </div>
        </div>
        <img
          src={agente.fullPortrait || ''}
          alt={agente.displayName}
          className="w-50"
          id="imagenAgente"
        />
      </section>

      {/* Sección de habilidades */}
      <section className="container">
        <h1 className="title">Habilidades</h1>
        <div>
          {agente.abilities.map((habilidad: any, index: number) => (
            <div key={index}>
              <div className="row justify-content-center" id="plantilla2">
                <h1 className="title w-50 text-center" style={{ color: "#ff4655" }} id={`nombreHabilidad_${index + 1}`}>
                  {habilidad.displayName}
                </h1>
                <div className="w-25 justify-content-center row p-4">
                  <img
                    className="img-fluid w-50"
                    id={`imagenHabilidad_${index + 1}`}
                    src={habilidad.displayIcon}
                    alt={habilidad.displayName}
                  />
                </div>
              </div>
              <p className="fs-3 text-center" id={`descripcionHabilidad_${index + 1}`}>
                {habilidad.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer></Footer>
        </>
    )

}
