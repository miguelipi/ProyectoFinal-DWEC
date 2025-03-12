import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from "../components/Acordeon";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function rangos() {
  return (
    <>
      <Header />
      <main className='container'>
      <div className="container">
            <h1 style={{ fontFamily: 'Titulos', fontSize: '70px' }}>Rangos</h1>
            <p className="w-50">En nuestro juego tenemos sistema de puntuacion con el cual agrupamos a los jugadores
                basandonos en el rendimiento que tienen dentro de las partidas. Descubre todos los rangos que hay en el
                juego. <br/>¿En cual estás tu?</p>
        </div>
        <Accordion />
      </main>
      <Footer></Footer>
    </>
  );
}