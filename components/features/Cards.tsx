import styles from '@/styles/card.module.scss'
import Image from 'next/image'

function MyComponent() {
  return (
    <div className={styles.card_container}>
      <div className={styles.row}>
        <div className={styles.block}>


                                    <div className = {styles.cv2_card}>
                                        <div className = {styles.cv2_card_image}>
                                            <Image src="/images/cv_2_img_drop/1.png" alt="Description of Image" className = {styles.cv2_card_image_s} width={100} height={100}/>
                                        </div>
                                        <div className = {styles.cv2_card_line}></div>
                                        <div className = {styles.cv2_card_text}>
                                            <div className = {styles.cv2_card_header}>IT Outsourcing</div>
                                            <div className = {styles.cv2_card_content}><p>Profile or comprehensive technical support for IT infrastructure or individual services.</p></div>
                                        </div>
                                    </div>


        </div>
        <div className={styles.block}>


                                    <div className = {styles.cv2_card}>
                                        <div className = {styles.cv2_card_image}>
                                            <Image src="/images/cv_2_img_drop/2.png" alt="Description of Image" className = {styles.cv2_card_image_s} width={100} height={100}/>
                                        </div>
                                        <div className = {styles.cv2_card_line}></div>
                                        <div className = {styles.cv2_card_text}>
                                            <div className = {styles.cv2_card_header}>Security audit</div>
                                            <div className = {styles.cv2_card_content}><p>Description and assessment of the current IT infrastructure with recommendations for network reorganization</p></div>
                                        </div>
                                    </div>


        </div>

        <div className={styles.block}>


                                    <div className = {styles.cv2_card}>
                                        <div className = {styles.cv2_card_image}>
                                            <Image src="/images/cv_2_img_drop/3.png" alt="Description of Image" className = {styles.cv2_card_image_s} width={100} height={100}/>
                                        </div>
                                        <div className = {styles.cv2_card_line}></div>
                                        <div className = {styles.cv2_card_text}>
                                            <div className = {styles.cv2_card_header}>System administrator</div>
                                            <div className = {styles.cv2_card_content}><p>Solving the current tasks of users remotely or via a visit to the office. Fixed monthly payment</p></div>
                                        </div>
                                    </div>


        </div>

       


      </div>
      <div className={styles.row}>
       


       <div className={styles.block}>


                                    <div className = {styles.cv2_card}>
                                        <div className = {styles.cv2_card_image}>
                                            <Image src="/images/cv_2_img_drop/6.png" alt="Description of Image" className = {styles.cv2_card_image_s} width={100} height={100}/>
                                        </div>
                                        <div className = {styles.cv2_card_line}></div>
                                        <div className = {styles.cv2_card_text}>
                                            <div className = {styles.cv2_card_header}>Cloud solutions</div>
                                            <div className = {styles.cv2_card_content}><p>Organization of remote office work, a server for applications and other tasks. Servers in the data center</p></div>
                                        </div>
                                    </div>


        </div>

        <div className={styles.block}>


                                    <div className = {styles.cv2_card}>
                                        <div className = {styles.cv2_card_image}>
                                            <Image src="/images/cv_2_img_drop/7.png" alt="Description of Image" className = {styles.cv2_card_image_s} width={100} height={100}/>
                                        </div>
                                        <div className = {styles.cv2_card_line}></div>
                                        <div className = {styles.cv2_card_text}>
                                            <div className = {styles.cv2_card_header}>Solution for infrastructure</div>
                                            <div className = {styles.cv2_card_content}><p>Creating an IT infrastructure from scratch, changing and optimizing the current information system.</p></div>
                                        </div>
                                    </div>


        </div>

        <div className={styles.block}>


                                    <div className = {styles.cv2_card}>
                                        <div className = {styles.cv2_card_image}>
                                            <Image src="/images/cv_2_img_drop/8.png" alt="Description of Image" className = {styles.cv2_card_image_s} width={100} height={100}/>
                                        </div>
                                        <div className = {styles.cv2_card_line}></div>  
                                        <div className = {styles.cv2_card_text}>
                                            <div className = {styles.cv2_card_header}>Data protection and recovery</div>
                                            <div className = {styles.cv2_card_content}> <p> Recovery and protection of corporate data, risk assessment, implementation of security systems, backups, monitoring. </p></div>
                                        </div>
                                    </div>


        </div>
      </div>
    </div>
  )
}

export default MyComponent