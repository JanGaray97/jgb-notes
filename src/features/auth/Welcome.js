import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`JGB.Notes: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Bienvenido {username}!</h1>

            <p><Link to="/dash/notes">Ver Notas Tecnicas</Link></p>

            <p><Link to="/dash/notes/new">Agregar Nueva Nota Tecnica</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">Ver Configuración De Usuarios</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Agregar Nuevo Usuario</Link></p>}

        </section>
    )

    return content
}
export default Welcome