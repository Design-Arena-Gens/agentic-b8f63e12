'use client';

import { useMemo, useState } from "react";

type StoryBeat = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
  spotlight?: string;
};

const storyBeats: StoryBeat[] = [
  {
    id: "oath",
    title: "Morning Oath",
    subtitle: "Bright street, brighter promise",
    description:
      "Officer Snowball swore today would be spotless. Ricky Rat twirled his chain with confidence, and Gogo the pigeon begged for a corn-stealing ceasefire.",
    quote: "“Today, NO one will break the law! Especially you two.” — Officer Snowball"
  },
  {
    id: "intrusion",
    title: "Scooter Surprise",
    subtitle: "A screech, a blur, a squirrel",
    description:
      "A micro-scooter slices through the silence. Sunglasses shimmer. The squirrel grins. The chase begins before anyone can blink.",
    quote: "“Catch me if you can!” — Scooter Squirrel",
    spotlight: "Top speed: 14 mph; Confidence level: 110%."
  },
  {
    id: "chaos",
    title: "Maximum Chaos",
    subtitle: "Three heroes, zero coordination",
    description:
      "Ricky trips over his tail mid-strut. Gogo flaps furiously yet hovers about four inches. Officer Snowball dashes… then immediately gets distracted by a butterfly.",
    quote: "“I break dance moves, not laws!” — Ricky Rat",
    spotlight: "Collateral damage: 1 toppled trash can, 4 spectators crying from laughter."
  },
  {
    id: "aftermath",
    title: "Breathless Pause",
    subtitle: "The squirrel wins the sprint",
    description:
      "The scooter is gone, the trio is winded, and the street is filled with giggles. Gogo groans about impending doom. Ricky declares this the entertainment of the year.",
    quote: "“Nah bro… THIS is the entertainment!” — Ricky Rat"
  },
  {
    id: "resolve",
    title: "Teamwork-ish",
    subtitle: "Hopeful chaos is still hope",
    description:
      "Snowball stands tall again, convinced that teamwork still counts—even if it involves a butterfly break. The crew agrees: tomorrow they'll plan. Maybe.",
    quote: "“Teamwork makes the dream w—” — Officer Snowball",
    spotlight: "Mission status: wildly unfinished. Morale: unexpectedly high."
  }
];

export default function InteractiveStory() {
  const [activeBeat, setActiveBeat] = useState<string>(storyBeats[1]?.id ?? storyBeats[0].id);

  const currentBeat = useMemo(
    () => storyBeats.find((beat) => beat.id === activeBeat) ?? storyBeats[0],
    [activeBeat]
  );

  return (
    <section className="card interactive-story">
      <header className="section-heading">
        <div>
          <p className="section-kicker">Scene Tracker</p>
          <h2>Ride-along Timeline</h2>
        </div>
        <p className="section-description">
          Click through the beats to relive the most delightfully disastrous chase Critterburg has
          ever seen.
        </p>
      </header>

      <div className="story-grid">
        <div className="timeline">
          {storyBeats.map((beat, index) => {
            const position = index + 1;
            const isActive = beat.id === currentBeat.id;
            return (
              <button
                key={beat.id}
                onClick={() => setActiveBeat(beat.id)}
                className={`timeline-node ${isActive ? "is-active" : ""}`}
                aria-current={isActive}
              >
                <span className="timeline-step">{position < 10 ? `0${position}` : position}</span>
                <span>
                  <span className="timeline-title">{beat.title}</span>
                  <span className="timeline-subtitle">{beat.subtitle}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="timeline-detail">
          <div className="detail-card">
            <h3>{currentBeat.title}</h3>
            <p className="detail-subtitle">{currentBeat.subtitle}</p>
            <p className="detail-body">{currentBeat.description}</p>
            {currentBeat.quote ? <blockquote>{currentBeat.quote}</blockquote> : null}
            {currentBeat.spotlight ? (
              <div className="detail-spotlight">
                <span className="spotlight-label">Field Note</span>
                <p>{currentBeat.spotlight}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
