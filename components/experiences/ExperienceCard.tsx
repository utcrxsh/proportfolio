import { MdSchool, MdWork } from 'react-icons/md'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceProps {
  index: number,
  company?: string,
  position?: string,
  desc: string[],
  institute?: string,
  degree?: string,
  duration: string,
}

const Experience = ({ index, company, position, desc, institute, degree, duration }: ExperienceProps) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white dark:bg-grey-800 rounded-xl shadow-md p-6 mb-8 border-l-4 border-violet-600"
    >
      <div className="flex items-center mb-2">
        <span className="mr-3 text-violet-600 text-2xl">
          {company ? <MdWork /> : <MdSchool />}
        </span>
        <h3 className="text-xl font-bold">{company || institute}</h3>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
        {position || degree} <span className="mx-2">|</span> {duration}
      </div>
      <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc ml-6 space-y-1">
        {desc && desc.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Experience;