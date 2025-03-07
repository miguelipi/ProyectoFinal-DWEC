interface Habilidad {
    displayName: string;
    description: string;
    displayIcon: string | null;
  }
  
  interface Rol {
    displayName: string;
    displayIcon: string;
  }
  
  interface Agente {
    displayName: string;
    description: string;
    fullPortrait: string | null;
    role?: Rol;
    abilities: Habilidad[];
  }