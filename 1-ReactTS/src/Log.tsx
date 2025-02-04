interface PropsType {
//   status: string ;
status : "Info" | "Warn" | "Error"
}

function Log({ status }: PropsType) {

  if (status === "Info") {
    status = "Info";
  } else if (status === "Warn") {
    status = "Warn";
  } else if (status === "Error") {
    status = "Error";
  }

  return <h1>{status}</h1>;
}

export default Log;
