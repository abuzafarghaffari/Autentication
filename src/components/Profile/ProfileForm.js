import {useRef, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
const authCtx = useContext(AuthContext);
const navigate = useNavigate();

const submitHandler =(event)=>{
event.preventDefault();
const enteredNewPassword = newPasswordInputRef.current.value;

fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAoUsVWghrE7TyFNCvMbRybURg0rGNqz0A',{
method:'post',
body:JSON.stringify({
  idToken:authCtx.token,
  password:enteredNewPassword,
  returnSecureToken:false
}),
header:{
'Content-Type':'application/json'
}
}).then(res=>{
//assuse
navigate('/');
});

};

  return (
    <form className={classes.form} onSubmit ={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="6" ref ={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
