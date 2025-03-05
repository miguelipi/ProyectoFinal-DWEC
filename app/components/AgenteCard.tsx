import 'bootstrap/dist/css/bootstrap.min.css'

function AgenteCard({nombre, img, id}: AgenteCardProps) {

    const ruta = "/agentes/" + id;

  return (
    <div className="col-6 col-md-4 col-xxl-3 my-3" id="plantilla">
                <div className="card">
                        <a href={ruta} className="text-center ms-5" id="enlaceAgente"><img 
                            src={img}
                            id="fotoAgente"/></a>
                    <div className="card-body">
                        <h3 className="card-title" id="titulo">{nombre}</h3>
                    </div>
                </div>
            </div>
  )
}

export default AgenteCard