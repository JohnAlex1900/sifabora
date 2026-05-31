import { ButtonLink } from "./ui/button-link";

const Hero = () => {
  return (
    <section className="gradient-bg py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bS0xMi0yNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptLTEyLTI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Protect & Restore Your Digital Reputation
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              At Sifabora, we specialize in removing harmful content, protecting
              your online presence, and rebuilding your digital reputation with
              proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/contact" variant="white" size="lg">
                Request Help
              </ButtonLink>
              <ButtonLink href="/services" variant="transparent" size="lg">
                Explore Services
              </ButtonLink>
            </div>
          </div>

          {/* A professional working at a desk with digital security elements */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-xl border-2 border-accent"></div>
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
                alt="Digital reputation protection professional"
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-white border-opacity-20">
          <p className="text-white text-center mb-6 font-inter">
            Trusted by businesses and individuals worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-white opacity-80 font-inter font-bold text-center">
              <div className="text-3xl md:text-4xl">98%</div>
              <div className="text-sm mt-1">Success Rate</div>
            </div>
            <div className="text-white opacity-80 font-inter font-bold text-center">
              <div className="text-3xl md:text-4xl">500+</div>
              <div className="text-sm mt-1">Clients Helped</div>
            </div>
            <div className="text-white opacity-80 font-inter font-bold text-center">
              <div className="text-3xl md:text-4xl">24/7</div>
              <div className="text-sm mt-1">Support</div>
            </div>
            <div className="text-white opacity-80 font-inter font-bold text-center">
              <div className="text-3xl md:text-4xl">10+</div>
              <div className="text-sm mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
