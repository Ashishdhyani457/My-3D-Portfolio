import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";


const Contact = () => {
   const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
   const TEMPLATE_ID =import.meta.env.VITE_TEMPLATE_ID
   const SERVICE_ID = import.meta.env.VITE_SERVICE_ID

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {id,value}=e.target;
    setForm({...form,[id]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name:form.name,
      to_name:"Ashish",
      from_email:form.email,
      to_email:"ashishdhyani457@gmail.com",
      message:form.message
    },PUBLIC_KEY
    ).then(()=>{
      setLoading(false);
      alert('Thank you i will get back to you as soon as possible')
      setForm({name:"",
      email:"",
      message:""
      })
    },(error)=>{
setLoading(false);
console.log(error)
alert("Somthing went wrong")
    }
    
    )

  };
  return (
    <div className="xl-mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact us</h3>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              id="name"
              value={form.id}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              id="email"
              value={form.id}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <textarea
              rows="7"
              id="message"
              value={form.id}
              onChange={handleChange}
              placeholder="What do you want to say"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary  text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
          type="submit"
          className="bg-tertiary font-bold py-3 px-8 outline-none w-fit text-white shadow-mid shadow-primary rounded-xl"
          >
{loading?"Sending......":"Send"}
          </button>
        </form>
      </motion.div>
     
<motion.div
 variants={slideIn("right", "tween", 0.2, 1)}
className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
>
<EarthCanvas/>
</motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
