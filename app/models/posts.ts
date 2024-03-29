export interface SeedPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  heroCaption: string;
}

export const posts: SeedPost[] = [
  {
    title: "Stop Using Git GUIs",
    slug: "stop-using-git-guis",
    date: "2022-11-12",
    excerpt: "Abstractions come at a price. Learn the fundamentals first.",
    tags: ["craftsmanship"],
    heroCaption:
      "Saturn as seen from the Cassini–Huygens space-research mission. Courtesy of NASA",
  },
  {
    title: "React Testing Library Tips and Tricks",
    slug: "rtl-tips-and-tricks",
    date: "2022-11-19",
    excerpt: "Some quick tips for RTL I've learned recently.",
    tags: ["react"],
    heroCaption:
      "Ribbons of steam and smoke trail space shuttle Atlantis as it touches down on the Shuttle Landing Facility's Runway 15 at NASA's Kennedy Space Center in Florida for the final time. Courtesy of NASA",
  },
  {
    title: "Responding to TDD Pushback",
    slug: "responding-to-tdd-pushback",
    date: "2022-10-24",
    excerpt: "Focus on testing the behavior of you code, not the structure",
    tags: ["craftsmanship"],
    heroCaption:
      "View of the Earth as seen by the Apollo 17 crew traveling toward the moon. Courtesy of NASA",
  },
  {
    title: "2021 Development Environment Review",
    slug: "2021-development-environment-review",
    date: "2022-02-27",
    excerpt: "An annual review of the tools I use for software development",
    tags: ["craftsmanship", "vim"],
    heroCaption:
      "Turning vanes in the 16 Foot Tunnel at Langley. Courtesy of NASA",
  },
  {
    title: "Benefits of Writing Tests First",
    slug: "benefits-of-writing-tests-first",
    date: "2022-10-31",
    excerpt: "Two benefits of writing tests first.",
    tags: ["craftsmanship"],
    heroCaption:
      "Earthrise—the rising Earth greeted the Apollo 8 astronauts on December 24, 1968 as they came from behind the Moon after the fourth nearside orbit. Courtesy of NASA",
  },
  {
    title: "Integration Test Entropy",
    slug: "integration-test-entropy",
    date: "2020-02-19",
    excerpt:
      "Why do integration tests become brittle and lose value over time?",
    tags: ["craftsmanship"],
    heroCaption:
      "The five F-1 engines of the huge Saturn V space vehicle's first stage leave a gigantic trail of flame in the sky above the Kennedy Space Center seconds after liftoff. Courtesy of NASA",
  },
  {
    title: "Learning to Love Testing Library",
    slug: "learning-to-love-testing-library",
    date: "2020-02-07",
    excerpt:
      "How angular-testing-library and react-testing-library changed the way I think about UI tests.",
    tags: ["angular", "react"],
    heroCaption:
      "A simulated view of Mars as it would be seen from the Mars Global Surveyor spacecraft. Courtesy of NASA",
  },
  {
    title: "Message in a Bottle - A Simple Clojure App",
    slug: "message-in-a-bottle",
    date: "2020-12-05",
    excerpt: "I built a very simple app to start learning Clojure",
    tags: ["clojure"],
    heroCaption:
      "Space Shuttle Columbia's STS-4 mission launched from Kennedy Space Center on June 27, 1982. Courtesy of NASA",
  },
  {
    title: "Vim and Vim Emulators",
    slug: "vim-and-vim-emulators",
    date: "2020-11-16",
    excerpt: "Why I use Vim emulators instead of pure vim.",
    tags: ["vim"],
    heroCaption: "Neptune as seen from Voyager II in 1989. Courtesy of NASA",
  },
  {
    title: "10 Tips For Awesome Angular Apps",
    slug: "ten-tips-for-awesome-angular-apps",
    date: "2020-11-07",
    excerpt: "10 tips from my experience building Angular apps.",
    tags: ["angular"],
    heroCaption:
      "The Space Shuttle Challenger launching from Complex 39. Courtesy of NASA",
  },
  {
    title: "Become a Better Developer with Code Katas",
    slug: "introduction-to-code-katas",
    date: "2019-08-18",
    excerpt:
      "Learn how to make yourself a better developer by practicing code katas",
    tags: ["kata"],
    heroCaption:
      "Astronaut Franklin R. Chang-Diaz works with a grapple fixture during extravehicular activity to perform work on the International Space Station Courtesy of NASA",
  },
  {
    title: "Correctness vs. Behavior",
    slug: "correctness-vs-behavior",
    date: "2019-08-11",
    excerpt: "Dueling mentalities when it comes to writing unit tests",
    tags: ["craftsmanship"],
    heroCaption:
      "The Clown-faced Nebula as seen by the Hubble Space Telescope. Courtesy of NASA",
  },
  {
    title: "A Quick Introduction to TDD",
    slug: "introduction-to-tdd",
    date: "2019-08-04",
    excerpt: "What is TDD? Learn the basics in this quick post.",
    tags: ["craftsmanship", "tdd"],
    heroCaption:
      "This picture of Venus was captured by the Mariner 10 spacecraft during its approach to the planet in early 1974. Courtesy of NASA",
  },
  {
    title: "Be an Engineer Not a User",
    slug: "be-an-engineer-not-a-user",
    date: "2015-10-20",
    excerpt: "My thoughts on the mindset of a senior developer.",
    tags: ["craftsmanship"],
    heroCaption:
      "Astronaut Buzz Aldrin, lunar module pilot of the first lunar landing mission, poses for a photograph beside the deployed United States flag during an Apollo 11 Extravehicular Activity on the lunar surface. Courtesy of NASA",
  },
];
