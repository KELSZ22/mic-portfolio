import React from "react";

function Contacts (){
    return (
        <>
  <div className="cont">
                        <h1 className="tacts">Contacts</h1>

            <div className="contacts-container">

                <div className="contacts-content">
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.2050919574647!2d120.9630736695074!3d14.609306596862266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca74b8504f5f%3A0x629564a516e4eb37!2s1319%20Abad%20Santos%20St%2C%20Tondo%2C%20Manila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1731127033583!5m2!1sen!2sph"  width="500" height="400px"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Address"></iframe></p>
    
                    <div className="contacts-input">


                            <div className="socials">
                                <a href="https://www.facebook.com/michael.sabino.7146">
                                    <img src="/fb.png" alt="fb.png" height="50px"/>
                                </a>   
                                <a href="https://www.instagram.com/kel_sz7/">
                                    <img src="/ig.png" alt="ig.png" height="50px"/>
                                </a>
                                <a href="mailto:michaels6355@gmail" title="michaels6355@gmail.com">
                                    <img src="/email.png" alt="email.png" height="50px"/>
                                </a>

                                <a href="" title="09358693624">
                                    <img src="/tg.png" alt="tg.png" height="50px"/>
                                </a>

                            </div>
    
                            <label htmlFor="">First Name:</label>
                            <input type="text" />
                            <label htmlFor="">Last Name:</label>
                            <input type="text" />
                            <label htmlFor="">Email:</label>
                            <input type="email" />


                            <label htmlFor="">Message</label>
                            <textarea cols="23" rows="10"/>
    
                            <button>Submit</button>
    
                        </div>
                </div>

                </div>

            </div>



        </>
    )
}

export default Contacts;
