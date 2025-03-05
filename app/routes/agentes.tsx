import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/agentes.css';
import Header from '../components/Header';
import AgenteCard from '~/components/AgenteCard';

export default function Agentes() {

    return (
        <>
            <Header />
            <main className="container" >
                <h1 className="titulos">AGENTES</h1>
                <select id="roleSelect" className="roleValorant">
                    <option value="all">Todos</option>
                    <option value="Initiator">Initiator</option>
                    <option value="Duelist">Duelist</option>
                    <option value="Sentinel">Sentinel</option>
                    <option value="Controller">Controller</option>
                </select>
                <div className="row">
                    <AgenteCard id='2' img='' nombre='gekko'></AgenteCard>
                    <AgenteCard id='3' img='' nombre='gekko'></AgenteCard>
                    <AgenteCard id='4' img='' nombre='gekko'></AgenteCard>
                    <AgenteCard id='5' img='' nombre='gekko'></AgenteCard>
                    <AgenteCard id='6' img='' nombre='gekko'></AgenteCard>
                </div>
            </main>
        </>
    );
}