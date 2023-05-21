import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
    return (
      <section id="pricing" className=" mx-auto min-h-full w-full bg-primary-100 py-40">
        <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}
        >
            
        <motion.div
          className="px-20 w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR PRICING</HText>
            <p className="py-5">
              Affordable prices and amazing offers.
            </p>
          </div>
        </motion.div>
        
        
        <motion.div
            className="mt-5 items-center justify-between gap-8 md:flex px-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
					<div 
                    className="items-center justify-center rounded-lg
                    text-center border-gray-100 mb-12 bg-white p-4 break-normal shadow-md hover:shadow-xl
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                   
                    <div className="mb-4 flex justify-center">
                        <div className=" border-gray-100  p-4">
                            <img
                            src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                            alt=""
                            className="items-center justify-center p-4"
                            />
                        </div>
                        
                    </div>
                    <h2 className="my-5 text-sm">Monthly</h2>
                    <ul className="my-5 text-sm">
                        <li className="my-5 text-sm">$25</li>
                        <li className="my-5 text-sm">
                        Access to strength + cardio
                        </li>
                    </ul>
                    <h3 className="my-5 text-sm">Free 3 day Trial</h3>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                    </div>

                
                    <div className="items-center rounded-lg bg-white justify-center
                    text-center border-gray-100 mb-12 p-4 break-normal shadow-md hover:shadow-xl
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="mb-4 flex justify-center">
                        <div className=" border-gray-100  p-4">
                            <img
                            src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
                            alt=""
                            className="items-center justify-center p-4"
                            />
                        </div>
                    </div>
                    <h2 className="my-5 text-sm">Quaterly</h2>
                    <ul className="break-normal my-5 text-sm">
                        <li className="my-5 text-sm">$75</li>
                        <li className="my-5 text-sm">
                        Strength+Cardio+Yoga
                        </li>
                    </ul>
                    <h3 className="my-5 text-sm">Free Diet Plan</h3>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                    </div>


                    <div className="items-center  rounded-lg justify-center
                    text-center border-gray-100 mb-12 bg-white p-4 break-normal shadow-md hover:shadow-xl
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="mb-4 flex justify-center">
                        <div className=" border-gray-100 p-4">
                        <img
                            src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
                            alt=""
                            className="items-center justify-center p-4"
                            />
                        </div>
                    </div>
                    <h2 className="my-5 text-sm ">Yearly</h2>
                    <ul className="break-normal my-5 text-sm">
                        <li className="my-5 text-sm">$300</li>
                        <li className="my-5 text-sm">Access to all Classes</li>
                    </ul>
                    <h3 className="my-5 text-sm">Free Personal Trainer</h3>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                    </div>
          
                </motion.div>
               

            </motion.div>
        
      </section>
    );
  };
  
export default Pricing;
