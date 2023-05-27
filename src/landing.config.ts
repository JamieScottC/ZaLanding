type link = {
  name: String;
  link: string;
};

interface category {
  title: String;
  children: Array<link>;
  color: String;
}

export const categories: Array<category> = [
  {
    title: "socials",
    color: "green",
    children: [
      {
        name: "twitter",
        link: "https://twitter.com",
      },
      {
        name: "reddit",
        link: "https://reddit.com",
      },
    ],
  },
  {
    title: "tools",
    color: "teal",
    children: [
      {
        name: "github",
        link: "https://github.com",
      },
    ],
  },
  {
    title: "leisure",
    color: "blue",
    children: [
      {
        name: "youtube",
        link: "https://youtube.com",
      },
      {
        name: "twitch",
        link: "https://twitch.tv",
      },
    ],
  },
  {
    title: "dev",
    color: "purple",
    children: [
      {
        name: "repo",
        link: "https://repo.new",
      },
      {
        name: "typewolf",
        link: "https://typewolf.com",
      },
    ],
  },
  {
    title: "other",
    color: "rose",
    children: [
      {
        name: "monkeytype",
        link: "https://monkeytype.com",
      },
      {
        name: "front end masters",
        link: "https://frontendmasters.com",
      },
    ],
  },
];