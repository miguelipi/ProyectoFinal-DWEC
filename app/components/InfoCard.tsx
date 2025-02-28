import 'bootstrap/dist/css/bootstrap.min.css';

function Info({ variant,img, texto1, texto2, titulo, textButton, href }: InfoCardProps) {

    const variants: Record<variant, string> = {
        armas: "translate-middle-y text-dark text-end me-5 end-0",
        agentes: "translate-middle text-white",
        rangos: "translate-middle text-white"
    }

  return (
    <div className="position-relative">
                <img src={img}
                    alt="" data-testid="backdrop-background-image" role="presentation" className="w-100 img-fluid"/>
                <div className={`position-absolute top-50 ${variants[variant]}`} style={{left: '20%'}}>
                    <h1 style={{ fontFamily: 'Titulos', fontSize: '150px' }}>{titulo}</h1>
                    <p className="fs-5">{texto1}</p>
                    <p className="fs-5">{texto2}</p>
                    <a href={href} className="btn btn-dark rounded-0 px-4 py-3">{textButton}</a>
                </div>
            </div>
  )
}

export default Info
