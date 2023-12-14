import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './../../../firebase/firebase.init';
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        console.log('google mama is coming')
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.message;
                console.log(errorCode)
            });
    }
    const handleGithubSingIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setUser(user)
            }).catch((error) => {
                console.log(error)
            });
    }
    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className=''>
            {user ? <button className="bg-green-700 px-10 py-2 text-white rounded-lg" onClick={handleLogOut}>Log Out</button> :
                <>
                    <button className="bg-green-700 px-10 py-2 text-white rounded-lg" onClick={handleGoogleSingIn}>Google Login</button>
                    <button className="bg-green-700 px-10 py-2 text-white rounded-lg" onClick={handleGithubSingIn}>Github Login</button>
                </>
            }

            {user && <div className="">
                <h1>User: {user?.displayName} </h1>
                <h2>Email: {user?.email}</h2>
                <img className="mx-auto" src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;