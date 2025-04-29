import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { GithubAuthProvider } from 'firebase/auth';

const Login = () => {

    const [userData, setUserData] = useState(null);
    const [githubUsers, setGithubUser] = useState(null);

    const users = githubUsers?.user?.providerData;


    // console.log("github user data: ",githubUsers?.user?.providerData)
    console.log("github user data: ",users)

    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Google sing in clicked');

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUserData(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGitHubSignIn = ( ) => {
        signInWithPopup(auth, provider2)
            .then((result) => {
                console.log(result);
                setGithubUser(result);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
                console.log('SignOut completed')
                setUserData(null)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            {
                users?.map((user) => <div><li>{user?.displayName}</li><li>{user?.email}</li></div> )

            }
            <h2>Please Login</h2>

            {/* <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            <button onClick={handleSingOut}>Sign Out</button> */}

            {
                userData ? 
                    <button onClick={handleSingOut}>Sign Out</button> :
                    <>
                        <button onClick={handleGoogleSignIn}>Sign in with Google</button>  
                        <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
                     
                    </>
            }

            {/* <div>
                <h2>{userData.displayName}</h2>
                <p>{userData.email}</p>
            </div> */}

            {
                userData && <div>
                    <h2>{userData.displayName}</h2>
                    <p>{userData.email}</p>
                    <img src={userData.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;