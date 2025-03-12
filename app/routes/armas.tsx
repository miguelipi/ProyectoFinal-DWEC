import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkinCard from '../components/SkinCard'; // Asegúrate de que la ruta sea correcta
import Header from '../components/Header';
import "../styles/armas.css";

const ArmasPage = () => {
  const [armas, setArmas] = useState<any[]>([]); // Usamos 'any' para las armas desde la API
  const [tipos, setTipos] = useState<string[]>([]); // Tipos de armas como array de strings
  const [selectedTipo, setSelectedTipo] = useState<string>('all');

  useEffect(() => {
    // Fetch the weapons data from the Valorant API using fetch
    fetch('https://valorant-api.com/v1/weapons')
      .then((response) => response.json())
      .then((data) => {
        const armasData = data.data; // Datos obtenidos de la API
        setArmas(armasData);

        // Extraer los tipos únicos
        const tiposUnicos: string[] = [
          ...new Set<string>(armasData.map((arma: any) => arma.category)),
        ];

        // Mapear los tipos para mostrarlos de forma simplificada
        const tiposSimplificados = tiposUnicos.map((tipo: string) => {
          // Si el tipo tiene un prefijo 'EEquippableCategory::', lo eliminamos
          return tipo.includes('::') ? tipo.split('::')[1] : tipo;
        });

        setTipos(tiposSimplificados);
      })
      .catch((error) => {
        console.error('Error fetching weapons:', error);
      });
  }, []);

  // Filtrar las armas usando el valor completo de la categoría (por ejemplo, 'EEquippableCategory::Heavy')
  const filteredArmas = selectedTipo === 'all'
    ? armas
    : armas.filter((arma: any) => arma.category === selectedTipo);

  return (
    <>
    <Header />
    <div className="container mt-5">
    <h1 className="">COLECCION DE SKINS</h1>
      <div className="mb-4">
        <select
          id="tipo"
          className="form-select w-auto" // Agregamos w-auto aquí
          value={selectedTipo}
          onChange={(e) => setSelectedTipo(e.target.value)}
        >
          <option value="all">Todos</option>
          {tipos.map((tipo, index) => (
            <option key={index} value={`EEquippableCategory::${tipo}`}>{tipo}</option>
          ))}
        </select>
      </div>

      {/* Display the weapons in cards */}
      <div className="row">
        {filteredArmas.map((arma: any) => (
          <SkinCard
            key={arma.uuid}
            id={arma.uuid}
            img={arma.displayIcon}
            nombre={arma.displayName}
            tipo={arma.category.split('::')[1]} // Solo mostramos la parte relevante del tipo
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default ArmasPage;

