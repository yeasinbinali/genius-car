import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { authJWT } from '../../api/authJWT';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation(); 
  
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            authJWT(user);
            navigate(from, { location: true });
        })
        .catch(err => console.error(err));
    }
    return (
        <div>
            <p className='text-center mb-5'>
                <button onClick={handleGoogleSignIn} className='btn btn-warning btn-active'>Google Login</button>
            </p>
        </div>
    );
};

export default SocialLogin;