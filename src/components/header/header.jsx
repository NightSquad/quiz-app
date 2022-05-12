import React from 'react'
import styles from './header.module.css'
import hat from '../images/hat.png'
import { NavLink} from 'react-router-dom';
import CustomButton from '../UI/CustomButton';

function Header() {
    return ( 
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <img className={styles.hat} src={hat} alt="graduate" />
                <span style={{color: '#3B3B3B'}}>Quiz</span><span style={{color: "#FCC822"}}>Grad</span>
            </div>
            <div className={styles.navLinks}>
                    <NavLink to="/login" style={{textDecoration: 'none'}}><CustomButton variant='outlined'>Login</CustomButton></NavLink>
            </div>
        </nav>
    );
}

export default Header;