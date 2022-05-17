import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Body from "../../components/searchesPerformedListBody/Body";

import "./SearchesPerformedList.css";

/* ICONES DO NAVBAR */
import iconLogout from "../../img/icon-power-off.svg";
import iconHome from "../../img/icon-home.svg";
import base from "../../utils/api";

const SearchesPerformedList = () => {
  useEffect(() => {
    base("Buscas")
      .select({
        // Selecting the first 10 records in Grid view:
        maxRecords: 10,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function (record) {
            console.log(record.get("Squad"), record.get("Hashtag"));
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

  return (
    <div className='bgNav'>
      <Navbar
        buttons={[
          {
            route: "/",
            icon: iconHome,
            title: "home",
            backgroundColor: " #d842bd",
            textColor: "#ffff",
          },
          {
            route: "/login",
            icon: iconLogout,
            title: "sair",
            backgroundColor: " #3634f7",
            textColor: "#ffff",
          },
        ]}
      />
      <div className='main-container'>
        <Body />
      </div>
    </div>
  );
};

export default SearchesPerformedList;
