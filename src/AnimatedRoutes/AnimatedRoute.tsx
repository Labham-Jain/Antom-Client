import { motion } from "framer-motion";
import getAnimation, { AnimationNames } from "@utils/animation";

interface AnimatedRouteProps {
  animation: AnimationNames;
  children: React.ReactChild;
}

const AnimatedRoute = ({
  animation,
  children,
}: AnimatedRouteProps) => {
  const variant = getAnimation(animation);
  return (
    <motion.div
      animate="animate"
      initial="initial"
      exit="exit"
      variants={variant}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;
