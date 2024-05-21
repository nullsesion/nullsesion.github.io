import React, { Component } from 'react';
import Rating from '@mui/material/Rating';
import './Skill.css';

export interface SkillProps  { 
    text: string
 }

export default function Skill(props: SkillProps) {
    const {text} = props;
    return (
        <div className='skill'>
            <span className='skill__label'>{text}</span>
            <Rating name="simple-controlled" />
        </div>
    );
}