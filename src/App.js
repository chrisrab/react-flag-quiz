import './App.css';
import { useState, useEffect } from 'react';
import GetAnswers from './components/GetAnswers';

const axios = require('axios');

function App() {
  const [countries, setCountries] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState({});
  const [countryOptions, setCountryOptions] = useState([]);

  // let questionOptions = [];

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const getCountries = async () => {
  //   try {
  //     const resp = await axios.get('https://restcountries.eu/rest/v2/all');
  //     console.log(resp.data);
  //     setCountries(resp.data);
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // };

  // getCountries();

  // const flag = correctAnswer.flag;

  // const randomCountries = (countries) => {
  //   console.log(countries);

  //   const firstNumber = Math.floor(Math.random() * countries.length);
  //   const secondNumber = Math.floor(Math.random() * countries.length);
  //   const thirdNumber = Math.floor(Math.random() * countries.length);

  //   questionOptions.push(
  //     countries[firstNumber],
  //     countries[secondNumber],
  //     countries[thirdNumber]
  //   );

  //   console.log(questionOptions);

  //   return questionOptions;
  // };

  // const refreshCountries = () => {
  //   const firstNumber = Math.floor(Math.random() * countries.length);
  //   const secondNumber = Math.floor(Math.random() * countries.length);
  //   const thirdNumber = Math.floor(Math.random() * countries.length);

  //   questionOptions.push(
  //     countries[firstNumber],
  //     countries[secondNumber],
  //     countries[thirdNumber]
  //   );

  //   questionOptions.push(correctAnswer.name);

  //   console.log(questionOptions);
  //   const shuffledAnswers = shuffle(questionOptions);
  //   console.log(shuffledAnswers);
  //   return shuffledAnswers;
  // };

  // function shuffle(array) {
  //   var currentIndex = array.length,
  //     temporaryValue,
  //     randomIndex;

  //   while (0 !== currentIndex) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }

  //   return array;
  // }

  // console.log(refreshCountries()[0]);

  // let countryList = refreshCountries();

  // function handleClick(e) {
  //   if (e.target.textContent === correctAnswer.name) {
  //     alert('Correct');
  //     questionOptions = [];
  //     countryList = refreshCountries();
  //   }
  // }

  return <GetAnswers countries={countries} />;
}

export default App;
