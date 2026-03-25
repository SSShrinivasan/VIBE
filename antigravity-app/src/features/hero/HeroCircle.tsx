import { motion } from "framer-motion";
import { MapPin, Eye, Star, TrendingUp, Users } from "lucide-react";
import { FloatingNode } from "./FloatingNode";

export const HeroCircle = () => {
  return (
    <div className="relative flex h-[400px] w-[400px] items-center justify-center md:h-[550px] md:w-[550px]">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 bg-brandBlue/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 bg-brandGreen/5 blur-[80px] rounded-full" />

      {/* Main Rotating Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="relative flex h-full w-full items-center justify-center"
      >
        {/* Outer dashed ring */}
        <div className="absolute h-[70%] w-[70%] rounded-full border border-dashed border-white/10" />
        
        {/* Middle ring */}
        <div className="absolute h-[45%] w-[45%] rounded-full border border-white/5 bg-white/[0.02]" />

        {/* Floating Nodes positioned around the rotating circle */}
        {/* We counter-rotate them so they stay upright */}
        <div className="absolute h-full w-full">
          <NodeWrapper top="15%" left="50%" translateX="-50%" rotation={-360}>
             <FloatingNode icon={Eye} label="Visibility" delay={0.2} />
          </NodeWrapper>
          
          <NodeWrapper top="50%" right="5%" translateY="-50%" rotation={-360}>
             <FloatingNode icon={Star} label="Reputation" delay={0.4} />
          </NodeWrapper>
          
          <NodeWrapper bottom="15%" left="50%" translateX="-50%" rotation={-360}>
             <FloatingNode icon={TrendingUp} label="Reach" delay={0.6} />
          </NodeWrapper>
          
          <NodeWrapper top="50%" left="5%" translateY="-50%" rotation={-360}>
             <FloatingNode icon={Users} label="Engagement" delay={0.8} />
          </NodeWrapper>
        </div>
      </motion.div>

      {/* Center Fixed Orb */}
      <div className="absolute flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-zinc-900 shadow-2xl backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-brandBlue/20 to-brandGreen/20 rounded-full blur-md" />
        <motion.div
           animate={{ y: [0, -5, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
           className="relative text-brandBlue"
        >
          <MapPin size={32} fill="currentColor" fillOpacity={0.2} />
        </motion.div>
      </div>
    </div>
  );
};

const NodeWrapper = ({ children, rotation, ...style }: any) => (
  <div className="absolute" style={style}>
    <motion.div
      animate={{ rotate: rotation }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  </div>
);
