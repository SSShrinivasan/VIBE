import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface FloatingNodeProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  delay?: number;
}

export const FloatingNode = ({ icon: Icon, label, className, delay = 0 }: FloatingNodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      className={cn(
        "absolute flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2 backdrop-blur-md shadow-2xl",
        className
      )}
    >
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue"
      >
        <Icon size={16} />
      </motion.div>
      <span className="text-xs font-semibold text-white/90 whitespace-nowrap">{label}</span>
      
      {/* Connector Line - simplified to a point toward circle center */}
      <div className="absolute -z-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
};
