import ContactForm from "./ContactForm";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section
      id="get-started"
      className="py-24 gradient-bg relative overflow-hidden"
    >
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
        <div className="max-w-3xl mx-auto text-center text-white mb-12">
          <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
            Ready to Protect Your Digital Reputation?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Take the first step toward reclaiming control of your online
            presence. Our experts will provide a free consultation and
            personalized strategy.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-inter font-bold text-2xl text-primary mb-4">
                Get in Touch
              </h3>
              <p className="text-dark-gray mb-6">
                Fill out the form for a confidential consultation or contact us
                directly through any of our channels.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                    <FaPhoneAlt className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-primary">
                      Phone
                    </h4>
                    <p className="text-dark-gray">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-primary">
                      Email
                    </h4>
                    <p className="text-dark-gray">support@sifabora.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                    <FaClock className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-primary">
                      Hours
                    </h4>
                    <p className="text-dark-gray">24 / 7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
