import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import React from 'react'
import person from './person.png'
function Signupuser() {
    return (
        <div>
            <div className="signup_main">
                
                <legend className="signup_legend" >User signup</legend>

               
                <div className="form_div">
                    <form action="#">

                    <img className="signup_img" src={person} alt="img" /><br />

                        <input type="email" className="input_s1" autoComplete="off" placeholder="Email" required="require" />

                        <input type="text" className="input_s2" autoComplete="off" placeholder="Country" required="require" />
                        <br />
                        <input type="number" className="input_s3" autoComplete="off" placeholder="Contact No." required="require"/>

                        <input type="password" className="input_s4" autoComplete="off" placeholder="Password" required="require" />
                        <br />

                        <input type="text" className="input_s5" autoComplete="off" placeholder="Occupation" required="require" /><br />

                        <Button type="submit" className="signup_btn" variant="success">Signup User</Button><br /><br />

                        <Link className="signup_link" to='/'> <small>Already have an account? login here</small> </Link>


                    </form>
                </div>
                
                
            </div>
        </div>
    )
}

export default Signupuser
