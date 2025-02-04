// interface PropsType {
//   name: string;
//   surname: string;
//   age: number;
//   isEligible: boolean;
// }

// OR

type PropsType = {
  name: string;
  surname: string;
  age: number;
  isEligible: boolean;
}

function Home({ name, surname, age, isEligible }: PropsType) {
  return (
    <div>
      <h1>
        Hello {name} {surname}!
      </h1>
      {isEligible ? (
        <p>Age is : {age} , Eligible to vote</p>
      ) : (
        <p>Not Eligible</p>
      )}
    </div>
  );
}

export default Home;
