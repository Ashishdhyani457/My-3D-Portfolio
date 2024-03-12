import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constance";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  hosted_url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
       

        <div className="absolute inset-0 flex justify-end my-3 card-img_hover">
          <div
          
            onClick={() =>  window.open(hosted_url, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            LIVE
            {/* <img
              src={github}
              alt="github"
              className="w-1/2 h=1/2"
              object-contain
            /> */}
          </div>

          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h=1/2"
              object-contain
            />
          </div>
        </div>  
      </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-14[px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
{tags.map((tag)=>(
  <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I developed a diverse range of applications using React.js, including a YouTube clone, a food ordering app, and a news aggregator. Leveraging React's component-based architecture, each app offers a seamless user experience with intuitive navigation and responsive design. From video streaming and interactive menus to real-time news updates, these applications showcase React's versatility in handling various functionalities. Through integration with APIs and meticulous attention to detail, each project ensures robust performance and user engagement. This multi-faceted endeavor demonstrates React.js's adaptability in crafting sophisticated and feature-rich web solutions across different domains.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
