import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();

    const handleIndex = () => {
        navigate('/');
    }

    return (
        <footer>
            <div>
                <p onClick={handleIndex}>Logo</p>
            </div>
            <div>
                <p>Mail</p>
                <p>WhatsApp</p>
                <p>Instagram</p>
            </div>
            <div>
                <h3>Dirección</h3>
                <p>LA BADEA, Dosquebradas, Risaralda, Colombia.</p>
                <p>Carrera 7 #8-24</p>
            </div>
            <div>
                <h3>Horario de Atención</h3>
                <p>Lun - Sab: 8 am - 7:00 pm</p>
                <div>
                    <p>© 2024 Detalles AngeleS</p>
                </div>
            </div>
        </footer>
    )
}