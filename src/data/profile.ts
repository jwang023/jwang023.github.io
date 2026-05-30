export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  type: "article" | "inproceedings" | "preprint" | "misc";
  status?: string;
  keywords: string[];
  bibtexKey: string;
  arxivId?: string;
  url?: string;
  doi?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Highlight = {
  value: string;
  label: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type Profile = {
  name: string;
  title: string;
  affiliation: string;
  supervisor: string;
  location: string;
  email: string;
  websiteUrl: string;
  cvUrl: string;
  portraitUrl: string;
  portraitAlt: string;
  summary: string;
  nav: NavItem[];
  highlights: Highlight[];
  education: Education[];
  publications: Publication[];
};

export const profile: Profile = {
  name: "Jinxin Wang",
  title: "PhD Student in Mathematics",
  affiliation: "University of Ottawa",
  supervisor: "Prof. Raluca Balan",
  location: "Ottawa, Canada",
  email: "jwang023@uottawa.ca",
  websiteUrl: "https://your-domain.example",
  cvUrl: "/cv-placeholder.pdf",
  portraitUrl: "/profile.jpg",
  portraitAlt: "Profile photo for Jinxin Wang",
  summary:
    "I am a PhD student in mathematics interested in probability theory, especially stochastic analysis and stochastic partial differential equations. My PhD supervisor is Prof. Raluca Balan, and my work focuses on SPDE models such as the Hyperbolic Anderson Model, Parabolic Anderson Model, and KPZ equation driven by different types of noise.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Brief CV", href: "/brief-cv" },
    { label: "Publications", href: "/research" },
    { label: "Plog", href: "/plog" },
    { label: "Contact", href: "/contact" },
  ],
  highlights: [
    { value: "1", label: "Preprint" },
    { value: "SPDEs", label: "Current focus" },
    { value: "2025 Fall", label: "PhD started" },
  ],
  education: [
    {
      degree: "Doctor of Philosophy in Mathematics and Statistics",
      institution: "University of Ottawa",
      period: "2025 - Present",
    },
    {
      degree: "Master of Science in Mathematics and Applied Mathematics",
      institution: "University of Science and Technology of China",
      period: "2023 - 2024",
    },
    {
      degree: "Bachelor of Science in Mathematics and Applied Mathematics",
      institution: "University of Science and Technology of China",
      period: "2019 - 2023",
    },
  ],
  publications: [
    {
      title: "SPDEs with time-independent Lévy colored noise",
      authors: ["Raluca M. Balan", "Jinxin Wang"],
      venue: "arXiv preprint",
      year: "2026",
      type: "preprint",
      status: "Preprint",
      keywords: ["SPDEs", "Lévy colored noise", "Malliavin calculus"],
      bibtexKey: "balan2026spdes-levy-colored-noise",
      arxivId: "2604.24914",
      url: "https://arxiv.org/abs/2604.24914",
      doi: "10.48550/arXiv.2604.24914",
    },
  ],
};
