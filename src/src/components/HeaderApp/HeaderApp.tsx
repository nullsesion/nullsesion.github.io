import React, { Component, ReactNode } from 'react'; 
import './HeaderApp.css';

interface HeaderAppProps {
  children: ReactNode;
}

export default function HeaderApp({ children }: HeaderAppProps) {
    return (
      <div className="header">
        <h1>Я За 5 Минут</h1>
        <div className="header__description">
          {children}
        </div>
    </div>
    );
  }

