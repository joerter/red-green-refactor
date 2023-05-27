export interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    title: "Stop Using Git GUIs",
    slug: "stop-using-git-guis",
    date: "2022-11-12",
    excerpt: "Abstractions come at a price. Learn the fundamentals first.",
    tags: ["craftsmanship"],
  },
  {
    title: "React Testing Library Tips and Tricks",
    slug: "rtl-tips-and-tricks",
    date: "2022-11-19",
    excerpt: "Some quick tips for RTL I've learned recently.",
    tags: ["react"],
  },
  {
    title: "Responding to TDD Pushback",
    slug: "responding-to-tdd-pushback",
    date: "2022-10-24",
    excerpt: "Focus on testing the behavior of you code, not the structure",
    tags: ["craftsmanship"],
  },
  {
    title: "2021 Development Environment Review",
    slug: "2021-development-environment-review",
    date: "2022-02-27",
    excerpt: "An annual review of the tools I use for software development",
    tags: ["craftsmanship", "vim"],
  },
  {
    title: "Benefits of Writing Tests First",
    slug: "benefits-of-writing-tests-first",
    date: "2022-10-31",
    excerpt: "Two benefits of writing tests first.",
    tags: ["craftsmanship"],
  },
  {
    title: "Integration Test Entropy",
    slug: "integration-test-entropy",
    date: "2020-02-19",
    excerpt:
      "Why do integration tests become brittle and lose value over time?",
    tags: ["craftsmanship"],
  },
  {
    title: "Learning to Love Testing Library",
    slug: "learning-to-love-testing-library",
    date: "2020-02-07",
    excerpt:
      "How angular-testing-library and react-testing-library changed the way I think about UI tests.",
    tags: ["angular", "react"],
  },
  {
    title: "Message in a Bottle - A Simple Clojure App",
    slug: "message-in-a-bottle",
    date: "2020-12-05",
    excerpt: "I built a very simple app to start learning Clojure",
    tags: ["clojure"],
  },
  {
    title: "Vim and Vim Emulators",
    slug: "vim-and-vim-emulators",
    date: "2020-11-16",
    excerpt: "Why I use Vim emulators instead of pure vim.",
    tags: ["vim"],
  },
  {
    title: "10 Tips For Awesome Angular Apps",
    slug: "ten-tips-for-awesome-angular-apps",
    date: "2020-11-07",
    excerpt: "10 tips from my experience building Angular apps.",
    tags: ["angular"],
  },
  {
    title: "Become a Better Developer with Code Katas",
    slug: "introduction-to-code-kata",
    date: "2019-08-18",
    excerpt:
      "Learn how to make yourself a better developer by practicing code katas",
    tags: ["kata"],
  },
  {
    title: "Correctness vs. Behavior",
    slug: "correctness-vs-behavior",
    date: "2019-08-11",
    excerpt: "Dueling mentalities when it comes to writing unit tests",
    tags: ["craftsmanship"],
  },
  {
    title: "A Quick Introduction to TDD",
    slug: "introduction-to-tdd",
    date: "2019-08-04",
    excerpt: "What is TDD? Learn the basics in this quick post.",
    tags: ["craftsmanship", "tdd"],
  },
  {
    title: "Be an Engineer Not a User",
    slug: "be-an-engineer-not-a-user",
    date: "2015-10-20",
    excerpt: "My thoughts on the mindset of a senior developer.",
    tags: ["craftsmanship"],
  },
];
