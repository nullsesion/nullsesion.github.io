import React, { Component } from 'react'; 
import Slider, { SliderProps } from '@mui/material/Slider';

/*
export interface SkillProps  { 
    text: string
 }

export default function Skill(props: SkillProps) {
*/
export interface SliderAppProps {
    textLeft: string,
    textRight: string
}

export default function SliderApp(props: SliderAppProps) {
    const {textLeft} = props;
    const {textRight} = props;
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}} >
              <div>{textLeft}</div>
              <div>{textRight}</div>
            </div>
            <div><Slider defaultValue={50} /></div>
          </div>
    );
}
/*
export default class SliderApp extends Component {
    render() {
        return (
            <div>
            <div style={{display: "flex", justifyContent: "space-between"}} >
              <div>Экстроверт</div>
              <div>Интроверт</div>
            </div>
            <div><Slider defaultValue={50} /></div>
          </div>
        );
    }
  }
  */