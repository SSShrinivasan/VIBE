import { motion } from "framer-motion";

const LOGOS = [
  { name: "FSO", logo: "https://vibe-ui.com/logos/fso.png" }, // Placeholders since I don't have local pngs
  { name: "TCare", logo: "https://vibe-ui.com/logos/tcare.png" },
  { name: "Apex", logo: "https://vibe-ui.com/logos/apex.png" },
  { name: "Global", logo: "https://vibe-ui.com/logos/global.png" },
];

export const LogoStrip = () => {
  return (
    <div className="mt-12">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
        Trusted by 500+ local companies
      </p>
      <div className="flex flex-wrap items-center gap-8 md:gap-12">
        {LOGOS.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="group cursor-pointer grayscale transition-all duration-300 hover:grayscale-0"
          >
            {/* Using a placeholder text/style since remote images might fail */}
            <span className="text-xl font-bold text-zinc-600 group-hover:text-white/80 transition-colors">
              {logo.name}
              <span className="text-brandBlue">.</span>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
