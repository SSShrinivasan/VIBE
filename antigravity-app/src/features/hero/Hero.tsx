import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Container } from "../../components/ui/Container";
import { HeroCircle } from "./HeroCircle";
import { LogoStrip } from "./LogoStrip";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-12 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-brandBlue/10 blur-[150px] rounded-full" />
      
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur-md"
          >
            <span className="mr-2 flex h-2 w-2 rounded-full bg-brandGreen shadow-[0_0_8px_#22c55e]" />
            Rank your business higher
          </motion.div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-7xl">
            Dominate Local{" "}
            <span className="bg-gradient-to-r from-brandGreen to-brandBlue bg-clip-text text-transparent">
              Search
            </span>
          </h1>
          
          <p className="mt-6 max-w-lg text-lg text-zinc-400">
            Increase your local visibility and attract more customers with our AI-driven SEO platform. Managed rankings, reputation, and reach.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row max-w-md">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                <Search size={18} />
              </div>
              <Input 
                placeholder="Enter your website URL" 
                className="pl-12 bg-zinc-900/50"
              />
            </div>
            <Button className="font-bold sm:w-32">Try Now</Button>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-xs text-zinc-500 uppercase font-medium tracking-wide">Popular:</span>
            <div className="flex gap-2">
              <SuggestionBadge flag="🇺🇸" label="USA" />
              <SuggestionBadge flag="🇦🇪" label="UAE" />
              <SuggestionBadge flag="🇮🇳" label="India" />
            </div>
          </div>

          <LogoStrip />
        </motion.div>

        {/* Right Side: Animated Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex items-center justify-center"
        >
          <HeroCircle />
        </motion.div>
      </Container>
    </section>
  );
};

const SuggestionBadge = ({ flag, label }: { flag: string; label: string }) => (
  <button className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-xs transition-colors hover:bg-white/10">
    <span>{flag}</span>
    <span className="text-zinc-400">{label}</span>
  </button>
);
