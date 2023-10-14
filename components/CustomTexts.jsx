'use client';
import { motion } from "framer-motion";
import { textContainer,textVariant2 } from "../utils/motion";
export const TypingText = (title,textstyles) => {
  console.log(title ,"s=>>>>>>>>>>>>")
  return(
    <motion.p 
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${title.textstyles}`}
    >

        {Array.from(title.title).map((letter, index) => (
  <motion.span
    variants={textVariant2}
    key={index}
  >
    {letter === " " ? "\u00A0" : letter}
  </motion.span>
))}

    </motion.p>
  )
}

 
  


export const TitleText = (title,textstyles) => (
  
  <motion.h2 
  variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${title.textstyles}`}
  >
{title.title}

  </motion.h2>
);
