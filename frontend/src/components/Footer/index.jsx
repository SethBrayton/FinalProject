import s from './Footer.module.css'
import { Link } from 'react-router-dom';
import {PiWhatsappLogoLight, PiInstagramLogoLight} from 'react-icons/pi'

function Footer() {
    return(
            <footer className={s.footer}>
                <div className={s.container}>
                    
                    <div className={s.footer_left}>
                        <div className={s.footer_phone_box}>
                            <p className={s.footer_h}>Contact</p>   
                            <a className={s.link_number} href="tel:+499999999999">+49 999 999 99 99</a>
                        </div>
                        <div className={s.social_networks}>
                           <div className={s.icons}>
                            <Link to={'https://www.instagram.com/startainstitute/'} target="_blank">
                            <PiInstagramLogoLight className={s.icon_logo} /> 
                            </Link>
                            <p>Instagram</p>
                            
                            </div>
                           <div className={s.icons}>
                            <Link to={'https://web.whatsapp.com/'} target="_blank">
                            <PiWhatsappLogoLight className={s.icon_logo} /> 
                            </Link>
                            <p>WhatsApp</p>
                            
                            </div>
                        </div>
                    </div>
                        
                    <div className={s.footer_right}>
                        <p className={s.footer_h}>Address</p>      
                        <Link to={'https://www.google.com/search?q=telranDE'} className={s.link} target="_blank">Linkstraße 2, 8 OG, 10785,<br/> Berlin, Deutschland</Link>
                        <p className={s.hours_first}> Working Hours:</p>
                        <p className={s.hours_second}> 24 hours a day</p>
                    </div>
                   
                </div>

                <div className={s.map}>
                        <iframe 
                            title="tel-ran" 
                            frameBorder="0" 
                            width="1345" 
                            height="525px" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.198701926198!2d13.374439858929348!3d52.506668558001834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sen!2sus!4v1698438979912!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />
                </div>
            </footer>
    )
}

export default Footer