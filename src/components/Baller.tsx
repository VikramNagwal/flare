import { motion } from "motion/react";

const Baller = () => {
  return (
    <motion.div
      animate={{
        x: 100
      }}
      transition={{
        duration: 0.3,
        ease: "linear",
        delay: 1,
      }}
      style={{
        width: 100,
        height: 100,
        background: "blue",
      }}
    />
  );
};

export default Baller;