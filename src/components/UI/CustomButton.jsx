import Button, {buttonClasses} from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import React from 'react'

function CustomButton(props) {
    const useStyles = makeStyles(() => ({
        root: {
            "&": {
                height: 40,
                borderRadius: '0 !important',
                fontFamily: "Poppins !important",
                fontWeight: '500 !important',
                textTransform: 'none !important',
                padding: '15px 8px !important',
            }
        },
        contained: {
            [`&.${buttonClasses.contained}`]: {
                backgroundColor: "#FFCD2E !important",
                color: "white !important",
                boxShadow: '0px 6px 23px #FBE18F !important',
            },
            "& .MuiButton-endIcon, .MuiButton-startIcon,": {
                margin: '0 !important'
            },
            [`&.${buttonClasses.disabled}`]: {
                backgroundColor: "#D1D1D1 !important",
                color: "#333333 !important",
                boxShadow: '0px 6px 23px #D1D1D1 !important'
            }
        },
        text: {
            "&": {
                marginLeft: '5px !important',
                fontFamily: 'Poppins !important',
                color: '#FCC822 !important',
                textTransform: 'none !important',
                fontSize: '14px !important',
            },
            "& .MuiButton-endIcon, .MuiButton-startIcon": {
                margin: 0
            },
        },
        outlined: {
            [`&.${buttonClasses.outlined}`]: {
                border: '1px solid #FCC822',
                backgroundColor: "white",
                color: "#FCC822",
            },
            [`&.${buttonClasses.outlined}:hover`]: {
                color: 'white',
                backgroundColor: "#FCC822",
                border: '1px solid #FCC822'
            }
        }
    }));

    const c = useStyles();
    return ( 
        <Button className={[c.root, c[props.variant]].join(" ")} {...props}>{props.children}</Button>

    );
}

export default CustomButton;