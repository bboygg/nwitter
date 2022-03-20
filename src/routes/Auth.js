import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";


const Auth = () => {
    const onSocialClick = async (event) => {
        //console.log(event.target.name);
        const {
            target: { name },
        } = event;
        let provider; //provider means 소셜로그인 제공업체 정도로 이해 하면 됨.
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
    };
    
    return (
        <div>
            <AuthForm />
            <div>
                <button onClick={onSocialClick} name="google">
                    Goolge Account
                </button>
                <button onClick={onSocialClick} name="github">
                    Github Account
                </button>
            </div>
        </div>
    );
};

export default Auth;