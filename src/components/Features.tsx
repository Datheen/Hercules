import { Code2 as Code, Paintbrush, Rocket } from "lucide-react";
import { Marquee } from "./ui/marquee";
import typescript from "@/assets/img/features/typescript.webp";
import nodejs from "@/assets/img/features/nodejs.webp";
import next from "@/assets/img/features/nextwide.webp";
import angularwide from "@/assets/img/features/angularwide.webp";
import tailwindlogo from "@/assets/img/features/tailwindcsslogo.webp"

const features = [
  {
    title: "Next.js & TypeScript",
    description:
      "Built with Next.js and TypeScript, ensuring high performance, scalability, and type safety for a seamless development experience.",
    icon: Code,
  },
  {
    title: "ShadCN & Tailwind CSS",
    description:
      "Leverage the power of ShadCN and Tailwind CSS for a consistent, minimal, and highly customizable UI design.",
    icon: Paintbrush,
  },

  {
    title: "Easy to Use",
    description:
      "Designed for seamless integration, clear documentation, and an intuitive API, making it effortless for developers to build and scale.",
    icon: Rocket,
  },
];

function Features() {
  return (
    <div className="w-full bg-[#0b1b25]">
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="flex items-center gap-20 bg-black px-6 py-4">
          <img src={typescript} className="w-40 pb-2 ml-11" />
          <img src={next} className="w-40" />
          <img src={angularwide} className="w-40" />
          <img src={nodejs} className="w-40 pb-3" />
          <img src={tailwindlogo} className="w-60 " />
        </div>
      </Marquee>
      <section
        id="features"
        className="container grid gap-6 py-16 md:gap-8  mx-auto"
      >
        <h2 className="font-bold text-white mb-10 mx-auto text-center text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>

        <div className=" grid justify-center gap-4 sm:grid-cols-2 md:max-w-360 px-10 md:grid-cols-3 mx-auto">
          {features.map(({ title, description, icon: Icon }, i) => (
            <div
              key={i}
              className="animated-box relative overflow-hidden rounded-lg border border-[#39b362] text-primary p-2"
            >
              <div className="flex min-h-[180px] flex-col justify-start rounded-md p-6">
                <Icon className="mb-3 h-8 w-8" />
                <div className="space-y-2">
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Features;
