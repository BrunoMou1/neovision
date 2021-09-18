import { FaCheckCircle } from 'react-icons/fa'
import styles from './index.module.scss';

import background from '../../images/1x/background.png';
import celular from '../../images/1x/celular.png';

export function Funcionalities() {
    let iconStyles = { color: '#F7941D', marginRight: '2rem' };
    return (
        <div className={styles.container}>
            <img src={background} alt="banner" />
            <div className={styles.contain}>
                <div>
                    <ul>
                        <li>
                            <FaCheckCircle style={iconStyles} size={50} />
                            Funcionalidade 1
                        </li>
                        <li>
                            <FaCheckCircle style={iconStyles} size={50} />
                            Funcionalidade 2
                        </li>
                        <li>
                            <FaCheckCircle style={iconStyles} size={50} />
                            Funcionalidade 3
                        </li>
                    </ul>
                </div>
                <img src={celular} alt="celular" />
            </div>
        </div>
    )
}