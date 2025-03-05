import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

export default function Agente() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Agente <span className='text-amber-400'>{id}</span></h1>
        </div>
    )

}