import { Link } from "wouter";

const AboutSection = () => {
  const coreValues = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We operate with unwavering honesty and uphold the highest ethical standards in every case.",
    },
    {
      id: 2,
      title: "Expertise",
      description:
        "Our team merges deep legal insight with advanced digital knowledge to deliver powerful results.",
    },
    {
      id: 3,
      title: "Discretion",
      description:
        "Every matter is handled with complete confidentiality and sensitivity — always.",
    },
    {
      id: 4,
      title: "Innovation",
      description:
        "We proactively evolve our strategies to stay ahead of the digital threat landscape.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Images */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350&q=80"
                  alt="Sifabora team in meeting"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=250&q=80"
                  alt="Digital reputation analysis"
                  className="w-full h-full rounded-lg shadow-md object-cover"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=250&q=80"
                  alt="Digital security research at Sifabora"
                  className="w-full h-full rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h6 className="font-medium text-secondary uppercase tracking-wider mb-3">
              About Us
            </h6>
            <h2 className="font-bold text-3xl md:text-4xl text-primary mb-6">
              We Defend Your Name in the Digital World
            </h2>

            <p className="text-dark-gray mb-6">
              Sifabora is more than a digital reputation firm — we are your
              strategic defense in an online world that often moves faster than
              the truth. From executives to everyday individuals, we help
              clients reclaim control, remove harmful content, and safeguard
              their name.
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-xl text-primary mb-4">
                What Drives Us
              </h3>
              <ul className="space-y-3">
                {coreValues.map((value) => (
                  <li key={value.id} className="flex items-start">
                    <div className="mr-3 mt-1 text-secondary">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <span>
                      <strong className="font-medium">{value.title}:</strong>{" "}
                      {value.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/about"
              className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              Discover Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
