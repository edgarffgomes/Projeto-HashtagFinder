import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Body from "../../components/searchesPerformedListBody/Body";

import "./SearchesPerformedList.css";

/* ICONES DO NAVBAR */
import iconLogout from "../../img/icon-power-off.svg";
import iconHome from "../../img/icon-home.svg";
import base from "../../utils/api";

const SearchesPerformedList = () => {
  const [hashtags, setHashtags] = useState([]);
  const [page, setPage] = useState(1);

  function handleLoadMoreButton() {
    setPage(page + 1);
  }

  useEffect(() => {
    base("Buscas")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          const array = [];
          records.forEach(function (record) {
            let hourOptions = { hour: "numeric", minute: "numeric" };
            const data = new Date(record.get("Data"));

            const hashtagObject = {
              data: new Intl.DateTimeFormat("pt-BR").format(data),
              horario: new Intl.DateTimeFormat("pt-BR", hourOptions).format(data),
              hashtag: record.get("Hashtag").toUpperCase(),
            };

            array.push(hashtagObject);
          });
          setHashtags([...array]);
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
        <Body hashtags={hashtags.slice(0, 10 * page)} />

        {hashtags.length > 10 * page && (
          <div className='pagination'>
            <button className='load-more' onClick={handleLoadMoreButton}>
              Carregar mais
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchesPerformedList;
