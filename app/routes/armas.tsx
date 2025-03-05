import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/armas.css';
import Header from '../components/Header';
import SkinCard from '~/components/SkinCard';

export default function Skins() {
    return (
        <>
            <Header></Header>
            <main className="container">
                <h1>COLECCION DE SKINS</h1>
                <select id="type" className="Type">
                    <option value="all">Todos</option>
                    <option value="Heavy Weapons">ARMAS PESADAS</option>
                    <option value="Rifles">FUSILES</option>
                    <option value="Shotguns">ESCOPETAS</option>
                    <option value="Pistols">PISTOLAS</option>
                    <option value="Sniper Rifles">FRNACOTIRADORES</option>
                    <option value="SMGs">SUBFUSILES</option>
                </select>
                <div className="row justify-content-center m-4">
                    <SkinCard id='1' img='https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png' nombre='Vandal' tipo='Rifles'></SkinCard>
                    <SkinCard id='2' img='https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png' nombre='Vandal' tipo='Rifles'></SkinCard>    
                    <SkinCard id='3' img='https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png' nombre='Vandal' tipo='Rifles'></SkinCard>
                    <SkinCard id='4' img='https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png' nombre='Vandal' tipo='Rifles'></SkinCard>
                </div>
            </main>
        </>
    )
}