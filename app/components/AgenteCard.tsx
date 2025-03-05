import 'bootstrap/dist/css/bootstrap.min.css'

function AgenteCard() {
  return (
    <div className="col-6 col-md-4 col-xxl-3 my-3" id="plantilla">
                <div className="card">
                        <a href="../agente/agente.html" className="text-center ms-5" id="enlaceAgente"><img 
                            src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayiconsmall.png"
                            id="fotoAgente"/></a>
                    <div className="card-body">
                        <h3 className="card-title" id="titulo">Gekko</h3>
                    </div>
                </div>
            </div>
  )
}

export default AgenteCard