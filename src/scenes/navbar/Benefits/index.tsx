import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../../../shared/types"
import { motion } from "framer-motion"
import HText from "../../../shared/HText"
import Benefit from "./Benefit"
import ActionButton from "../../../shared/ActionButton"
import BenefitsPageGraphic from "../../../assets/BenefitsPageGraphic.png"
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Our gym features cutting-edge equipment and modern amenities designed to elevate your fitness experience. From high-tech cardio machines to advanced strength training apparatus, every corner of the gym is meticulously equipped to support your wellness journey."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "With a vast selection of over a hundred diverse classes, the gym offers a dynamic fitness experience catering to various interests and skill levels, ensuring there's something for everyone to enjoy and achieve their health goals."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "The gym prides itself on a team of expert trainers, each possessing a wealth of knowledge and experience, dedicated to guiding and motivating members through personalized fitness programs to maximize results and overall well-being."
    },
];

const container = {
 hidden: {},
 visible: {
    transition: { staggerChildren: 0.2 }
 }
}

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

function Benefits({setSelectedPage}: Props) {
  return (
    <section id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
    >
  <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>

    {/* HEADER */}
    <motion.div className="md:my-5 md:my-3/5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.5}}
                  transition={{ duration: 0.5}}
                  variants={{
                      hidden: {opacity: 0, x: -50},
                      visible: { opacity: 1, x: 0}
                   }}>
       <HText>MORE THAN JUST A GYM</HText>
       <p className="my-5 text-sm">
        We provide world class fitness equipment, trainers and classes to get you your ultimate fitness goals with ease. We provide true care into each and every memeber.
       </p>
    </motion.div>

    {/* BENEFITS */}
    <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView= "visible"
                viewport= {{ once: true, amount: 0.5 }}
                variants={container}
>
        {benefits.map((benefit: BenefitType) => (
            <Benefit 
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
            />
        ))}
    </motion.div>

    {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img  className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic}/> 

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{once: true, amount: 0.5}}
                                  transition={{ duration: 0.5}}
                                  variants={{
                                      hidden: {opacity: 0, x: 50},
                                      visible: { opacity: 1, x: 0}
                                   }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESCRIPT */}

                    <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{once: true, amount: 0.5}}
                          transition={{delay: 0.2, duration: 0.5}}
                          variants={{
                              hidden: {opacity: 0, x: 50},
                              visible: { opacity: 1, x: 0}
                           }}>
                        <p className="my-5 ">
                        In a fitness revolution, millions of individuals are transforming their lives through the gym's unparalleled offerings. With state-of-the-art facilities and a diverse array of over a hundred classes, this fitness hub has become the go-to destination for those seeking a holistic approach to well-being. 
                        </p>

                        <p className="mb-5 ">
                        Expert trainers, armed with extensive knowledge, inspire millions to embark on their fitness journey, making this gym a beacon of health and vitality for a vast and growing community. It's not just a gym; it's a movement empowering millions to achieve their fitness goals and lead healthier, happier lives.
                        </p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative-mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>
  </motion.div>
    </section>
  )
}

export default Benefits