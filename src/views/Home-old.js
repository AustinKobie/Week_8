import { useState } from "react";
import Counter from "../components/Counter";

export default function Home() {
  const [counters, setCounters] = useState([
    {
      title: "Pushup Counter",
      initialCount: 10,
    },
    {
      title: "Situp Counter",
      initialCount: 15,
    },
    {
      title: "Squat Counter",
      initialCount: 20,
    },
    {
      title: "Laps Run",
      initialCount: 100,
    },
  ]);

  return (
    <div className="App">
      {counters.map((counter) => (
        <Counter title={counter.title} initialCount={counter.initialCount} />
      ))}
    </div>
  );
}
