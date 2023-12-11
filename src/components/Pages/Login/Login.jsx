

const Login = () => {
    const handleGoogleSingIn = () => {
        console.log('google mama is coming')
    }
    return (
        <div className=''>
            <button className="bg-green-700 px-10 py-2 text-white rounded-lg" onClick={handleGoogleSingIn}>Login</button>
        </div>
    );
};

export default Login;