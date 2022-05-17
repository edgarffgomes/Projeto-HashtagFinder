import React, { useEffect, useState } from 'react';
// CSS
import styles from './Home.module.css';
// COMPONENTS
import Container from '../../components/container/Container';
import IconSearch from '../../img/icon-search.svg';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
// IMPORTED ICONS
import iconAbout from '../../img/icon-info-circle.svg';
import iconLogin from '../../img/icon-user-alt.svg';
import { FaArrowCircleUp } from 'react-icons/fa';
// MOTION
import { motion } from 'framer-motion';
// CARROUSEL SLIDER
import { Slider, Slide } from '../../components/slider/ExportPattern';
// TWEET CARDS
import Card from '../../components/tweetCard/Card';
// METHOD POST TWEETS
import { postData } from '../../api/AirtablePOST';
// METHOD GET IMAGES
import { getTweetImgs } from '../../api/GETTweetImages';
// METHOD GET TWEETS
import { getTweets } from '../../api/GETTweets';
// LOADER
import Loader from '../../components/loader/Loader';

const Home = () => {
  const [ativaNav, setAtivaNav] = useState(false); //navbar effect
  const [imageActive, setImageActive] = useState('');
  const [searchResponse, setSearchResponse] = useState(''); //search answer
  const [searchValue, setSearchValue] = useState(''); //field value
  const [titleTag, setTitleTag] = useState();
  const [resultsNumber, setResultsNumber] = useState(0);
  const [animationMode, setAnimationMode] = useState(0);
  const [tweets, setTweets] = useState(null);
  const [moreRequest, setMoreRequest] = useState(10);
  const [tweetImgs, setTweetImgs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scrollTopButton, setTopButton] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  //navbar effect
  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 750) {
        setAtivaNav(true);
      } else {
        setAtivaNav(false);
      }
    }
    window.addEventListener('scroll', posicaoScroll);
  }, []);

  // carrousel settings
  const settings = {
    spaceBetween: 1,
    slidesPerView: 5,
    navigation: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      1920: {
        slidesPerView: 5,
        width: 1920,
        spaceBetween: 100,
      },
      1112: {
        slidesPerView: 3,
        width: 1112,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 3,
        width: 768,
        spaceBetween: 200,
      },
      481: {
        slidesPerView: 3,
        width: 481,
        spaceBetween: 200,
      },
      375: {
        slidesPerView: 3,
        width: 375,
        spaceBetween: 185,
      },
    },
  };

  //set api items
  const asyncCall = async () => {
    const tweetCall = await getTweets(searchValue, moreRequest);
    const tweetImgs = await getTweetImgs(searchValue, moreRequest);

    //validation
    if (!tweetCall.data) {
      setSearchResponse('Nenhum tweet foi achado, tente novamente... 😭');
    }

    const imgSet = tweetImgs.data.map((tweet) => {
      const user = tweetImgs.includes.users.find(
        (user) => tweet.author_id === user.id,
      );
      const img = tweetImgs.includes.media.find(
        (img) => tweet.attachments.media_keys[0] === img.media_key,
      );
      return {
        id: tweet.id,
        img: img.url,
        username: user.username,
        user: user.name,
      };
    });

    const tweetSet = tweetCall.data.map((tweet) => {
      const user = tweetCall.includes.users.find(
        (user) => tweet.author_id === user.id,
      );
      return {
        id: tweet.id,
        text: tweet.text,
        username: user.username,
        user: user.user,
        photo: user.profile_image_url,
      };
    });

    setTweetImgs(imgSet);
    setTweets(tweetSet);
    setTitleTag(searchValue);
    setMoreRequest(moreRequest);
  };

  useEffect(() => {
    if (searchValue) {
      asyncCall();
      return () => {
        if (tweets) {
        }
        setSearchResponse('');
        setSearchValue('');
      };
    }
  });

  // get value from input field
  function handleValue(e) {
    if (e.keyCode === 13) {
      const asyncPost = async () => {
        await postData(e.target.value);
      };
      setSearchValue(
        e.target.value.replace(/[^a-zA-Z0-9_]/g, '').replace(' ', ''),
      );

      setSearchResponse(<Loader />);
      setResultsNumber(10);
      setMoreRequest(10);

      asyncPost();

      //validations
      if (e.target.value === '') {
        setSearchResponse('É necessário digitar algo no campo de buscas...');
        setSearchValue('');
      }
    }
    if (e.keyCode === 8) {
      setSearchResponse('');
      setSearchValue('');
      setTitleTag('');
      setResultsNumber(0);
    }
    if (e.target.value.length >= 20) {
      setSearchResponse('Limite de caracteres atingido! 🚨');
    }
  }

  //scroll effects
  function handleScroll() {
    if (tweets) {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      if (bottom) {
        setLoading(true);
        function fetchMoreData() {
          const newSearch = document.getElementById('input').value;
          setSearchValue(newSearch);

          setResultsNumber(resultsNumber + 5);

          return console.log(moreRequest);
        }
        setTimeout(() => setLoading(false), 2000);
        setTimeout(() => fetchMoreData(), 1500);
        setTimeout(() => setTopButton(true), 3000);
      }
    }
  }

  useEffect(() => {
    if (tweets) {
      const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
          setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
          setShowScroll(false);
        }
      };
      window.addEventListener('scroll', checkScrollTop);
      window.addEventListener('scroll', handleScroll, {
        passive: true,
      });
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // scroll to top of page
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Container>
        <div className={styles.bgNavbar}>
          <Navbar
            acao={ativaNav}
            buttons={[
              {
                route: '/about',
                icon: iconAbout,
                title: 'SOBRE',
                backgroundColor: ' #d842bd',
                textColor: '#ffff',
              },
              {
                route: '/login',
                icon: iconLogin,
                title: 'LOGIN',
                backgroundColor: ' #3634f7',
                textColor: '#ffff',
              },
            ]}
          />
        </div>
        {/* background do cabeçalho */}
        <header className={styles.bgHeader}>
          {/* background do titulo */}
          <div className={styles.bgTitle}>
            <h1>Encontre hashtags de maneira fácil</h1>
            <p>
              Digite o que deseja no campo de buscas e confira os resultados do
              Twitter abaixo
            </p>
          </div>
          {/* background do campo de pesquisa */}
          <div className={styles.bgSearch}>
            {/* background da imagem do campo de pesquisa */}
            <div className={styles.bgImageSearch}>
              <img
                src={IconSearch}
                onClick={() => {
                  setSearchResponse(<Loader></Loader>);
                  setMoreRequest(10);
                  setSearchValue(
                    document
                      .getElementById('input')
                      .value.replace(/[^a-zA-Z0-9_]/g, '')
                      .replace(' ', ''),
                  );
                  if (!document.getElementById('input').value.length) {
                    setSearchResponse(
                      'É necessario digitar algo no campo de buscas...',
                    );
                    setSearchValue('');
                  }
                }}
                alt="iconSearch"
              />
            </div>
            {/* background do input de pesquisa */}
            <div className={styles.bgInputSearch}>
              <input
                type="search"
                id="search"
                onKeyDown={handleValue}
                placeholder="Buscar..."
                maxLength={20}
              />
            </div>
          </div>

          {searchResponse ? (
            <>
              <motion.div
                initial={{ y: animationMode, opacity: 0 }}
                animate={{ y: animationMode, opacity: 1 }}
                onClick={() => setAnimationMode(animationMode)}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.bgResponse}>
                  <div className={styles.textResponse}>{searchResponse}</div>
                </div>
              </motion.div>
            </>
          ) : null}
        </header>
        <main className={styles.bgMain}>
          {tweets ? (
            <div className={styles.bgDisplaySearch}>
              <h2>
                Exibindo os {moreRequest} resultados mais recentes para #
                {titleTag}
              </h2>
            </div>
          ) : /* {moreRequest > 0 ? moreRequest - 10 : null}{' '} */
          null}

          <section>
            <Slider settings={settings}>
              {tweetImgs?.map(({ user, username, img, id }) => {
                return (
                  <Slide key={id}>
                    <div className={styles.bgImageGallery}>
                      <img src={img} alt={user} height="287px" width="287px" />
                      <div className={styles.bgPostUser}>
                        <p>Postado por:</p>
                        <h3>@{username}</h3>
                      </div>
                    </div>
                  </Slide>
                );
              })}
            </Slider>
          </section>

          <section className={styles.flexCard}>
            {tweets?.map(({ user, username, text, id, photo }) => {
              return (
                <Card
                  userImage={photo}
                  user={user}
                  userName={username}
                  tweetText={text}
                  tweetId={id}
                  key={id}
                />
              );
            })}
          </section>

          {/*     {imageActive ? (
            <motion.div
              initial={{ y: animationMode, opacity: 0 }}
              animate={{ y: animationMode, opacity: 1 }}
              onClick={() => setAnimationMode(animationMode)}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <>
                <section className={styles.bgMoreImgs}>
                  <Slider settings={settings}>
                    {tweetImgs?.map(({ user, username, img, id }) => {
                      return (
                        <>
                          <Slide key={id}>
                            <div className={styles.bgImageGallery}>
                              <img
                                src={img}
                                alt={user}
                                height="287px"
                                width="287px"
                              />
                              <div className={styles.bgPostUser}>
                                <p>Postado por:</p>
                                <h3>@{username}</h3>
                              </div>
                            </div>
                          </Slide>
                        </>
                      );
                    })}
                  </Slider>
                </section>
              </>
            </motion.div>
          ) : (
            <>
              <section>
                <motion.div
                  initial={{ y: animationMode, opacity: 0 }}
                  animate={{ y: animationMode, opacity: 1 }}
                  onClick={() => setAnimationMode(!animationMode)}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  {tweets?.map(({ user, username, text, id, photo }) => {
                    return (
                      <>
                        <Card
                          userImage={photo}
                          user={user}
                          userName={username}
                          tweetText={text}
                          tweetId={id}
                          key={id}
                        />
                      </>
                    );
                  })}
                </motion.div>
              </section>
            </>
          )} */}

          {loading ? (
            <motion.div
              initial={{ y: animationMode, opacity: 0 }}
              animate={{ y: animationMode, opacity: 1 }}
              onClick={() => setAnimationMode(animationMode)}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className={styles.bgLoader}>
                <Loader />
              </div>
            </motion.div>
          ) : null}
        </main>
        {scrollTopButton ? (
          <>
            <div
              className={`${styles.bgTopScroll} ${styles.scrollTop}`}
              onClick={scrollTop}
              style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
            >
              <FaArrowCircleUp />
            </div>
          </>
        ) : null}

        <Footer />
      </Container>
    </>
  );
};

export default Home;
