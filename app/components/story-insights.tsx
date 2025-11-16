const insights = [
  {
    id: "lesson",
    title: "Lesson #1: Chaos Can Spark Camaraderie",
    body:
      "No one caught the squirrel, yet everyone discovered a shared sense of humor. Sometimes the mission isn't success—it's connection."
  },
  {
    id: "lesson-two",
    title: "Lesson #2: Preparation Beats Panic",
    body:
      "Tomorrow's plan: practice sprints for Ricky, gliding drills for Gogo, and butterfly blinders for Snowball. A little prep might turn the tide."
  },
  {
    id: "lesson-three",
    title: "Lesson #3: Celebrate The Attempt",
    body:
      "Critterburg didn't get justice, but it got a story worth retelling. Celebrate effort, especially when it brings the community together."
  }
];

export default function StoryInsights() {
  return (
    <section className="card">
      <header className="section-heading">
        <div>
          <p className="section-kicker">After Action Reflections</p>
          <h2>What We Learned</h2>
        </div>
        <p className="section-description">
          Even a runaway squirrel can leave a trail of life lessons. The trio jotted these down once
          they finally caught their breath.
        </p>
      </header>

      <ul className="insight-list">
        {insights.map((insight) => (
          <li key={insight.id} className="insight-card">
            <h3>{insight.title}</h3>
            <p>{insight.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
