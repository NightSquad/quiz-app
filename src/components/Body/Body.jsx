import React from 'react'
import styles from './Body.module.css'
import people from '../images/people.webp'
import CustomButton from '../UI/CustomButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Body({setSelectCategory}) {
    return ( 
        <div className={styles.Body}>
            <div className={styles.Text}>
                <h2 className={styles.title}>Learn <br/> new concepts for each question</h2>
                <p className={styles.hint}> We help you prepare for exams and quizes</p>
                <div className={styles.buttons}>
                    <CustomButton variant='contained' onClick={() => setSelectCategory(true)}>Start solving</CustomButton>
                    <CustomButton variant='text' startIcon={<ArrowDropDownIcon/>}>know more</CustomButton>
                </div>
            </div>
            <img src={people} alt="people"/>
        </div>
    );
}

export default Body;