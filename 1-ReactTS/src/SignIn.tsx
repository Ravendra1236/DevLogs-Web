// import { useState } from "react";

// function SignIn() {
//   const [isSignIn, setSignIn] = useState(false);

//   function handleSignIn() {
//     setSignIn(true);
//   }
//   function handleSignOut() {
//     // setSignIn(0) ; In JS it was alright
//     setSignIn(false);
//   }

//   return (
//     <div>
//       <button onClick={handleSignIn}>SignIn</button>
//       <button onClick={handleSignOut}>SignOut</button>
//       {isSignIn ? "SignIn" : "SignOut"}
//     </div>
//   );
// }

// export default SignIn;

// Another Concept :

import { useState } from "react";

function SignIn() {
  interface UserType {
    name: string;
    email: string;
  }

  const [user, setUser] = useState<UserType | null>();

  function handleSignIn() {
    setUser({
      name: "ravendra",
      email: "ravendra@gmail.com",
    });
  }
  function handleSignOut() {
    setUser(null);
  }

  return (
    <div>
      <button onClick={handleSignIn}>SignIn</button>
      <button onClick={handleSignOut}>SignOut</button>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
    </div>
  );
}

export default SignIn;
