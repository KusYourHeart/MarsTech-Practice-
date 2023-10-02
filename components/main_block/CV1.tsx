import Image from 'next/image'
import styles from '@/styles/content.module.scss';
import InfoText from '../features/InfoText';
import Link from 'next/link'
import FirstLetter from '../features/FirstLetter';
import Cards from '../features/Cards';
import React, { useRef } from "react";



const CV1 = () => (
    <div className = {styles.wrapp}>
        <div className = {styles.wrap_cv1}>


                <div className= {styles.cv1_upheader}> <Link href="/" className= {styles.cv1_upheader_link}>  Main </Link></div>

                <div className= {styles.cv1_header}>

                <div className= {styles.top}>
                    <div className= {styles.top1}>

                        <div className= {styles.cv1_top_text_h}>IT Outsourcing Services</div>
                        <div className= {styles.cv1_top_text_p}>Optimize Current Operations. Launch New Projects.</div>
                        <div className= {styles.cv1_top_text}>Welcome to MarsTech, your one-stop solution for all your IT outsourcing needs. We specialize in providing bespoke, cost-effective, and high-quality IT services for businesses of all sizes. Our goal is to help you streamline your operations, reduce costs, and achieve unparalleled business growth by leveraging our world-class IT outsourcing services.</div>
                        <div className= {styles.cv1_top_button}>
                            <div className= {styles.cv1_top_button_1}><button >Request IT outsourcing</button></div>
                            <div className= {styles.cv1_top_button_2}><button onClick={() => {
      const element = document.getElementById('contacts');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}>Contact us</button></div>
                        </div>

                    </div>

                        <div className= {styles.top2}><Image src="/logo_1.png" width={256} height={256} alt="MarsLogo" /></div>
                    
                    </div>
                </div>

            <div className = {styles.styled_text_h} id = "About"><FirstLetter>About Us</FirstLetter></div>
                <div className = {styles.info_styled_text_cvblock}>
                <div className = {styles.styled_text_cvblock}><div className = {styles.styled_text}>At MarsTech, we are driven by the vision of empowering businesses through innovative and efficient IT solutions. With years of industry experience, a team of skilled professionals, and a customer-centric approach, we strive to deliver services that go beyond the expectations of our clients. We understand the critical role that IT plays in today competitive business landscape. Hence, we have dedicated ourselves to offering the best in class IT services that can help your business stay ahead of the curve.</div></div>
                    <div className = {styles.styled_text_cvblock}> 
                        <div className = {styles.styled_text_cvblock_i}> <span className = {styles.circle} /> Full control over IT infrastructure</div>
                        <div className = {styles.styled_text_cvblock_i}> <span className = {styles.circle} /> Knowledge and experience are confirmed by certificates</div>
                        <div className = {styles.styled_text_cvblock_i}> <span className = {styles.circle} /> Duty engineer for Help Desk requests</div>
                    </div>
                </div>

            
                <div className = {styles.styled_text_h} id = "Tech"><FirstLetter>Technologies we use</FirstLetter></div>

                    <div className= {styles.container}>

                        <div className= {styles.middle}>
                            <div className= {styles.middle1}><InfoText></InfoText></div> 
                        </div>
               
                    </div>



                    
                        <div className = {styles.styled_text_h} id = "Mars"><FirstLetter>Mars Tech - best IT service provider</FirstLetter></div>
                        <div className = {styles.wrap_cv2}> 
                        <div className = {styles.cv2_card_warp}><Cards /></div>
                        </div>


                    
                <div className = {styles.styled_text_h} id = "Why"><FirstLetter>Why Choose MarsTech</FirstLetter></div>


                <div className = {styles.cv1_stat_block}>

                    <div className = {styles.cv1_stat_block1}>
                        <div className = {styles.cv1_stat_block1_text}>24/7<p>Technical support</p></div>
                        <div className = {styles.cv1_stat_block1_text}>100%<p>Efficiency</p></div>
                        <div className = {styles.cv1_stat_block1_text}>1h<p>Solution time</p></div>
                    </div>

                    <div className = {styles.cv1_stat_block2}>

                        <div className = {styles.cv1_stat_block2_c}>
                            <div className = {styles.styled_text_cvblock_i}> <span className = {styles.circle} /> Our team of professionals are experienced and certified in a wide array of technologies and industries.</div>
                            <div className = {styles.styled_text_cvblock_i}> <span className = {styles.circle} /> We adhere to the highest quality standards, ensuring the delivery of reliable and robust solutions.</div>
                            <div className = {styles.styled_text_cvblock_i}> <span className = {styles.circle} /> Our flexible models allow you to scale up or down based on your business requirements.</div>
                        </div>

                        <div className = {styles.cv1_stat_block2_c}>
                            <div className = {styles.styled_text_cvblock_i}> <span className = {styles.circle} /> By outsourcing your IT needs to us, you can significantly cut down on operational costs.</div>
                            <div className = {styles.styled_text_cvblock_i}> <span className = {styles.circle} /> We prioritize your data security and comply with international standards and regulations.</div>
                            <div className = {styles.styled_text_cvblock_i}> <span className = {styles.circle} /> Reaction speed 10 min. Solution time 1 hour</div>
                        </div>

                    </div>


                </div>









                   

                

        </div>
    </div>
  );

  export default CV1;