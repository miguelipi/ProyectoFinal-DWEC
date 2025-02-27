import Enlace from '../components/Enlace';

function Header() {
    return (
        <header>
            <nav className=" bg-dark">
                <div className="container flex items-center">
                    <a href="index.html" className='text-decoration-none text-white inline-block m-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="35" viewBox="0 0 100 100" width="35">
                            <path
                                d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
                                fill="#fff"></path>
                        </svg>
                    </a>
                    <Enlace href='#' texto='Agentes'></Enlace>
                    <Enlace href='#' texto='Skins'></Enlace>
                    <Enlace href='#' texto='Rangos'></Enlace>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header