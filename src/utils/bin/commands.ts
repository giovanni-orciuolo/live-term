// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. Welcome to my website!
I work as the Lead Software Engineer at <a href="https://overzoom.it" target="_blank">Overzoom</a>, specializing in REST API development and backend technologies.
I have over 5 years of experience in the field, and I'm always looking for new interesting challenges!

To see a comprehensive list of my skills, type 'skills'.
To see a list of projects I've worked on and currently working on, type 'projects'.
To download my CV, type 'resume'.
To visit my GitHub profile, type 'github' or <a href="https://github.com/giovanni-orciuolo">click here</a>.
To visit my LinkedIn profile, type 'linkedin' or <a href="https://www.linkedin.com/in/giovanni-orciuolo">click here</a>.
To open my blog (written in Italian), type 'blog'.`;
};

export const skills = async (args: string[]): Promise<string> => {
  return `Programming languages: C, C++, C#, Go, TypeScript, Java, Kotlin, Python, Dart.
Learning: Rust and Elixir.
Libraries, frameworks, etc: React, Angular, Svelte, Flutter, NodeJS (Express/Fastify), Mongoose.
Databases: MongoDB if I need NoSQL, PostgreSQL if I need SQL.
IDE and tools: VS Code, IntelliJ IDEA, WebStorm, Goland, Postman, Sublime Text.
`;
}

export const blog = async (args: string[]): Promise<string> => {
  window.open(`https://blog.or2.life`);
  return `Opening my blog...`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening GitHub...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening LinkedIn...';
};

export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching Google for ${args.join(' ')}...`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return ``;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Unfortunately, I cannot afford more directories... :(`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
   ██████╗ ██████╗ ██████╗ 
  ██╔═══██╗██╔══██╗╚════██╗
  ██║   ██║██████╔╝ █████╔╝
  ██║   ██║██╔══██╗██╔═══╝ 
  ╚██████╔╝██║  ██║███████╗
   ╚═════╝ ╚═╝  ╚═╝╚══════╝
                           
Type 'about' or 'help' to get started.
Type 'sumfetch' to display the summary.
`;
};
