import { Link } from 'react-router-dom'
import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap';
import person from './person.png'

function Userlogin({ component }) {

    // if part ---------------------------------------
    
    if (component == "admin") {


        return (
            <div>


                <div className="userlogin_main">

                    <fieldset >
                        <legend style={{ border: '2px solid black', marginLeft: '2%' }}>
                            <small style={{ marginLeft: '36%' }}>Admin login</small>
                        </legend>

                        <form className="form" action="#">

                            <h2 className="form_heading">Admin login</h2>

                            <img className="login_img" src={person} alt="img" />

                            <input className="input" type="email" name="email" id="email" placeholder="admin email" required="require" autoComplete="off" />



                            <input className="input" type="password" name="password" id="password" placeholder="admin key" required="require" autoComplete="off" />
                            <br />

                            <Link className="forgot-password" to="/forgotpassword"><small>Forgot key</small></Link><br />
                            <Button type="submit" className="submit_btn" variant="success">Login admin</Button>
                            <br /><br />
                            <Link className="link" to='/user'> <small>Login as user</small> </Link>


                        </form>
                    </fieldset>


                    {/* <img className="login-logo" src={budget} alt="logo" /><br /> */}

                </div>

            </div>



        )

    }  
    
    
    // else part ---------------------------

    else 
    
    {


        return (
            <div>


                <div className="userlogin_main">

                    <fieldset >
                        <legend style={{ border: '2px solid black', marginLeft: '2%' }}>
                            <small style={{ marginLeft: '36%' }}>User login</small>
                        </legend>

                        <form className="form" action="#">

                            <h2 className="form_heading">User login</h2>

                            <img className="login_img" src={person} alt="img" />

                            <input className="input" type="email" name="email" id="email" placeholder="user email" required="require" autoComplete="off" />



                            <input className="input" type="password" name="password" id="password" placeholder="user key" required="require" autoComplete="off" />
                            <br />
                            <Link className="forgot-password" to="/forgotpassword"><small>Forgot password</small></Link><br />
                            <Button type="submit" className="submit_btn" variant="success">Login user</Button>
                            <br /><br />
                            <Link className="link" to='/signup'> <small>No account ? signup</small> </Link><br />
                            <Link className="link" to='/admin'> <small>Login as Admin</small> </Link>


                        </form>
                    </fieldset>


                    {/* <img className="login-logo" src={budget} alt="logo" /><br /> */}

                </div>

            </div>



        )

    }

}

export default Userlogin
