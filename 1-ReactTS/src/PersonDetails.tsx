interface PropsType {
  Details: {
    fName: string;
    lName: string;
    age: number;
  };
}

function PersonDetails({ Details }: PropsType) {
  return (
    <>
      <h1>{Details.fName}</h1>
      <h1>{Details.lName}</h1>
      <h1>{Details.age}</h1>
    </>
  );
}

export default PersonDetails;
