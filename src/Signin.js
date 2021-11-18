
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Redirect } from 'react-router';

export default function Signin(){

  
    return(
    <body class="text-center container w-50 p-5" style={{display: "block ruby"}}>
    
    <main class="form-signin p-5">
      <div>
        <h1 class="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Please sign in</h1>
    
        <div class="form-floating p-2">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating p-2">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
    
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        <br/><Link to="/UserHomePage">
        <Button variant="contained" endIcon={<SendIcon />} onClick={<Redirect push to="/UserHomePage"/>}>Sign in</Button>
        </Link>
       </div>
      </div>
    </main>
    
    
        
      
    
    </body>
    );
}