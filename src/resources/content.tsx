import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";




const person: Person = {
  firstName: "Ansari",
  lastName: "Saima",
  name: `Ansari Saima`,
  role: "Aspiring Data Analyst",
  avatar: "/images/mee.jpg",
  email: "ansarisaimaa582@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, 
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Saima-Ansari2",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ansari-saima2/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/mee.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Analyzing data. Learning daily. Growing constantly.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Saima, a Final Year Student at K.J. Somaiya Institute of Technology, 
      passionate about blending design and technology to build meaningful web experiences.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Building insights through data and continuous learning.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "NASSCOM Foundation",
        timeframe: "Dec 2025 - Ongoing",
        role: "Data Analytics Intern",
        achievements: [
        <>
        Learning and applying data analytics concepts on real organizational data.
          </>,
          <>
            Performed data cleaning and preprocessing using analytical tools.
          </>,
          <>
            Built basic reports and visualizations to communicate insights.
          </>,
        ],
      },

      {
        company: "Godavari Biorefineries Ltd. ",
        timeframe: "Feb 2024 - March 2024",
        role: "GIS Plotting Intern",
        achievements: [
          <>
            Mapped and plotted agricultural land using GIS tools. 
          </>,
          <>
            Collected and organized field data.
          </>,
          <>
            Helped digitize and visualize plot layouts.
          </>,
        ],
      },
      {
        company: " Prodigy Infotech ",
        timeframe: "Sept 2024 - Oct 2024",
        role: " Web Development Intern ",
        achievements: [
          <>
             Built responsive websites using HTML, CSS, and JavaScript.
          </>,
          <>
             Improved frontend design and user experience.
          </>,
          <>
             Used Git for version control and collaboration.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "K.J Somaiya Institute of Technology",
        description: <>Bachelor of Technology in <i>Electronics and Telecommunication Engineering</i> <br />
        2022 - 2026
        </>,
      },
      {
        name: "Elphinstone College",
        description: <>Higher Secondary Certificate (HSC) <br />
        <i> Completed in </i> 2021
        </>,
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {

        title: "Analytics",
        tags: [
          {
            name: "SQL",
            icon: "",
          },
          {
            name: "Advanced Excel",
            icon: "CSS",
          },
          {
            name: "Data Cleaning",
            icon: "Javascript",
          },
          {
            name: "PostgreSQL",
            icon: "Nodejs",
          },
        ],
  
      },
      {
        title: "Data Visualization",
        tags: [
          {
            name: "PowerBi",
          },
          {
            name: "Pivot Table (Excel)",
          },
          {
            name: "Dashboards",
          },
        ],
      }, 
      {
        title: "Tools & Platforms",
        tags: [
          {
            name: "Git",
          },
          {
            name: "VS code",
          },
          {
            name: "Google colab",
          },
        ],
      }, 
       
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
