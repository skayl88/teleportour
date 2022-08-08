import React from "react";
import classes from "./Teams.module.css";
import photo1 from "./Kuzmina.jpg";
import photo2 from "./Stepanov.jpg";
import photo3 from "./Ekaterina.jpg";
import { TeamsText } from "../../components/teamsText/TeamsText";
import { motion, AnimatePresence } from "framer-motion";
import { TeamsPhoto } from "../../components/teamsPhoto/TeamsPhoto";

export const Team = () => {
  let [isImage, setImage] = React.useState(0);
  let images = [photo2, photo3, photo1, photo2, photo1, photo2];
  let step = [
    {
      title: "Stanislav Stepanov - CEO",
      text: "Stanislav says he is a real authentic gipsy as he is always somewhere “on his way”. In winter you can normally find him on Alpine ski slopes, in summer - riding his 23-years-old Mercedes across Europe where he is currently involved in a number of collaborative creative projects for TELEPORTOUR network strengthening and business growth.  ",
      body: " An expert in implementation and scaling of innovation technologies and building relationships with decision makers, Stanislav has over 20 years expertise in International Business Development running startups, imagining, creating, and reimagining the ways of synergetic combinations of current solutions and disruptive technologies in the fields of Oil&Gas, Aerospace, and Wild Nature protection. His business leader career consists of ups and downs, but is based on the basic spiritual principle of always moving forward and never giving up. His first ever business back in 1990’s was a local travel magazine with printed tirage of 15000 copies where local travel businesses and agencies published paid advertising. “It is a strange fact and a magic that after so many years in my business adventure I’m back to travel-related thematics with a revolutionary product, which makes me feel absolutely happy!” - he says. Thanks to his diversified network and leadership skills, he was honored in getting the right people joining the journey from the very beginning. He was able to enthuse video content creators and experienced video producers, software engineers, multicultural communication and interaction professionals, well-known marketers, famous inventors - to create the core team TELEPORTOUR.",
    },
    {
      title: " Ekaterina Ustinova - CULTURE",
      text: "Ekaterina is our leader in cross-cultural communication - an important segment for our multicultural team, and for our growing worldwide community of travel content creators. Her strongest expertise consists of the synergy of legal aspects in social behavior and peculiarities in multilingual community interaction. Ekaterina has a PhD degree in Economics and a Doctor degree in Education. Her work experience consists of lecturing in some leading universities including Moscow State Institute of International Relationship (University). Her work experience in human research is more than 20 years.",
    },

    {
      title: "Andrii Shramko - PRODUCTION",
      text: `Artist, 360 video producer, creator, beta tester of 360-cameras. 15+ years of experience in shooting and editing "impossible VR content". Developer and inventor of unique useful products and accessories for 360 filming. Andrii has been involved in specific projects for cinema production giants, Oculus, National Geographic, and has been responsible for 3D 360 stitching for "Alex Honnold: The Soloist VR" - an award-winner in "Best VR Story" at 2022 Cannes XR x VeeR`,
    },
    {
      title: "Melvin Boecher - MARKETING",
      text: "Melvin is our travel community leader and is the founder and CEO of Travel Dudes, co-founder of the Social Travel Summit, former COO of iambassador. He has been successfully running his business for over 15 years, which makes him a pioneer of professional travel blogging. On Twitter there are around 250.000 followers and he gets on over 8.500 Twitter lists recommended. That's top 3 in travel. The Facebook page also got over 120,000 fans. With the online travel guidebooks Travel Dudes (EN) & Weltreisetipps (DE) industry leaders within the field of destination & peer-to-peer marketing. Melvin manages the creation of cost-effective, inspirational and engaging travel content (video production, distribution with an included social media and website promotion) for digital and social platforms, reaching an audience of over three million travelers each month.",
    },
    {
      title: `“Mister X”- R&D `,
      text: "PhD in Computer Science. 360 live streaming industry recognized inventor, 33 publications, 23 patents, 16 projects ",
    },
    {
      title: "Evgeniy Shendrygin - Senior Software Developer.",
      text: "Master’s degree in information systems and technologies. 8 years in software development and VR, 13 projects.",
    },
  ];
  const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
      // чекаем, то элемент пересекает наблюдаемую область более, чем на 55%
      if (entry.isIntersecting) {
        //delite class active from all elements
        document.querySelectorAll(".step").forEach((item) => {
          item.classList.remove("active");
        });
        // document.querySelector(".active").classList.remove("active");
        // получаем ID секции, которая текущая

        let id = entry.target.dataset.id;
        // обращаемся к ссылке меню, у которой href равен ID секции\
        let lastId;
        let lastVewpPocent = 0;
        if (id && lastId !== id) {
          lastVewpPocent = entry.intersectionRect;
          console.log(lastVewpPocent);

          setImage(id);
          entry.target.classList.add("active");
          lastId = id;
        }
      }
    });
  };
  let isMobile = false;
  if (window.innerWidth < 1050) {
    isMobile = true;
  }
  let threshold = 0.7;
  if (isMobile) {
    threshold = 0.5;
  }
  // обратите внимание на значение опции threshold
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  };

  const observer = new IntersectionObserver(changeNav, options);

  // передаём все секции в обсервер
  React.useEffect(() => {
    let sections = document.querySelectorAll(".step");
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  const ContainerAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="content_page">
      <div className={classes.wraper}>
        <div className={classes.main}>
          <AnimatePresence>
            <motion.div
              className={classes.body}
              variants={ContainerAnimation}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{}}
            >
              <div className={classes.image}>
                {images.map((item, index) => {
                  return (
                    <TeamsPhoto
                      key={index}
                      photo={item}
                      isImage={isImage}
                      setImage={setImage}
                      id={index}
                    ></TeamsPhoto>
                  );
                })}
              </div>
              <div className={classes.text}>
                {step.map((item, index) => (
                  <div
                    className="step personText"
                    data-id={index}
                    key={item.title}
                  >
                    <TeamsText
                      isimage={index}
                      title={item.title}
                      body={item.body}
                      text={item.text}
                    ></TeamsText>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
