import { Suspense, lazy } from "react";

const Hero = lazy(() =>
  import("./features/hero/Hero").then((m) => ({ default: m.Hero }))
);

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <p className="text-white/60">Loading...</p>
          </div>
        }
      >
        <Hero />
      </Suspense>
    </div>
  );
}

export default App;