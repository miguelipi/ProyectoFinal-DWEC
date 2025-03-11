import 'bootstrap/dist/css/bootstrap.min.css'


function SkinCard({ id, img, nombre, tipo }: SkinCardProps) {

    const ruta = "/skins/" + id;

    return (
        <div className="col-12 col-sm-6 col-lg-4 mb-3" id="plantillaArmas">
            <div className="card h-100">
                <a href={ruta} id="enlace"> <img className="card-img-top  mt-auto" id="imagen"
                    src={img}
                    alt="Title" />
                </a>
                <div className="card-body row align-items-end">
                    <h4 className="card-title col " id="nombreArma">{nombre}</h4>
                    <p className="card-text col text-end" id="typeArma">{tipo}</p>
                </div>
            </div>
        </div>
    )
}

export default SkinCard