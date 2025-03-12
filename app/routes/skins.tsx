import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import SkinCard from '../components/SkinCard'; // Asegúrate de que la ruta sea correcta
import Header from '../components/Header';
import Footer from '~/components/Footer';
import "../styles/armas.css";

const SkinDetailsPage = () => {
    const { id } = useParams<{ id: string }>(); // Obtenemos el id del arma desde la URL
    const [skins, setSkins] = useState<any[]>([]); // Guardamos las skins obtenidas
    const [arma, setArma] = useState<any | null>(null); // Guardamos los detalles del arma seleccionada
    const [selectedRareza, setSelectedRareza] = useState<string>('all'); // Estado para la rareza seleccionada
  
    useEffect(() => {
      // Fetch the weapon data using the id from the URL
      fetch(`https://valorant-api.com/v1/weapons/${id}`)
        .then((response) => response.json())
        .then((data) => {
          const armaData = data.data; // Datos del arma
          setArma(armaData);
  
          // Suponiendo que las skins están dentro de un array en el objeto arma
          const skinsData = armaData.skins; // O la propiedad correspondiente
          setSkins(skinsData);
        })
        .catch((error) => {
          console.error('Error fetching weapon details:', error);
        });
    }, [id]); // Re-fetch data when the id changes
  
    // Filtrar las skins usando la rareza seleccionada
    const filteredSkins = selectedRareza === 'all'
      ? skins
      : skins.filter((skin: any) => skin.contentTierUuid === selectedRareza);
  
    // Función para obtener la imagen de la skin o la imagen por defecto
    const getSkinImage = (skin: any) => {
      // Si la skin tiene una imagen, la usamos, si no, usamos la imagen por defecto del arma
      return skin.displayIcon ? skin.displayIcon : arma?.displayIcon;
    };
  
    return (
      <>
        <Header />
        <div className="container mt-5">
          <h1 className="text-center mb-4">Skins de {arma?.displayName}</h1>
  
          {/* Filtro de rareza */}
          <div className="mb-4">
            <label htmlFor="rareza" className="form-label">Filtrar por rareza</label>
            <select
              id="rareza"
              className="form-select w-auto"
              value={selectedRareza}
              onChange={(e) => setSelectedRareza(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="0cebb8be-46d7-c12a-d306-e9907bfc5a25">DELUXE EDITION</option>
              <option value="e046854e-406c-37f4-6607-19a9ba8426fc">EXCLUSIVE EDITION</option>
              <option value="60bca009-4182-7998-dee7-b8a2558dc369">PREMIUM EDITION</option>
              <option value="12683d76-48d7-84a3-4e09-6985794f0445">SELECT EDITION</option>
              <option value="411e4a55-4e59-7757-41f0-86a53f101bb5">ULTRA EDITION</option>
            </select>
          </div>
  
          {/* Mostrar las skins filtradas */}
          <div className="row">
            {filteredSkins.length > 0 ? (
              filteredSkins.map((skin: any) => (
                <SkinCard
                  key={skin.uuid}
                  img={getSkinImage(skin)}  // Usamos la función para obtener la imagen correcta
                  nombre={skin.displayName}
                  tipo={skin.category} // O cualquier propiedad que describa el tipo
                />
              ))
            ) : (
              <p>No se encontraron skins para este arma.</p>
            )}
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  };
  
  export default SkinDetailsPage;