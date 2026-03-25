import type { CSSProperties, FC } from "react";

const navItems = ["Products", "Solution", "Resources", "Pricing"];

const App: FC = () => {
  return (
    <div style={styles.page}>
      <style>{responsiveStyles}</style>

      <header style={styles.header}>
        <div style={styles.headerInner}>
          <img
            src="https://storefries.com/new-page-img/logo.svg"
            alt="Storefries"
            style={styles.logo}
          />

          <nav className="sf-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href="#" style={styles.navLink}>
                {item}
              </a>
            ))}
          </nav>

          <div style={styles.headerActions}>
            <button type="button" style={styles.bookDemoBtn}>
              Book Demo
            </button>
            <button type="button" style={styles.signInBtn}>
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main style={styles.main}>
        <section className="sf-hero-grid" style={styles.heroGrid}>
          <div style={styles.heroContent}>
            <p style={styles.kicker}>Local SEO Platform</p>
            <h1 style={styles.heading}>Dominate Local Search</h1>
            <p style={styles.subtext}>
              Build stronger local visibility, optimize every location listing,
              and convert nearby shoppers into loyal customers with one
              streamlined workflow.
            </p>

            <form
              style={styles.searchWrap}
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search business category or location"
                aria-label="Search business category or location"
                style={styles.input}
              />
              <button type="submit" style={styles.searchBtn}>
                Search
              </button>
            </form>
          </div>

          <div style={styles.imageWrap}>
            <img
              src="https://storefries.com/new-page-img/storefries-main-banner-image-finalist.png"
              alt="Storefries dashboard preview"
              style={styles.heroImage}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
    color: "#0f172a",
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    borderBottom: "1px solid rgba(148, 163, 184, 0.25)",
    backgroundColor: "rgba(248, 250, 252, 0.88)",
    backdropFilter: "blur(10px)",
  },
  headerInner: {
    maxWidth: 1160,
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  },
  logo: {
    width: 150,
    height: "auto",
    flexShrink: 0,
  },
  navLink: {
    color: "#334155",
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 600,
  },
  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  bookDemoBtn: {
    border: "1px solid #6366f1",
    backgroundColor: "transparent",
    color: "#4338ca",
    padding: "10px 16px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
  },
  signInBtn: {
    border: "none",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
    color: "#ffffff",
    padding: "10px 18px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(99, 102, 241, 0.25)",
  },
  main: {
    maxWidth: 1160,
    margin: "0 auto",
    padding: "56px 24px 88px",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
    alignItems: "center",
    gap: 42,
  },
  heroContent: {
    maxWidth: 560,
  },
  kicker: {
    margin: "0 0 10px",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: 700,
    color: "#6366f1",
  },
  heading: {
    margin: 0,
    fontSize: "clamp(2.2rem, 4.5vw, 3.7rem)",
    lineHeight: 1.05,
    fontWeight: 800,
    color: "#0f172a",
  },
  subtext: {
    margin: "18px 0 30px",
    fontSize: 18,
    lineHeight: 1.6,
    color: "#475569",
  },
  searchWrap: {
    display: "flex",
    alignItems: "center",
    borderRadius: 999,
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff",
    padding: 6,
    boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
    maxWidth: 520,
    gap: 8,
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "10px 16px",
    borderRadius: 999,
    fontSize: 15,
    color: "#0f172a",
    minWidth: 0,
  },
  searchBtn: {
    border: "none",
    borderRadius: 999,
    padding: "11px 22px",
    fontWeight: 700,
    background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
    color: "#ffffff",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  imageWrap: {
    display: "flex",
    justifyContent: "center",
  },
  heroImage: {
    width: "100%",
    maxWidth: 540,
    height: "auto",
    borderRadius: 24,
    boxShadow: "0 18px 48px rgba(30, 41, 59, 0.16)",
  },
};

const responsiveStyles = `
  .sf-nav {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  @media (max-width: 960px) {
    .sf-nav {
      display: none;
    }

    .sf-hero-grid {
      grid-template-columns: minmax(0, 1fr) !important;
      gap: 34px !important;
    }
  }

  @media (max-width: 640px) {
    .sf-hero-grid form {
      flex-direction: column;
      border-radius: 20px !important;
      align-items: stretch !important;
    }

    .sf-hero-grid form button {
      width: 100%;
    }
  }
`;

export default App;
