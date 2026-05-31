import { Link } from "wouter";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {/* A professional team discussing digital strategy */}
              <div className="col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350&q=80"
                  alt="Sifabora team in meeting"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </div>
              {/* A close-up of someone using technology */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=250&q=80"
                  alt="Digital reputation analysis"
                  className="w-full h-full rounded-lg shadow-md object-cover"
                />
              </div>
              {/* A person working with digital security interface */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=250&q=80"
                  alt="Digital security research at Sifabora"
                  className="w-full h-full rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h6 className="font-inter font-medium text-secondary uppercase tracking-wider mb-3">
              About Us
            </h6>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-primary mb-6">
              Dedicated to Protecting Your Digital Identity
            </h2>

            <p className="text-dark-gray mb-6">
              At Sifabora, we believe everyone has the right to a fair and
              accurate online presence. Since our founding, we've helped
              hundreds of individuals and businesses take control of their
              digital reputation.
            </p>

            <div className="mb-8">
              <h3 className="font-inter font-bold text-xl text-primary mb-4">
                Our Core Values
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-secondary">
                    <FaCheckCircle />
                  </div>
                  <span>
                    <strong className="font-medium">Integrity:</strong> We
                    handle every case with complete honesty and ethical
                    practices.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-secondary">
                    <FaCheckCircle />
                  </div>
                  <span>
                    <strong className="font-medium">Expertise:</strong> Our team
                    combines legal knowledge with technical expertise for
                    effective results.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-secondary">
                    <FaCheckCircle />
                  </div>
                  <span>
                    <strong className="font-medium">Discretion:</strong> We
                    maintain complete confidentiality with all client matters.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-secondary">
                    <FaCheckCircle />
                  </div>
                  <span>
                    <strong className="font-medium">Innovation:</strong> We
                    continuously develop new strategies to counter evolving
                    digital threats.
                  </span>
                </li>
              </ul>
            </div>

            <Link href="/about">
              <Button className="inline-block bg-primary text-white font-inter font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
