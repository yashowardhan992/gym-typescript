export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    Pricing = "pricing",
    ContactUs = "contactus",
    Testimonials = "testimonials"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface TestimonialType {
  icon: JSX.Element;
  name: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
