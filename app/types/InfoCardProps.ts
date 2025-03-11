type variant = "armas" | "agentes" | "rangos";

interface InfoCardProps {
    variant: variant;
    img: string;
    titulo: string;
    texto1: string;
    texto2: string;
    href: string;
    textButton: string;
}