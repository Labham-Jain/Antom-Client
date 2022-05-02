import { Variant, Variants } from "framer-motion";

export type AnimationNames = "fade" | "slide" | "zoom" | "zoom-in";

interface CustomAnimationVariants extends Variants {
  animate: Variant;
  exit: Variant;
  initial: Variant;
}

const Fade: CustomAnimationVariants = {
  animate: { opacity: 1, },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
};

const ZoomIn: CustomAnimationVariants = {
  animate: { scaleZ: 1 },
  initial: { scaleZ: 1.5 },
  exit: { scaleZ: 1 },
};

const getAnimation = (name: AnimationNames) => {
  switch (name) {
    case "fade":
      return Fade;
    case "zoom-in":
      return Fade;
    default:
      return { exit: {}, initial: {}, animate: {} };
  }
};

export default getAnimation;
