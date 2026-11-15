export type ExternalLink = {
  label: string;
  href: `https://${string}`;
};

export type ProjectVisual =
  | {
      kind: "architecture" | "tooling";
      label: string;
      caption: string;
      groups: { label: string; items: string[] }[];
    }
  | {
      kind: "endpoints";
      label: string;
      caption: string;
      endpoints: { method: string; path: string }[];
    }
  | {
      kind: "workflow";
      label: string;
      caption: string;
      steps: string[];
    };

export type Project = {
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  details: string;
  highlights: string[];
  stack: string[];
  image?: {
    src: `/${string}`;
    alt: string;
  };
  visual?: ProjectVisual;
  demo?: ExternalLink;
  repository?: ExternalLink;
};

export type Expertise = {
  title: string;
  description: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export type Portfolio = {
  name: string;
  preferredName: string;
  professionalTitle: string;
  focus: string;
  hero: {
    headline: string;
    introduction: string;
  };
  about: string[];
  projects: Project[];
  expertise: Expertise[];
  skillGroups: SkillGroup[];
  experience: Experience[];
  contact: {
    email: string | null;
    socialLinks: ExternalLink[];
  };
  resumePath: `/${string}` | null;
  siteUrl: `https://${string}` | null;
};
