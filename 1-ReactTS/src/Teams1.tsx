interface PropsType {
  IPLTeams: {
    name: string;
    clr: string;
  }[];
}

function Teams1({ IPLTeams }: PropsType) {
  return IPLTeams.map((team) => (
    <h1>
      {team.name} and {team.clr}
    </h1>
  ));
}

export default Teams1;
