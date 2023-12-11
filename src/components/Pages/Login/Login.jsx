import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './../../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const handleGoogleSingIn = () => {
        console.log('google mama is coming')
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.message;
                console.log(errorCode)
            });
    }
    return (
        <div className=''>
            <button className="bg-green-700 px-10 py-2 text-white rounded-lg" onClick={handleGoogleSingIn}>Login</button>
        </div>
    );
};

export default Login;