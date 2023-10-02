import styles from '@/styles/navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const navigation = [
    {id: 1, title: 'About us', path: 'About'},
    {id: 2, title: 'Technologies', path: 'Tech'},
    {id: 3, title: 'Contacts', path: 'contacts'},
];

const Navbar = () => {

    const { pathname } = useRouter();

    return(
<nav className = {styles.nav}>
    <div className = {styles.navpad}>
        <div className = {styles.logo}>
            <Image src="/logo_1.png" width={175} height={120} alt="MarsLogo" />
        </div>
        <div className={styles.links}>
        {navigation.map(({id, title, path}) => (
            <button key={id} className = {styles.navbutt} onClick={() => {
                const element = document.getElementById(path);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}> {title} </button>
           
        ))} 
        </div>
    </div>
</nav>
    );
};

export default Navbar; 

