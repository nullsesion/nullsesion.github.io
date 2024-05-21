import React from 'react';
import HeaderApp from './components/HeaderApp/HeaderApp';
import UserName from './components/UserName/UserName';
import Clock from './components/Clock/Clock'
import Skill from './components/Skill/Skill';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';
import './App.css';
import SliderApp from './components/SliderApp/SliderApp';
import BaseUser from './components/BaseUser/BaseUser';
import { Checkbox, FormGroup } from '@mui/material';

function App() {
  return (
    <div className="App" style={{maxWidth: 750, margin: "0 auto"}}>
      <header className="App-header" style={{width: "100%",  paddingBottom: 20}} >
        <HeaderApp>
          Опишите себя за 5 минут <br/>
        </HeaderApp>                
      </header>
      <main>
        <div>
          <BaseUser></BaseUser>
          <div style={{display: "flex", justifyContent: "space-between", padding: 10}}>
            <div>
              <div style={{paddingBottom: 10}}>Приоритеты</div>
              <Skill text={"Семья"}></Skill>
              <Skill text={"Любовь"}></Skill>
              <Skill text={"Дружба"}></Skill>
              <Skill text={"Признание"}></Skill>
              <Skill text={"Деньги"}></Skill>
              <Skill text={"Вы"}></Skill>
              <Skill text={"Другое"}></Skill>
            </div>
            <div>
              <div>Навыки</div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{width: "50%",padding: 10}}>
                  <Skill text={"Кулинария"}></Skill>
                  <Skill text={"Дизайн"}></Skill>
                  <Skill text={"Шитье"}></Skill>
                  <Skill text={"Вязание"}></Skill>
                  <Skill text={"Вышивка"}></Skill>
                  <Skill text={"Рукоделие"}></Skill>
                  <Skill text={"Шахматы"}></Skill>
                </div>
                <div style={{width: "50%",padding: 10}}>
                  <Skill text={"ино. языки"}></Skill>
                  <Skill text={"Визаж"}></Skill>
                  <Skill text={"мед. помощь"}></Skill>
                  <Skill text={"Эмпатия"}></Skill>
                  <Skill text={"Красноречие"}></Skill>
                  <Skill text={"Спорт"}></Skill>
                  <Skill text={"Рисование"}></Skill>
                </div>
              </div>
            </div>
          </div>

            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div style={{width: "50%",padding: 10}}>
                <SliderApp textLeft={"Энергичные"} textRight={"Уставшие"}></SliderApp>
                <SliderApp textLeft={"Ленивые"} textRight={"Трудяги"}></SliderApp>
                <SliderApp textLeft={"Неуклюжие"} textRight={"Аккуратные"}></SliderApp>
                <SliderApp textLeft={"Куда деть деньги"} textRight={"Дайте денег"}></SliderApp>
                <SliderApp textLeft={"Успеваете все"} textRight={"Не успеваете ничего"}></SliderApp>
                <SliderApp textLeft={"Импровизируете"} textRight={"Планируете"}></SliderApp>
                <SliderApp textLeft={"Социальны"} textRight={"Социум???"}></SliderApp>
              </div>
              <div style={{width: "50%",padding: 10}}>
                <SliderApp textLeft={"Зрелые"} textRight={"Ребячливые"}></SliderApp>
                <SliderApp textLeft={"Амбициозные"} textRight={"0 Амбиций"}></SliderApp>
                <SliderApp textLeft={"Вкачали удачу"} textRight={"Удача кто?"}></SliderApp>
                <SliderApp textLeft={"Творческие"} textRight={"Не творческие"}></SliderApp>
                <SliderApp textLeft={"Опаздываете"} textRight={"Приходите заранее"}></SliderApp>
                <SliderApp textLeft={"Много эмоций"} textRight={"Лицо камень"}></SliderApp>
                <SliderApp textLeft={"Дарить подарки"} textRight={"Получать"}></SliderApp>
              </div>
            </div>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
