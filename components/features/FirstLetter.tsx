import React, { ReactNode } from 'react';
import styles from '@/styles/letterSquare.module.scss';

interface LetterSquareProps {
  children: ReactNode;
}

const LetterSquare = ({ children } : LetterSquareProps ) => {
    
  if (children === null || children === undefined) {
    return null; // или другой вариант обработки, в зависимости от вашей логики
  }
  
    const childrenString = children.toString();

    const firstLetter = childrenString.charAt(0);
    const restOfText = childrenString.slice(1);
  
    return (
      <span>
        <span className={styles.letterSquare}>{firstLetter}</span>
        {restOfText}
      </span>
    );
  };

export default LetterSquare;