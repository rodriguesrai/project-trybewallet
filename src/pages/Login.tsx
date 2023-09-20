import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import { addEmail } from '../redux/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(addEmail(email));
    navigate('/carteira');
  };

  const buttonDisabled = password.length <= 5 || !email.match(/^\S+@\S+\.\S+$/);

  return (

    <div className={ style.mainContainer }>
      <div className={ style.flexContainer }>
        <div className={ style.logoContainer }>
          <img
            src="src/img/╓cone Calculadora.png"
            alt="calculadora"
            className={ style.img }
          />
          <h2>Finance APP</h2>
        </div>
        <input
          type="email"
          placeholder="E-mail"
          data-testid="email-input"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />

        <input
          type="password"
          placeholder="Senha"
          data-testid="password-input"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button disabled={ buttonDisabled } onClick={ handleLogin }>Entrar</button>
      </div>
    </div>

  );
}

export default Login;
