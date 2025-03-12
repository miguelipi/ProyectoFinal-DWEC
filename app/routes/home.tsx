import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Video from '../components/Video';
import Info from '../components/InfoCard';

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Video></Video>
        <div id='info-cards'>
          <Info variant='agentes' textButton='CONOCELOS' href='/agentes' titulo='Agentes' texto1='Conoce a los agentes del mundo de Valorant.' texto2='Cada uno es unico, descubre tu favorito.' img='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fedda57d7bd05538e8e7b2903ddc1c65f1440575-3440x1020.jpg?auto=format&amp;fit=fill&amp;q=80&amp;h=640'></Info>
          <Info variant='armas' textButton='DESCUBRELO' href='/armas' titulo="Arsenal" texto1='Explora el catalogo de armas de nuestro juego.' texto2='Además de los distintos aspectos que disponemos de ellas.' img='public/armas.jpg'></Info>
          <Info variant='rangos' textButton='EXPLORAR' href='/rangos' titulo="Rangos" texto1='Explora los diferentes rangos de claisficacion.' texto2='Juega partidas competitivas para obtener el tuyo.' img='public/rangos.jpg'></Info>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}