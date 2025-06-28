
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export type Blog = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}
export type Experience = {
  title: string;
  company: string;
  location: string;
  date: string;
  responsibilities: string[];
};

export type Education = {
  qualification: string;
  institution: string;
  year: string;
}

export type Skill = {
  softSkills:string[];
  hardSkills:string[];
  others:string[];
}