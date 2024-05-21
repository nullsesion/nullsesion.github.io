import React, { Component } from 'react'; 
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import SliderApp from '../SliderApp/SliderApp';
import UserName from '../UserName/UserName';
import { Checkbox, FormGroup } from '@mui/material';

export default class BaseUser extends Component<{}> {

  /*
  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentWillMount() {
    this.tick();
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }
  */
  render() {
    return <div>
          <div>
            <div style={{display: "flex", justifyContent: "space-between"}} >
              <div style={{width: "100%",  paddingRight: 20}} >
                <SliderApp textLeft={"Экстроверт"} textRight={"Интроверт"}></SliderApp>
                <SliderApp textLeft={"Солнце"} textRight={"Луна"}></SliderApp>
              </div>
              <div style={{padding: 10}}>

                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Ваш Факультет</FormLabel>
                    <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" >
                      <FormControlLabel value="Griffindor" control={<Radio size="small" />} label="Гриффиндор" />
                      <FormControlLabel value="Slytherin" control={<Radio size="small" />} label="Слизерин" />
                      <FormControlLabel value="Hufflepuff" control={<Radio size="small" />} label="Пуффендуй" />
                      <FormControlLabel value="Ravenclaw" control={<Radio size="small" />} label="Когтевран" />
                    </RadioGroup>
                  </FormControl>

              </div>
            </div>
          </div>

         <div style={{display: "flex", justifyContent: "space-between", padding: 10}}>
            <div>
                <FormGroup>
                  <FormLabel>Ваш смертный грех</FormLabel>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex", justifyContent: "left",flexDirection: "column"}}>
                        <FormControlLabel control={<Checkbox />} label="Гордыня" />
                        <FormControlLabel control={<Checkbox />} label="Жадность" />
                        <FormControlLabel control={<Checkbox />} label="Гнев" />
                        <FormControlLabel control={<Checkbox />} label="Зависть" />
                    </div>
                    <div style={{display: "flex", justifyContent: "left",flexDirection: "column"}}>
                        <FormControlLabel control={<Checkbox />} label="Блуд" />
                        <FormControlLabel control={<Checkbox />} label="Чревоугодие" />
                        <FormControlLabel control={<Checkbox />} label="Уныние" />
                    </div>
                  </div>
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <FormLabel id="demo-controlled-radio-buttons-group">У вас есть...</FormLabel>
                  <FormControlLabel control={<Checkbox />} label="Тату" />
                  <FormControlLabel control={<Checkbox />} label="Пирсинг" />
                </FormGroup>
              </div>
              <div>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Вы влюблены</FormLabel>
                    <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" >
                      <FormControlLabel value="yes" control={<Radio size="small" />} label="Да" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="Нет" />
                    </RadioGroup>
                  </FormControl>
              </div>
            </div>
    </div>
  }
}

        