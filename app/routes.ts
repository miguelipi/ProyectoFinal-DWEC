import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("agentes" ,"routes/agentes.tsx"),
    route("agente/:id" ,"routes/agente.tsx"),
    route("armas" ,"routes/armas.tsx"),
    route("rangos" ,"routes/rangos.tsx")
] satisfies RouteConfig;
