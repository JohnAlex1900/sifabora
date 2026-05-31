const ProcessSection = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-primary mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            We follow a structured approach to assess, address, and resolve your
            digital reputation challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Process Step 1 */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-custom p-6 h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-inter font-bold text-xl">
                  1
                </div>
                <div className="hidden lg:block w-1/3 h-2 bg-secondary mt-7 -mr-8 rounded"></div>
              </div>
              <h3 className="font-inter font-bold text-xl text-primary mb-3">
                Initial Assessment
              </h3>
              <p className="text-dark-gray">
                We conduct a thorough analysis of your online presence to
                identify negative content and vulnerability points.
              </p>
            </div>
          </div>

          {/* Process Step 2 */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-custom p-6 h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="hidden lg:block w-1/3 h-2 bg-secondary mt-7 -ml-8 rounded"></div>
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-inter font-bold text-xl">
                  2
                </div>
                <div className="hidden lg:block w-1/3 h-2 bg-secondary mt-7 -mr-8 rounded"></div>
              </div>
              <h3 className="font-inter font-bold text-xl text-primary mb-3">
                Strategic Planning
              </h3>
              <p className="text-dark-gray">
                We develop a tailored action plan specific to your situation and
                reputation goals.
              </p>
            </div>
          </div>

          {/* Process Step 3 */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-custom p-6 h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="hidden lg:block w-1/3 h-2 bg-secondary mt-7 -ml-8 rounded"></div>
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-inter font-bold text-xl">
                  3
                </div>
                <div className="hidden lg:block w-1/3 h-2 bg-secondary mt-7 -mr-8 rounded"></div>
              </div>
              <h3 className="font-inter font-bold text-xl text-primary mb-3">
                Implementation
              </h3>
              <p className="text-dark-gray">
                Our experts execute the plan using legal, technical, and content
                strategies to remove or suppress negative content.
              </p>
            </div>
          </div>

          {/* Process Step 4 */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-custom p-6 h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="hidden lg:block w-1/3 h-2 bg-secondary mt-7 -ml-8 rounded"></div>
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-inter font-bold text-xl">
                  4
                </div>
              </div>
              <h3 className="font-inter font-bold text-xl text-primary mb-3">
                Ongoing Protection & Maintenance
              </h3>
              <p className="text-dark-gray">
                We provide ongoing protection and early warning systems to
                safeguard your improved digital reputation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
