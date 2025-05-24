import { education, experience } from "@/types/main"
import { useState } from "react"
import { ViewAll } from "../projects/Projects"
import SectionWrapper from "../SectionWrapper"
import ExperienceCard from "./ExperienceCard"

interface Props {
    experienceData: experience[]
    educationData: education[]
}

const Experiences = ({ experienceData, educationData }: Props) => {

    const [show, setShow] = useState("Experience")
    const [viewAll, setViewAll] = useState(false)

    const [experiences, setExperiences] = useState([...experienceData].reverse() as experience[])
    const [educations, setEducations] = useState([...educationData].reverse() as education[])

    return (
        <SectionWrapper id="experience" className="min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-8">Experience & Education</h2>

            <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center shadow-md">
                {['Experience', 'Education'].map((e, i) => (
                    <button key={i} onClick={() => setShow(e)} className={`py-2 px-6 rounded-lg font-semibold transition-colors text-base shadow-sm ${show === e ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 hover:dark:bg-grey-900 text-black dark:text-white'}`}>{e}</button>
                ))}
            </div>

            <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4 mt-8">
                <div className="relative wrap overflow-visible p-0 md:py-0 md:px-0 flex flex-col">
                    {(viewAll ? (show === "Experience" ? experiences : educations) : (show === "Experience" ? experiences : educations).slice(0, 2)).map((e, i) => (
                        // @ts-ignore
                        <ExperienceCard key={i} {...e} index={i} />
                    ))}
                </div>
            </div>

            {(show === "Experience" ? experiences : educations).length > 2 &&
                <ViewAll scrollTo='experience' title={viewAll ? 'Okay, I got it' : 'View All'} handleClick={() => setViewAll(!viewAll)} />
            }

        </SectionWrapper>
    )
}

export default Experiences