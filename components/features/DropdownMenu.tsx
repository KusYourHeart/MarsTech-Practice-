import React from 'react';
import styles from '@/styles/dropdownmenu.module.scss';


const navigation = [
  { id: 1, title: 'About us', path: 'About' },
  { id: 2, title: 'Technologies', path: 'Tech' },
  { id: 3, title: 'Contacts', path: 'contacts' },
];

const DropdownMenu = ({ navigation, onClose }) => {
  return (
    <div className={styles.dropdownmenu}>
      <ul>
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <a href={path} onClick={onClose}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;