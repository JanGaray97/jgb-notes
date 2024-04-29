import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome {username}!</h1>

            <p><Link to="/dash/notes">Ver notas tecnicas</Link></p>

            <p><Link to="/dash/notes/new">Añadir notas tecnicas</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">Ver ajustes de usuario</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Añadir nuevo usuario</Link></p>}

        </section>
    )

    return content
}
export default Welcome