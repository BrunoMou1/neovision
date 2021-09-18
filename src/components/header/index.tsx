import { AiFillFacebook } from 'react-icons/ai'
import styles from './index.module.scss'

import Logo from '../../images/Logo.svg'
import banner from '../../images/1x/banner.png';

export function Header() {
    let iconStyles = { color: '#f5901d' };
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" />
                </div>
                <nav>
                    <a href="#">FUNCIONALIDADES</a>
                    <a href="#">CONTATO</a>
                    <AiFillFacebook style={iconStyles} size={45} />
                </nav>
            </div>
            <div className={styles.banner}>
                <img src={banner} alt="homem" />
                <div>
                    <p>Reconhecimento de imagem com</p>
                    <h2>Inteligência Artificial</h2>
                </div>
            </div>
        </header>
    )
}