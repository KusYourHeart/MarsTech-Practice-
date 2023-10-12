import styles from '@/styles/navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DropdownMenu from '../features/DropdownMenu';

const navigation = [
    { id: 1, title: 'About us', path: 'About' },
    { id: 2, title: 'Technologies', path: 'Tech' },
    { id: 3, title: 'Contacts', path: 'contacts' },
];

const Navbar = () => {
    const { pathname } = useRouter();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.navpad}>
                <div className={styles.logo}>
                    <Image src="/logo_1.png" width={175} height={120} alt="MarsLogo" />
                </div>

            <div className={styles.nlinks}>
                <button
                    className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={() => {
                        toggleMobileMenu();
                    }}
                >
                    <Image src="/crumbs.png" width={25} height={25} alt="crumbs" />
                </button>

                
                    {navigation.map(({ id, title, path }) => (
                        <button key={id} className={styles.navbutt} onClick={() => {
                            const element = document.getElementById(path);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}> {title} </button>
                    ))}
                

               
                </div>
            </div>
            {/* Отображаем выпадающее меню, если isDropdownOpen равно true */}
            {isDropdownOpen && (
                <DropdownMenu navigation={navigation} onClose={closeDropdown} />
            )}

                <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileMenuOpen + ' ' + styles.active : styles.mobileMenuOpen}`}>
                <div className={styles.link_w}>
                    {navigation.map(({ id, title, path }) => (
                       
                        <button key={id} className={styles.navbutt_m} onClick={() => {
                            const element = document.getElementById(path);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                                setMobileMenuOpen(false);
                            }
                        }}> {title} </button>
                    ))}
                    </div>
                </div>

        </nav>
    );
};

export default Navbar;  