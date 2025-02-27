import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Video from '../components/Video';

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Video></Video>
      </main>
    </>
  );
}