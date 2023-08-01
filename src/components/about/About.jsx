import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/abhishek.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>KAFF 😋</h4>
          <p>We KAFF. The place for most tasty burgers on the enitre earth.</p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img
                src={"https://abhishekkuntare0210.vercel.app/images/abhi.jpg"}
                alt="Founder"
              />
              <h3>Abhishek Kuntare</h3>
            </div>

            <p>
              I am Abhishek Kuntare, the founder of KAFF. Affiliated to God
              Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
