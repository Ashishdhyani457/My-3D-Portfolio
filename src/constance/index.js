import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  wipro,
  mogi,
  youtube,
  food,
  newsapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer(Beginner)",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [

  {
    title: "React js Developer",
    company_name: "WIPRO",
    icon: wipro,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams, managers, and other developers to create high-quality products.",
      "  Created portal for slack Admins to perform various tasks in channels",
      "Worked with slack Apis to integrate slack bot to perform desired tasks",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "MOGI IO",
    icon: mogi,
    iconBg: "#383E56",
    date: "March 2022 - MAY 2022",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Created view ticket component where users can see the existing Ticket details",
      "Created Logs component where users can see the Tickets past history",
    ],
  },
  
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Ashish's React expertise transformed our project, delivering an intuitive and visually stunning user interface.",
    name: "Harshit",
    designation: "SDE",
    company: "GOOGLE",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ashish does.",
    name: "Krishna",
    designation: "SDE",
    company: "Info Edge",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Ashish's proficiency in React ensured our app's success, showcasing his talent for crafting seamless user experiences.",
    name: "SDE",
    designation: "Shubham",
    company: "Cognizant",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Youtube",
    description:
     "I developed a YouTube clone using React.js. Leveraging React's component-based architecture, the platform offers seamless navigation and smooth video playback. With a focus on user experience, the clone includes features such as likes, and comments, enhancing engagement. Through meticulous testing and optimization, the React. js-based YouTube clone ensures both performance and scalability. This project showcases the versatility of React.js in building sophisticated web applications tailored to modern user demands.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    hosted_url: "https://my-youtube-ashish.netlify.app",
    source_code_link: "https://github.com/Ashishdhyani457/my-youtube",
  },
  {
    name: "Food Villa",
    description:
      "Developed a food ordering web application using React.js, delivering a dynamic and intuitive user experience. Leveraging React's state management and component reusability, the app enables seamless browsing. Through integration with Swiggy APIs, users can explore menus, add and remove items on cart. The responsive design ensures accessibility across devices, catering to a broad user base. This project showcases React.js's capability in building feature-rich and visually appealing web applications for diverse industries like food service.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    hosted_url: "https://foodvilla-ashish.netlify.app",
    source_code_link: "https://github.com/Ashishdhyani457/foodvilla",
  },
  {
    name: "News App",
    description:
      "I developed a News app utilizing React.js, offering users a streamlined platform to access current events and breaking news. Leveraging React's efficient rendering and component structure, the app ensures swift navigation and content delivery. Integrated APIs enable real-time updates and comprehensive coverage across various topics and sources. The app's responsive design caters to users accessing news on different devices, prioritizing accessibility. This project exemplifies React.js's versatility in crafting dynamic and user-centric applications, empowering audiences to stay informed effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "infiniteScroll",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: newsapp,
    hosted_url: "https://ashish-newsapp.netlify.app",
    source_code_link: "https://github.com/Ashishdhyani457/NewsApp",
  },
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
