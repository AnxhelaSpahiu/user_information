import React, { useEffect, useState, version } from "react";
import { Router, Link, Redirect } from "@reach/router";

const UserData = () => {
  //prandaj ketu esh tasku i rradhes.
  //1-kur te behet run ky component, dmth kur te lodohet ne screen ti dueht te perdoresh componenetDidMount AKA useEffect qe te kesh mundesine te besh gjera
  //sepse ty po te thot canot read name of undefined sepse authenTicatedUser esh undefiend

  const getRegisteredUsers = () => {
    return localStorage.getItem("authenticatedUser");
  };
  const allUsers = getRegisteredUsers();
  const parsedUsers = JSON.parse(allUsers);

  // const setEmptyRegisteredUsers = () => {
  //   return localStorage.setItem("authenticatedUser", "");
  // };
  // setEmptyRegisteredUsers();

  //te dependency array do te duhet te fusesh dicka/piece of state sic po thoje HINT setInterval is your best friend.ikaaa laleeeee bravo maco am so proud of you. i see real progress.

  return (
    <div className="Dashboard">
      <div className="Dashboard-Inner">
        <img src={parsedUsers[0].img} />
        <p> Your Name: {parsedUsers[0].name} </p>
        <p> Your Surname: {parsedUsers[0].surname} </p>
      </div>
    </div>
  );
};

export default UserData;
