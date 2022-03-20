import { authService } from "fbase";
import { useState } from "react";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(""); // newAccount의 true, false 여부에 따라 onSubmit함수에서 회원가입과 로그인 할 수있도록 코드를 분기.
    const [error, setError] = useState("");


    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name ==="password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                //Sign up
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                //Log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setError(error.message);
        }
        
    };

    const toggleAccount = () => setNewAccount((prev) => !prev); // useState함수에 함수를 인자로 전달하면 인자로전달한 함수의 1번째 인자(prev)에 이전의 상태가 넘어옴.


    return (
        <>
            <form onSubmit={onSubmit}>
                <input name="email" 
                    type="email" 
                    placeholder="Email" 
                    required
                    value={email}
                    onChange={onChange}
                 />
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password}
                    onChange={onChange}
                />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error} 
            </form>
            <span onClick={toggleAccount}>
                    {newAccount ? "Sign In" : "Create Account"}
            </span>
        </>
    );
};
export default AuthForm;