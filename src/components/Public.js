import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Bienvenido a <span className="nowrap">Garay Reparaciones! </span></h1>
            </header>
            <main className="public__main">
                <p>Ubicado la hermosa ciudad de Cartagena de indias, Garay reparaciones ofrece un personal capacitado listo para satisfacer sus necesidades de reparación tecnológica.</p>
                <address className="public__addr">
                    Garay Reparaciones<br />
                    Barrio la plazuela<br />
                    Diagonal 31 No. 71-136 Piso 2 local E4.<br />
                    Cartagena de indias<br />
                    <a href="tel:313 7690230">(+57 5) 6613386</a>
                </address>
                <br />
                <p>Propietario: Jan Garay</p>
            </main>
            <footer>
                <Link to="/login">Login Empleados</Link>
            </footer>
        </section>

    )
    return content
}
export default Public