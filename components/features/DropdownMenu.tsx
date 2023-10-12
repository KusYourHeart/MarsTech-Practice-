import React from 'react';
import styles from '@/styles/dropdownmenu.module.scss';

interface NavigationItem {
  id: number;
  title: string;
  path: string;
}

const navigation: NavigationItem[] = [
  { id: 1, title: 'About us', path: 'About' },
  { id: 2, title: 'Technologies', path: 'Tech' },
  { id: 3, title: 'Contacts', path: 'contacts' },
];

const DropdownMenu = ({ navigation, onClose }: { navigation: NavigationItem[], onClose: () => void }) => {
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