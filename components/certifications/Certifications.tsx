import { motion } from "framer-motion";
import { certification } from "@/types/main";
import CertificationCard from "./CertificationCard";
import SectionWrapper from "../SectionWrapper";

interface Props {
  certificationsData: certification[];
}

const Certifications = ({ certificationsData }: Props) => {
  return (
    <SectionWrapper id="certifications" className="mx-4 md:mx-0 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl text-center">Certifications</h2>
        <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
          {certificationsData.map((certification: certification, index: number) => (
            <CertificationCard
              key={index}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Certifications; 