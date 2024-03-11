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
          Web-based platform that allows users to search, book, and manage car
          rentals from various providers, providing a convenient and efficient
          solution for transportation needs. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Mattis nunc sed blandit libero volutpat
          sed cras ornare. Est pellentesque elit ullamcorper dignissim cras
          tincidunt lobortis feugiat vivamus. Cum sociis natoque penatibus et
          magnis dis parturient. Sed vulputate mi sit amet mauris commodo quis
          imperdiet massa. Sodales neque sodales ut etiam sit amet nisl. Eu
          lobortis elementum nibh tellus molestie nunc. Vitae suscipit tellus
          mauris a. Maecenas volutpat blandit aliquam etiam erat velit
          scelerisque. Vestibulum sed arcu non odio euismod lacinia. In metus
          vulputate eu scelerisque felis imperdiet proin. Praesent elementum
          facilisis leo vel. Elementum curabitur vitae nunc sed vel
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
