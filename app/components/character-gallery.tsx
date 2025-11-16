type CharacterProfile = {
  id: string;
  name: string;
  role: string;
  description: string;
  trait: string;
};

const characters: CharacterProfile[] = [
  {
    id: "snowball",
    name: "Officer Snowball",
    role: "Optimistic Patrol Cat",
    description:
      "Feline law enforcer with boundless pep and a weakness for butterflies. Believes in rules almost as much as glittering badges.",
    trait: "Weakness: fluttery distractions"
  },
  {
    id: "ricky",
    name: "Ricky Rat",
    role: "Street-Dance Virtuoso",
    description:
      "Swagger-heavy rodent, chief hype creature of the block, and certified tail-tripping hazard. Never met a beat he couldn't pop-lock.",
    trait: "Claim to fame: breaks moves, not laws"
  },
  {
    id: "gogo",
    name: "Gogo",
    role: "Corn-Obsessed Pigeon",
    description:
      "Peacekeeping bird who just wants a quiet snack time. Feather-ruffled by petty crime and mediocre seed quality.",
    trait: "Daily mantra: ‘Protect the kernels’"
  },
  {
    id: "squirrel",
    name: "Scooter Squirrel",
    role: "High-Octane Hijinks Artist",
    description:
      "Mini wheels, mega mischief. Wears shades, dodges heroes, and drifts through town like gravity is merely a suggestion.",
    trait: "Catchphrase: “Catch me if you can!”"
  }
];

export default function CharacterGallery() {
  return (
    <section className="card">
      <header className="section-heading">
        <div>
          <p className="section-kicker">Meet the Squad</p>
          <h2>Hero Files & Suspect Dossier</h2>
        </div>
        <p className="section-description">
          Four personalities, zero coordination, infinite entertainment potential. Study their case
          notes before the next scooter sighting.
        </p>
      </header>

      <div className="character-grid">
        {characters.map((character) => (
          <article key={character.id} className="character-card">
            <div className="character-emblem" aria-hidden>
              <span>{character.name.charAt(0)}</span>
            </div>
            <header>
              <h3>{character.name}</h3>
              <p className="character-role">{character.role}</p>
            </header>
            <p className="character-description">{character.description}</p>
            <p className="character-trait">{character.trait}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
