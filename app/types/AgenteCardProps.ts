interface AgenteCardProps {
    [x: string]: any;
    id: string;
    img: string;
    nombre: string;
    role?: { displayName: string }; // Agrega esta línea para el role
  }