import { SelectedPage } from "../../../shared/types";
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";
import image5 from "../../../assets/image5.png";
import image6 from "../../../assets/image6.png";
import {motion} from "framer-motion";
import HText from "../../../shared/HText";
import { ClassType } from "../../../shared/types";
import Class from "./Class";


const classes: Array<ClassType>= [
    {
    name: "Weight Training Classes",
    description: "Unleash your strength in our Weight Training class, where every lift brings you closer to your fitness goals. Sculpt and tone your body with expert guidance, customized routines, and a supportive community. Elevate your power and redefine your physique.",
    image: image1
},
{
    name: "Yoga Classes",
    description: "Find balance and tranquility in our Yoga class, a sanctuary for mind and body. Immerse yourself in calming postures, mindful breathing, and expert guidance. Whether you're a beginner or an experienced yogi, discover the transformative benefits of yoga for holistic well-being.",
    image: image2
},
{
    name: "Ab Core Classes",
    description: "Sculpt a rock-solid core in our Ab Core class, targeting your abdominal muscles for a toned midsection. Engage in dynamic exercises designed to strengthen your core and improve stability. Elevate your core strength, enhance posture, and redefine your abdominal muscles.",
    image: image3
},
{
    name: "Adventure Classes",
    description: "Embark on a fitness journey like no other in our Adventure class. Experience a fusion of adrenaline-pumping activities and dynamic workouts. From obstacle courses to outdoor challenges, this class brings the spirit of adventure into your fitness routine. Break boundaries and elevate your fitness game.",
    image: image4
},
{
    name: "Fitness Classes",
    description: "Join our Fitness class for a comprehensive and energetic workout experience. This class blends cardio, strength, and flexibility training to optimize your overall fitness. With dynamic routines and expert guidance, you'll boost your endurance, burn calories, and achieve a well-rounded level of fitness.",
    image: image5
},
{
    name: "Training Classes",
    description: "Tailor your fitness journey with personalized guidance in our Training class. Our certified trainers create individualized workout plans, focusing on your specific goals and fitness level. Elevate your performance, refine your techniques, and experience the benefits of targeted training for a healthier, fitter you.",
    image: image6
}
]
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="width-full bg-primary-100 py-40">
        <motion.div
        onViewportEnter={() => {setSelectedPage(SelectedPage.OurClasses)}} >
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: { opacity: 1, x: 0}
             }}>
                <div className="md:w-3/5">
                <HText>
                    Our Classes
                </HText>
                <p className="py-5">
                Immerse yourself in a diverse range of cutting-edge classes designed to cater to all fitness levels and preferences. From high-intensity interval training (HIIT) sessions that push your limits to rejuvenating yoga classes that focus on mindfulness, our expert instructors ensure a well-rounded fitness journey. 
                </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}/>
                    ))}

                </ul>
            </div>

        </motion.div>
    </section>
  )
}

export default OurClasses;