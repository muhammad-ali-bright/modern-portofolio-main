import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you. I will get back to you ASAP."))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30 relative">
      {/* Control Panel */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center space-y-4 bg-primary/50 p-6 rounded-lg shadow-lg w-[80px] h-[400px]">
        <a href="#home" className="text-accent text-2xl">
          <i className="fas fa-home"></i>
        </a>
        <a href="#about" className="text-accent text-2xl">
          <i className="fas fa-user"></i>
        </a>
        <a href="#portfolio" className="text-accent text-2xl">
          <i className="fas fa-th"></i>
        </a>
        <a href="#contact" className="text-accent text-2xl">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <div className="container mx-auto py-32 flex flex-col xl:flex-row items-center justify-center h-full">
        {/* Contact Details */}
        <div className="flex flex-col items-center xl:items-start mb-12 xl:mb-0 xl:mr-16">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <ul className="space-y-4 text-center xl:text-left">
            <li className="flex items-center gap-2">
              <MdEmail className="text-accent text-xl" />
              <span className="font-semibold">Mail:</span>
              <a href="mailto:muhammad.ali.bright@gmail.com" className="text-accent">
                muhammad.ali.bright@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <BsTelephoneFill className="text-accent text-xl" />
              <span className="font-semibold">Phone:</span>
              <a href="tel:+16466594382" className="text-accent">
                +1 646 659 4382
              </a>
            </li>
            {/* <li className="flex items-center gap-2">
              <BsTelephoneFill className="text-accent text-xl" />
              <span className="font-semibold">Contact:</span>
              <a href="https://calendly.com" className="text-accent">
                Calendly
              </a>
            </li> */}
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-accent text-xl" />
              <span className="font-semibold">Location:</span>
              Brooklyn, New York
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="https://github.com/muhammad-ali-bright" className="text-accent">
              <FaGithub className="text-2xl" />
            </a>
            <a href="" className="text-accent">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">chat.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            data-netlify="true"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Topic"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            {/* CAPTCHA */}
            <div className="flex items-center justify-center">
              <div className="g-recaptcha" data-sitekey="your-site-key"></div>
            </div>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Submit
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;