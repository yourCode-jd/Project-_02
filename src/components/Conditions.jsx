import React from "react";

function Conditions(props) {
  // ======= First =======

  /*
    if (props.isLoggedIn) {
      return <h2 className="bg-green text-white text-md">Logged in</h2>;
    } else {
      return (
        <h2 className="bg-red-600 text-white text-md">
          please login for continue
        </h2>
      );
    }
*/

  // ======= Second =======

  /*
    if (props.isLoggedIn) {
      return <h2 className="bg-green text-white text-md">Logged in</h2>;
    }
    return (
      <h2 className="bg-red-600 text-white text-md">please login for continue</h2>
    );
*/

  // ======= Third =======

  /*
     return props.isLoggedIn ? (
      <h2 className="bg-green text-white text-md">Logged in</h2>
    ) : (
      <h2 className="bg-red-600 text-white text-md">please login for continue</h2>
    );
*/

  // ======= Fourth =======

  const logged = (
    <h2 className=" capitalize mx-auto max-w-5xl w-full logged  text-black text-md">
      {props.title}
    </h2>
  );

  const loggedText = (
    <h2 className="mx-auto capitalize max-w-xl w-full text-black text-md">
      {props.secondTitle}
    </h2>
  );

  return props.isLoggedIn ? logged : loggedText;
}

export default Conditions;
