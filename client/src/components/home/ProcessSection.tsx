import ProcessStep from "@/components/shared/ProcessStep";

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Initial Assessment",
      description:
        "We begin with a comprehensive audit of your digital footprint. This includes identifying harmful links, articles, images, or posts across search engines, review sites, and social media platforms. We also assess potential legal grounds for removal and any privacy violations.",
    },
    {
      id: 2,
      title: "Strategic Planning",
      description:
        "Based on our findings, we craft a personalized strategy. This may involve legal takedown notices, SEO suppression tactics, digital PR campaigns, and direct platform engagement. You’ll receive a clear roadmap outlining timelines, legal steps, and communication protocols.",
    },
    {
      id: 3,
      title: "Execution & Enforcement",
      description:
        "Our legal and technical teams begin executing the strategy. We file formal removal requests with publishers and platforms, deploy content removal tools, and publish positive content to shift your online narrative. Legal escalation is initiated if necessary.",
    },
    {
      id: 4,
      title: "Ongoing Protection",
      description:
        "Once content is removed or buried, we implement continuous protection systems to detect future threats. You’ll receive monthly reports and alerts if any new negative mentions appear. We also provide guidance to help you maintain a strong digital presence going forward.",
    },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-primary mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-dark-gray">
            Every case is unique, but our process remains precise and effective.
            From audit to enforcement, we provide full transparency at every
            step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.id}
              number={step.id}
              title={step.title}
              description={step.description}
              isFirst={index === 0}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
