const GetAnswers = ({ countries }) => {
  const questionsArray = [];
  let answersArray1 = [];

  const randomNumber = (value) => {
    const random = Math.floor(Math.random() * value);
    // console.log(random);
    return random;
  };

  const getCountries = (array) => {
    array.push(countries[randomNumber(countries.length)]);
    array.push(countries[randomNumber(countries.length)]);
    array.push(countries[randomNumber(countries.length)]);
    array.push(countries[randomNumber(countries.length)]);
    return array;
  };

  const get10Question = () => {
    questionsArray.push(getCountries(answersArray1));
    answersArray1 = [];
  };

  for (let i = 0; i <= 9; i++) {
    get10Question();
  }

  // console.log(answersArray1);
  console.log(questionsArray[0][0].name);

  return (
    <div>
      {/* <img
        src={questionsArray[0][randomNumber(questionsArray[0].length)]}
        alt="flag"
      />
      <button>{questionsArray[0][0].name}</button>
      <button>{questionsArray[0][1].name}</button>
      <button>{questionsArray[0][2].name}</button>
      <button>{questionsArray[0][3].name}</button> */}
    </div>
  );
};

export default GetAnswers;
