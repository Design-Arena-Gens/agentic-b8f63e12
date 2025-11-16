import CharacterGallery from "./components/character-gallery";
import InteractiveStory from "./components/interactive-story";
import StoryInsights from "./components/story-insights";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-content">
          <p className="hero-label">Downtown Critterburg</p>
          <h1 className="hero-title">
            Operation Scooter: <span className="accent">The Not-So-Serious Chase</span>
          </h1>
          <p className="hero-lede">
            It started as a morning vow to keep the peace. It ended with a silver scooter, a
            butterfly, and three friends realizing that comedy might just be their town&apos;s
            greatest strength.
          </p>
        </div>
        <div className="hero-highlight">
          <div className="badge">100% Law-Abiding (ish)</div>
          <p>
            Officer Snowball, Ricky Rat, and Gogo tried to stop a scooter-riding squirrel. They
            didn&apos;t succeed, but they definitely entertained the whole block.
          </p>
        </div>
      </section>

      <CharacterGallery />
      <InteractiveStory />
      <StoryInsights />
    </main>
  );
}
