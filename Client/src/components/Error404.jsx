import { motion } from "framer-motion";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error-container">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="error-title"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="error-text"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>
      <motion.a
        href="/"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="error-button"
      >
        Go Home
      </motion.a>
    </div>
  );
};

export default Error404;