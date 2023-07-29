import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/abhishek.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/actions/loginUser";

const Profle = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(userLogout());
  };

  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={user.avatar.url} alt="User" {...options} />
        <motion.h5 transition={{ delay: 0.3 }} {...options}>
          {user.name}
        </motion.h5>
        <motion.h5 transition={{ delay: 0.3 }} {...options}>
          {user.email}
        </motion.h5>
        {user.role === "admin" && (
          <motion.div {...options} transition={{ delay: 0.5 }}>
            <Link
              to="/admin/dashboard"
              style={{ backgroundColor: "rgb(40,40,40" }}
            >
              Dashboard{" "}
            </Link>
          </motion.div>
        )}
        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link to="/myorders">My Orders</Link>
        </motion.div>

        <motion.button onClick={logoutHandler}>Logout</motion.button>
      </main>
    </section>
  );
};

export default Profle;
