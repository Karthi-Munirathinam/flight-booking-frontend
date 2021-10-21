import React from 'react';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LuggageIcon from '@mui/icons-material/Luggage';

function Sidecontent() {
    return (
        <>
            <div className="row side-content mb-2">
                <div>
                    <VerifiedUserOutlinedIcon style={{ color: '#fff', fontSize: 40 }} />
                </div>
                <div className="register-side-content">Trusted by over 100 million Indians</div>
            </div>
            <div className="row side-content mb-2">
                <CreditCardIcon style={{ color: '#fff', fontSize: 40 }} />
                <div className="register-side-content">Fast & secure payments</div>
            </div>
            <div className="row side-content mb-2">
                <MonetizationOnOutlinedIcon style={{ color: '#fff', fontSize: 40 }} />
                <div className="register-side-content">Save on every booking</div>
            </div>
            <div className="row side-content">
                <LuggageIcon style={{ color: '#fff', fontSize: 40 }} />
                <div className="register-side-content">Manage trips, get fare alerts and predictions</div>
            </div>
        </>
    )
}

export default Sidecontent
