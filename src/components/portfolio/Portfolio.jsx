import React from "react";
import "./portflio.css";
import Img1 from "../../assets/shope.png";
import Img2 from "../../assets/store.png";
import Img3 from "../../assets/resty.png";
import Img4 from "../../assets/chatnode.png";
import Img5 from "../../assets/server.jpeg";
import Img6 from "../../assets/todo.png";
import Img7 from "../../assets/cryptoverse.png";
import Img8 from "../../assets/clever.png";
import Img9 from "../../assets/admin.png";
import Img10 from "../../assets/api.png";

let data = [
  {
    id: 1,
    image: Img2,
    title: "ECommerce App",
    github: "https://github.com/abuobaid9/storefront/blob/main/README.md",
    description:
      "ECommerce App using React JS and Redux with Using Fetch API to Get Products Data. Add Filter Product Functionality to Filter Products and Use Skeleton Loading When Calling API.",
    demo: "https://scintillating-sunburst-7c7cb1.netlify.app/",
  },
  {
    id: 2,
    image: Img3,
    title: "RESTy",
    github: "https://github.com/abuobaid9/resty#readme",
    description:
      "Application to do REST Api methods using React.js, Sass and React Hooks",
    demo: "https://abuobaid9.github.io/resty/",
  },
  {
    id: 3,
    image: Img7,
    title: "Cryptoverse",
    github: "https://github.com/abuobaid9/cryptocurrency#readme",
    description:
      "Cryptoverse is a platform that provides detailed information about different cryptocurrencies Using React.js ,Redux ,Chart.js and designed by Ant Design ",
    demo: "https://cryptoverse-anas.netlify.app/",
  },
  {
    id: 4,
    image: Img8,
    title: "Clever Booking",
    github: "https://github.com/abuobaid9/booking-front/blob/main/README.md",
    description:
      "Clever Booking it's a MERN Stack Project That Works as a Hotels Reservation System Using React.js, Context API, JWT, Cookies ...etc ",
    demo: "https://clever-booking.netlify.app/",
  },
  {
    id: 5,
    image: Img9,
    title: "Clever Booking Admin",
    github: "https://github.com/abuobaid9/booking-admin",
    description:
      "Clever Booking Admin It's a Control Platform  That Controls Clever Booking Website Using Racct.js, Context API, JWT, Cookies and designed by Material Ui and you can try it with  username: admin and password: admin",
    demo: "https://clever-booking-admin.netlify.app/",
  },
  {
    id: 6,
    image: Img10,
    title: "Clever Booking Api",
    github: "https://github.com/abuobaid9/booking-api#readme",
    description:
      "Clever Booking Api It's A server that contains all routes with authentication and authorization middleware Using Node.js, Express.js, MongoDb, JWT ...etc",
    demo: "https://rose-lucky-dolphin.cyclic.app/",
  },
  {
    id: 7,
    image: Img1,
    title: "Shopping Cart",
    github: "https://github.com/abuobaid9/shopping-cart#readme",
    description:
      "Shopping Cart using React.js and Context API with useReducer Hook for State Management.Add Filter Product Functionality ",
    demo: "https://keen-mochi-3f1000.netlify.app/",
  },
  {
    id: 8,
    image: Img4,
    title: " ChatCord",
    github: "https://github.com/abuobaid9/chat-app#readme",
    description:
      "Realtime chat app with websockets using Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI.",
    demo: "https://live-chat-app-fzzn.onrender.com",
  },
  {
    id: 9,
    image: Img5,
    title: "Auth-Api",
    github: "https://github.com/abuobaid9/auth-api#readme",
    description:
      "A server that contains routes with authentication and authorization middleware. Try it on Postman",
    demo: "https://anas-auth-server.herokuapp.com/",
  },
  {
    id: 10,
    image: Img6,
    title: "ToDo List",
    github: "https://github.com/abuobaid9/todo-app#readme",
    description:
      "A ToDo App with authentication page using ReactJs and Context",
    demo: "https://willowy-halva-8569b2.netlify.app/",
  },
];

const Portflio = () => {
  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>
      {/* <h2>Portfolio</h2> */}
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, description, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <h4>{description}</h4>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portflio;
