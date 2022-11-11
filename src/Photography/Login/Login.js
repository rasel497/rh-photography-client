import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    // logIn/signIn with eamil and password
    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                toast.success('Successfully login')
                const currentUser = {
                    userUid: user.uid
                }
                console.log(user.uid);
                //Get token start using JWT for valid ueser
                fetch('https://rh-photography-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('rhp-token', data.token);
                        // navigate(from, { replace: true });
                    })

                navigate(from, { replace: true });
            })
            .catch(err => console.log(err));

    }

    // Social sign in method
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully login')
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src="/login.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label> */}
                        </div>

                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>

                    </form>
                    <p className='text-center'>Are you new Rh-Photography? <Link className='text-orange-600 font-bold' to='/register'>Sign Up</Link></p>

                    <div className='flex justify-center'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary border-none"><FcGoogle className='text-2xl'></FcGoogle></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;