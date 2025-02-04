interface PropsType {
  IPL: string[];
}

function Teams({ IPL }: PropsType) {
  return IPL.map((team) => <h1>{team}</h1>);
}

export default Teams;
