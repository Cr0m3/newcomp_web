import { useState, useEffect } from 'react'
import './App.css'

const Typewriter = ({ text, speed = 50, onComplete }: { text: string, speed?: number, onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return <span>{displayedText}</span>;
};

function App() {
  const [logs, setLogs] = useState<string[]>([]);
  const [phase, setPhase] = useState(0);

  const fullLogs = [
    "> INITIALIZING SYSTEM...",
    "> LOADING KERNEL MODULES...",
    "> ESTABLISHING SECURE CONNECTION...",
    "> ACCESS GRANTED.",
    "> WELCOME TO NEWCOMP_WEB v0.4.2",
    "> RUNNING CRAZY_IT_SCRIPT.SH...",
  ];

  useEffect(() => {
    if (phase < fullLogs.length) {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, fullLogs[phase]]);
        setPhase(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  return (
    <div className="crt-container">
      <div className="crt-overlay" />
      <div className="crt-flicker" />
      <div className="scanline" />
      
      <header className="terminal-header">
        <h1 className="glitch" data-text="NEWCOMP_WEB">
          NEWCOMP_WEB
        </h1>
        <p>TERMINAL ID: 0x8823-AFFE-9921</p>
      </header>

      <main className="terminal-content">
        {logs.map((log, index) => (
          <div key={index} className="output">
            <Typewriter text={log} speed={30} />
          </div>
        ))}
        {phase === fullLogs.length && (
          <div className="terminal-interactive">
            <p className="command">
              $ <Typewriter text="cat about_us.txt" speed={50} onComplete={() => setPhase(p => p + 1)} />
            </p>
          </div>
        )}
        {phase > fullLogs.length && (
          <div className="output">
            <p>--- ABOUT US ---</p>
            <p>WE ARE THE ARCHITECTS OF THE DIGITAL VOID.</p>
            <p>BUILDING CRAZY SOLUTIONS FOR A SANE WORLD.</p>
            <p>----------------</p>
            <p className="command">$ <span className="cursor" /></p>
          </div>
        )}
      </main>

      <footer className="status-bar">
        <span>STATUS: OPERATIONAL</span>
        <span>LATENCY: 14ms</span>
        <span>USER: ROOT</span>
      </footer>
    </div>
  )
}

export default App
