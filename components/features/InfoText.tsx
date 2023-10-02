import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/info_text.module.scss';
import Image from 'next/image';

import ARROW_L from '../../public/images/cv_2_img_drop/left-arrow.png';
import ARROW_R from '../../public/images/cv_2_img_drop/right-arrow.png';

import CSS_I from "../../public/images/cv_2_img_drop/css3.png"
import HTML_I from "../../public/images/cv_2_img_drop/html5.png"
import JS_I from "../../public/images/cv_2_img_drop/javascript.png"
import REACT_I from "../../public/images/cv_2_img_drop/react.png"

import KOTLIN_I from "../../public/images/cv_2_img_drop/kotlin.png"
import SWIFT_I from "../../public/images/cv_2_img_drop/swift.png"
import JAVA_I from "../../public/images/cv_2_img_drop/java.png"

import AWS_I from "../../public/images/cv_2_img_drop/aws.png"
import AZURE_I from "../../public/images/cv_2_img_drop/azure.png"
import GOOGLE_C_I from "../../public/images/cv_2_img_drop/google-cloud.png"

import LOG_I from "../../public/images/cv_2_img_drop/LogRhythm.png"
import MCAFEE_I from "../../public/images/cv_2_img_drop/mcafee.png"
import CISCO_I from "../../public/images/cv_2_img_drop/cisco.png"

import MYSQL_I from "../../public/images/cv_2_img_drop/mysql.png"
import POSTGRESQL_I from "../../public/images/cv_2_img_drop/postgresql.png"
import ORACLE_I from "../../public/images/cv_2_img_drop/oracle.png"
import MONGODB_I from "../../public/images/cv_2_img_drop/mongodb.png"

import JIRA_I from "../../public/images/cv_2_img_drop/jira.png"
import CONNECTWISE_I from "../../public/images/cv_2_img_drop/ConnectWise.png"
import KASEYA_I from "../../public/images/cv_2_img_drop/Kaseya.png"

import PYTHON_I from "../../public/images/cv_2_img_drop/python.png"
import CS_I from "../../public/images/cv_2_img_drop/c.png"
import PHP_I from "../../public/images/cv_2_img_drop/php.png"

export default function InfoText() {
    const textData = [
        {
          title: "Software Development",
          info: "Our Custom Software Development services encompass the design and creation of solutions specifically tailored to meet your unique business needs. We follow a structured process that includes understanding your requirements, designing the software architecture, coding, testing, and deployment. Our team of experienced developers is proficient in a variety of programming languages and frameworks, and can create high-quality, reliable software that aligns with your business objectives.",
          images: [PYTHON_I, CS_I, PHP_I]
        },
        {
            title: "Web Development",
            info: "We provide comprehensive Web Development services, including web design, front-end and back-end development, and database integration. Our team is skilled in a range of technologies, including HTML, CSS, JavaScript, React, Angular, PHP, Ruby, and more. We can develop anything from simple, responsive websites to complex web applications. We ensure our solutions are user-friendly, efficient, and compatible across all devices and browsers.",
            images: [CSS_I,HTML_I,JS_I,REACT_I]
          },
          {
            title: "Mobile App Development",
            info: "Our Mobile App Development services include designing and developing custom mobile applications for both iOS and Android platforms. We work closely with you from initial concept, to design, to development, testing, and launch. Our team is experienced in Swift, Kotlin, React Native, and other popular mobile app technologies. We ensure the delivery of high-quality, user-centric apps that provide an engaging user experience.",
            images: [KOTLIN_I,SWIFT_I,JAVA_I]
          },
          {
            title: "Cloud Solutions",
            info: "Our Cloud Solutions services help businesses move their infrastructure to the cloud, allowing them to achieve improved efficiency, scalability, and cost-effectiveness. We offer cloud consulting, where we help you choose the best cloud provider and services to suit your needs, cloud integration, where we ensure your cloud systems work seamlessly with your existing infrastructure, and cloud migration, where we handle the process of moving your data and applications to the cloud.",
            images: [AWS_I,AZURE_I,GOOGLE_C_I]
          },
          {
            title: "Data Analytics",
            info: "Our Data Analytics services enable you to harness your data for valuable insights. We can help you collect, process, and analyze your data, providing you with a deeper understanding of your business operations, customer behavior, and market trends. These insights can help you make data-driven decisions and strategies that propel your business growth.",
            images: [MYSQL_I,POSTGRESQL_I,ORACLE_I,MONGODB_I]
          },
          {
            title: "Cybersecurity",
            info: "Our Cybersecurity services aim to protect your digital assets from potential threats. We provide a range of services, including risk assessment, security strategy and architecture design, implementation of security measures, and continuous monitoring. We help you stay ahead of the latest cybersecurity threats and ensure that your business is always protected.",
            images: [LOG_I,MCAFEE_I,CISCO_I]
          },
          {
            title: "Managed IT Services",
            info: "Our Managed IT Services provide you with a complete IT department at your disposal. We can handle everything from network management, server administration, hardware and software support, to end-user support. Our team of IT professionals ensures your IT systems are running smoothly and efficiently, allowing you to focus on your core business operations. This service also includes regular updates, system monitoring, and prompt response to any IT issues.",
            images: [JIRA_I, CONNECTWISE_I, KASEYA_I]
          },
        // Add more objects for more text data
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevText = () => {
        setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : textData.length - 1);
      };
    
      const nextText = () => {
        setCurrentIndex(prevIndex => prevIndex < textData.length - 1 ? prevIndex + 1 : 0);
      };
    
      return (
        <div className={styles.body_left_text_block}>
            <div className={styles.body_left_text_low}>
                <div className={styles.dot}></div>
                <motion.h3
                    key={textData[currentIndex].title}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: 'spring', stiffness: 80 }}
                >
                    {textData[currentIndex].title}
                </motion.h3>
            </div>

            <div className={styles.body_left_text_grid}>
                <div className={styles.body_left_text_arrow} onClick={prevText}>
                    <Image src={ARROW_L} width={48} height={48} alt="Previous" />
                </div>

                <motion.div
                    key={textData[currentIndex].info}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: 'spring', stiffness: 80 }}
                    className={styles.body_left_text_low_info}
                >
                    {textData[currentIndex].info}
                </motion.div>

                <div className={styles.body_left_text_arrow} onClick={nextText}>
                    <Image src={ARROW_R} width={48} height={48} alt="Next" />
                </div>

                </div>
                <motion.div
                    key={textData[currentIndex].info}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: 'spring', stiffness: 80 }}
                    className={styles.body_left_text_low_info}
                >

                    <div className={styles.tech_icons}>
                        {textData[currentIndex].images.map((image, i) => 
                            <Image key={i} width={64} height={64} src={image} alt={`tech-icon-${i}`} />
                        )}
                    </div>

                </motion.div>

        </div>
    );

}