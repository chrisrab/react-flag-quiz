const RandomCountry = ({ countries }) => {
  console.log(countries);

  const questionOptions = [];

  const firstNumber = Math.floor(Math.random() * countries.length);
  const secondNumber = Math.floor(Math.random() * countries.length);
  const thirdNumber = Math.floor(Math.random() * countries.length);

  questionOptions.push(
    countries[firstNumber],
    countries[secondNumber],
    countries[thirdNumber]
  );

  console.log(questionOptions);

  return questionOptions;
};

export default RandomCountry;
