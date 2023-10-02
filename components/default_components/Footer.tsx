import Image from 'next/image';
import styles from '@/styles/footer.module.scss';
import Mail from '../features/ModalEmail';


const Footer = () => (
    <footer className = {styles.footer}>
        
    <div className = {styles.wrap}> {/* Общий див */}

        <div className = 'container text-center'>


            <div className="row">
                <div className={`${styles.wrapl} col`}>
                    <Image src="/logo_1.png" width={175} height={120} alt="LOGO" />
                </div>
                <div id = "contacts" className={`${styles.wrapr} col`}>
                    <Image src="/contactslogo.png" width={150} height={75} alt="CONTACTLOGO" />
                </div>
            </div>



            <div className={`${styles.footer_underline} row`}>
        
                <div className={`${styles.wraplist} col-6 col-md-4`}>
                    <div className="row">
                        <div className="col">
                            <div className="row"><a href="">Software</a> </div>
                            <div className="row"><a href="">IT Consulting</a> </div>
                            <div className="row"><a href="">Cloud Services</a> </div>
                            <div className="row"><a href="">Cybersecurity</a> </div>
                        </div>
                        <div className="col">   
                            <div className="row"><a href="">Project Scalability</a> </div>
                            <div className="row"><a href="">IT Outsourcing</a> </div>
                            <div className="row"><a href="">Architecture</a> </div>
                            <div className="row"><a href="">UI/UX Design</a> </div>
                        </div>
                        <div className="col">
                            <div className="row"><a href="">IT Analytics</a> </div>
                            <div className="row"><a href="">Testing and QA</a> </div>
                            <div className="row"><a href="">Technical Support</a> </div>
                        </div>
                    </div>
                </div>
        
    
                <div className={`${styles.wrapadr} col-6 col-md-4`}>
                    <div className="row"><p>  Dubai, UAE</p></div>
                    <div className="row"><p>14th Floor, Westburry Office, Business Bay</p></div>
                    <div className={`${styles.logorow} row`}>
                        <div className="col"><a href=""><Image src="/logo/email.png" width={24} height={24} alt="EmailLogo" /></a></div>
                        <div className="col"><a href=""><Image src="/logo/facebook.png" width={24} height={24} alt="FBLogo" /></a></div>
                        <div className="col"><a href=""><Image src="/logo/linkedin.png" width={24} height={24} alt="LElogo" /></a></div>
                        <div className="col"><a href=""><Image src="/logo/twitter.png" width={24} height={24} alt="TWLogo" /></a></div>
                        <div className="col"><a href=""><Image src="/logo/whatsapp.png" width={24} height={24} alt="WALogo" /></a></div>
                        <div className="col"><a href=""><Image src="/logo/vk.png" width={24} height={24} alt="VKLogo" /></a></div>
                        
                    </div>
                    <div className={`${styles.buttonrow} row`}><Mail ></Mail></div>
                </div>


            </div>

            

        </div>

    </div>

    
            <div className={styles.wrap_l}>
                <div className={styles.footerend}>
                        <span><a href="">All Rights Reserved</a></span>
                        <span><a href="">Terms of Use</a></span>
                        <span><a href="">Privacy Policy</a></span>
                </div>
            </div>


    </footer>
);

export default Footer; 