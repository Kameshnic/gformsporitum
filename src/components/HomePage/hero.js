"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  "Together we compete, Together we conquer!",
  "Winners never quit, and quitters never win.",
  "Hard work beats talent when talent doesn't work hard.",
  "The harder the battle, the sweeter the victory.",
];

const sportsSymbols = ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🏏","⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🏏", "⚾", "🎾", "🏐", "🏉", "🏏","⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🏏"];

export default function Hero() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.heroContainer}>
      {/* Flying Sports Symbols */}
      {sportsSymbols.map((symbol, index) => (
        <motion.div
          key={index}
          style={{ ...styles.sportsSymbol, left: Math.random() * window.innerWidth }}
          initial={{ y: -100, x: Math.random() * window.innerWidth }}
          animate={{ y: window.innerHeight, x: Math.random() * window.innerWidth }}
          transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, ease: "linear" }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Foreground Content */}
      <div style={styles.contentWrapper}>
        {/* Club Title */}
        <motion.h1 style={styles.clubTitle} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          Sportium Club
        </motion.h1>

        {/* Motivational Flash Cards */}
        <div style={styles.flashCardsContainer}>
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              style={{
                ...styles.flashCard,
                transform: hoveredCard === i ? "scale(1.1)" : "scale(1)",
                boxShadow: hoveredCard === i ? "0 0 30px rgba(255, 165, 0, 0.8)" : "5px 5px 15px rgba(255, 165, 0, 0.5)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.3 }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {quote}
            </motion.div>
          ))}
        </div>

        {/* Website Gateway Button */}
        <motion.div
          style={styles.gatewayButton}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 165, 0, 0.8)" }}
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeHcXVUYbT4MsVVKGDAcSoj3_fgOEB-brZ2IEDC9AI4MrsoAw/viewform', '_blank')}
        >
         ➡️
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  heroContainer: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    overflow: "hidden",
  },
  sportsSymbol: {
    position: "absolute",
    fontSize: "2rem",
  },
  contentWrapper: {
    position: "relative",
    textAlign: "center",
    zIndex: 10,
  },
  clubTitle: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "orange",
    marginBottom: "20px",
    textTransform: "uppercase",
    textShadow: "0 0 20px rgba(255, 165, 0, 0.8)",
  },
  flashCardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "40px",
  },
  flashCard: {
    background: "linear-gradient(135deg, orange, darkorange)",
    color: "black",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "5px 5px 15px rgba(255, 165, 0, 0.5)",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  },
  gatewayButton: {
    marginTop: "40px",
    backgroundColor: "orange",
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: "20px 40px",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(255, 165, 0, 0.8)",
    transition: "all 0.3s ease-in-out",
  },
};