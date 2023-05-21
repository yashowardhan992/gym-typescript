import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import {SelectedPage, TestimonialType } from "@/shared/types";
import {UserIcon} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Testimonial from "./Testimonial";


const posts: Array<TestimonialType> = [
  {
    icon: <UserIcon className="h-6 w-6" />,
    name: "Roland Berry",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    name: "Cataleya Flynn",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    name: "Trevor Hull",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section id="testimonials" className="mx-auto min-h-full w-5/6 py-20 mt-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>TESTIMONIALS</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {posts.map((testimonial: TestimonialType) => (
            <Testimonial
              key={testimonial.name}
              icon={testimonial.icon}
              title={testimonial.name}
              description={testimonial.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Testimonials;