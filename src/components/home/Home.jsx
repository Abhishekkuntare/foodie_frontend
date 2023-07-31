import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import a6 from "../../assets/home/a6.png"
import "../../styles/all_media_queries.css"

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div className="main_home" style={{backgroundColor:"#feefdb"}}>
        <section className="home">
          <div>
            <motion.h1 {...options}>
              First, we eat. Then, <h1>we do everything else.</h1>
            </motion.h1>
            <motion.p {...options} transition={{ delay: 0.2 }}>
              I'm on a seafood diet.
            </motion.p>
          </div>
          <motion.a
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ delay: 0.4 }}
            href="#menu"
          >
            Explore Menu{" "}
          </motion.a>
          <img className="arrow6" style={{marginLeft:110}} src={a6} alt="" />
        </section>
        <video className="user_login_video" src="v3.mp4" autoPlay muted loop />
      </div>

      {/* <Founder /> */}
      <Menu />
    </>
  );
};

export default Home;
