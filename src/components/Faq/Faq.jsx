import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [accodion, setAccodion] = useState(0);
  const content = [
    {
      title: " What is MERN Stack Development?",
      description: (
        <>
          <p>
            MERN Stack development refers to the use of a powerful set of
            technologies — MongoDB, Express.js, React.js, and Node.js — for
            building dynamic and high-performance web applications. This
            full-stack JavaScript solution allows developers to use a single
            language (JavaScript) across both the client-side and server-side,
            streamlining the development process. Here's a breakdown of each
            component:
          </p>
          <ul className="f-bu">
            <li>
              <strong> MongoDB</strong>: A NoSQL database that stores data in a
              flexible, JSON-like format.
            </li>
            <li>
              <strong> Express.js</strong>: A fast and minimalist web
              application framework for Node.js that simplifies server-side
              development.
            </li>
            <li>
              <strong> React.js</strong>: A popular JavaScript library for
              building interactive, dynamic, and user-friendly front-end
              interfaces.
            </li>
            <li>
              <strong> Node.js</strong>: A runtime environment that allows you
              to run JavaScript code on the server-side, ensuring fast and
              scalable performance.
            </li>
          </ul>
          <p>
            Together, the MERN stack enables developers to create seamless,
            responsive, and scalable applications with a unified development
            experience. Whether you're building a complex web app or a real-time
            system, MERN stack development provides a robust framework for
            modern web development.
          </p>
        </>
      ),
    },
    {
      title: "What is full-stack JavaScript development?",
      description: `Full-stack JavaScript development means building both the front-end and back-end of a website using JavaScript. I use modern frameworks like React.js, Vue.js, and Next.js for the front-end and Node.js and Express.js for the back-end. This ensures a fast, scalable, and user-friendly web experience. Whether you need a business website, an eCommerce store, or a web application, my full-stack JavaScript development service covers everything from design to deployment.

`,
    },

    {
      title: "Why should I choose JavaScript for website development?",
      description: (
        <>
          <p>
            JavaScript is a powerful and widely used programming language for
            web development. It offers:
          </p>
          <ul className="f-bu">
            <li>
              <strong>Fast performance </strong> with seamless user experiences.
            </li>
            <li>
              <strong>Cross-platform compatibility</strong> , making your site
              accessible on various devices.
            </li>
            <li>
              The ability to create{" "}
              <strong> interactive, mobile-friendly </strong>websites using
              frameworks like React, Vue, and Next.js, while Node.js powers
              high-speed data processing for both small and large-scale
              businesses.
            </li>
          </ul>
        </>
      ),
    },
    {
      title:
        "What are the benefits of hiring a full-stack JavaScript developer?",
      description: (
        <>
          <p>
            When you hire a full-stack JavaScript developer, you get an expert
            who can manage both the client-side and server-side of your website.
            This means:
          </p>
          <ul className="f-bu">
            <li>
              <strong> Faster project completion</strong> since one person
              handles everything
            </li>
            <li>
              <strong> Seamless integration </strong> between the front-end and
              back-end.
            </li>
            <li>
              {" "}
              <strong> Better website performance </strong> with optimized
              JavaScript code.
            </li>
            <li>
              <strong> Cost-effective solution </strong> as you don’t need
              multiple developers
            </li>
          </ul>
          <p>
            I provide custom JavaScript website development to ensure your site
            is SEO-friendly, mobile-responsive, and secure.
          </p>
        </>
      ),
    },
    {
      title: "Do you provide custom JavaScript web application development? ",
      description: `Yes! I specialize in custom JavaScript web application development for businesses, startups, and individuals. Whether you need a dynamic dashboard, an interactive user interface, or a full-fledged SaaS platform, I can build it using the latest JavaScript frameworks like React.js, Next.js, and Node.js. Each application is tailored to your needs, ensuring smooth performance and scalability.


`,
    },

    {
      title: "How do JavaScript websites help with SEO and Google ranking?",
      description: (
        <>
          <p>
            SEO is crucial for any website, and I make sure every site I build
            is SEO-optimized. With JavaScript frameworks like Next.js, I create
            fast-loading, mobile-friendly, and Google-friendly websites. Some
            SEO benefits include:
          </p>
          <ul className="f-bu">
            <li>
              <strong>Fast page speed</strong>, which improves rankings
            </li>
            <li>
              <strong>Mobile responsiveness</strong>, making the site
              user-friendly
            </li>
            <li>
              <strong>SEO-friendly URLs and meta tags</strong> to boost
              visibility
            </li>
            <li>
              An <strong>Optimized site structure</strong> for better crawling
              and indexing
            </li>
          </ul>
          <p>
            If you want your website to rank higher on Google and attract more
            customers, I provide SEO-friendly JavaScript web development.
          </p>
        </>
      ),
    },
    {
      title: "Can you build an eCommerce website with JavaScript?",
      description: (
        <>
          <p>
            Absolutely! I develop custom JavaScript eCommerce websites using
            React, Next.js, and Node.js. Your online store will be:
          </p>
          <ul className="f-bu">
            <li>
              <strong> Fast and user-friendly </strong> for better conversions
            </li>
            <li>
              {" "}
              <strong> Secure and scalable </strong> to handle growing traffic
            </li>
            <li>
              {" "}
              <strong> SEO-optimized </strong>, increasing visibility in search
              engines.
            </li>
          </ul>
          <p>
            I also integrate payment gateways, inventory management, and custom
            features to make your eCommerce business successful.
          </p>
        </>
      ),
    },
    {
      title:
        "How long does it take to develop a full-stack JavaScript website? ",
      description: `The development time depends on the project’s complexity. A simple website takes around 1-2 weeks, while a more advanced website with custom features may take 5-7 weeks. I ensure that each project is delivered on time with the best quality. If you have a specific deadline, let’s discuss your project requirements!
`,
    },
    {
      title: "How much does JavaScript website development cost?",
      description: `The cost depends on the features, design, and complexity of the website. A basic business website starts at $700-$1200, while a custom web application or eCommerce platform may cost more. I provide affordable and high-quality JavaScript web development tailored to your needs. Contact me for a custom quote!
`,
    },
    {
      title: "What is the difference between React.js, Next.js, and Vue.js?",
      description: (
        <>
          <ul className="f-bu">
            <li>
              <strong>React.js</strong>: Ideal for dynamic and interactive
              websites. Used by brands like Facebook and Instagram.
            </li>
            <li>
              <strong>Next.js</strong>: A powerful framework built on React,
              perfect for SEO-friendly and fast websites.
            </li>
            <li>
              <strong>Vue.js</strong>: A lightweight framework for simple yet
              highly interactive websites.
            </li>
          </ul>
          <p>
            If you’re unsure which framework suits your project, I can guide you
            based on your business goals!
          </p>
        </>
      ),
    },
    {
      title: "Why should I hire you as my full-stack JavaScript developer?",
      description: (
        <>
          <p>
            I have years of experience in JavaScript front-end and back-end
            development, delivering SEO-friendly, fast, and secure websites. My
            services include:
          </p>
          <ul className="f-bu">
            <li>
              <strong> Custom website development</strong> with modern
              JavaScript frameworks
            </li>
            <li>
              {" "}
              <strong>SEO optimization</strong> to rank higher on Google
            </li>
            <li>
              {" "}
              <strong>Fast and mobile-friendly</strong> designs for better
              conversions
            </li>
            <li>
              <strong>Affordable pricing and timely delivery</strong>
            </li>
          </ul>
          <p>
            Looking for a reliable full-stack JavaScript developer? Let’s build
            your dream website today! Contact me now.
          </p>
        </>
      ),
    },
  ];

  let accodionToggole = (index) => {
    if (accodion === index) {
      setAccodion(null);
    } else {
      setAccodion(index);
    }
  };
  return (
    <div className="accordion-warper  container overflow-x-hidden">
      <h3 className="section_title ft">Frequently Asked Questions</h3>
      {content.map((item, index) => (
        <div className="first_info" key={index}>
          <header className="hea" onClick={() => accodionToggole(index)}>
            {item.title}

            <i class="bx bx-chevron-down icon-f"> </i>
          </header>
          <p className={`description ${accodion === index ? "opentab" : ""}`}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
