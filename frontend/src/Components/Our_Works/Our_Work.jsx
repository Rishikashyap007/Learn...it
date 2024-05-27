import "./Our_Work.css";
import Accelerator from "./assets/Accelerator.png";
import Beauty from "./assets/Beauty.png";
import ClickCapture from "./assets/ClickCapture.png";
import Consulting from "./assets/Consulting.png";
import Decodeage from "./assets/Decodeage.png";
import Jwellary from "./assets/Jwellary.png";
import KlipCart from "./assets/KlipCart.png";
import LeadInnovator from "./assets/LeadInnovator.png";
import MediSearch from "./assets/MediSearch.png";
import Medplus from "./assets/Medplus.png";
import Mentor from "./assets/Mentor.png";
import OneHealth from "./assets/OneHealth.png";
import Soon from "./assets/Soon.jpg";
import Ten from "./assets/TENHRMS.png";
import Idea from './assets/Ten_Idea.png'
import TenInvesting from "./assets/TenInvesting.png";

const data = [
  {
    id: 1,
    img: Ten,
    name: "TEN INTERNAL HRMS",
    desc: "Internal HRMS is a tailored software solution designed for streamlined internal human resource management. It efficiently centralizes employee data, automates payroll processes, and enhances communication through user-friendly interfaces. This system optimizes internal operations, ensures data accuracy, and empowers HR professionals for effective workforce management within the organization. it promotes employee engagement and facilitates informed decision-making.",
    link: "https://ten-hrms.vercel.app/",
  },
  {
    id: 2,
    img: Accelerator,
    name: "TEN ACCELERATOR",
    desc: "The TEN Accelerator website is a dynamic platform designed to catalyze growth and innovation. It serves as a hub for entrepreneurs, providing resources, mentorship opportunities, and networking avenues. Through a user-friendly interface, it facilitates collaboration, knowledge-sharing, and accelerates the development of startups. The Accelerator website aims to fuel entrepreneurial success by offering a centralized space for essential tools and connections.",
    link: "https://tenaccelerator.wixsite.com/ten-accelerator/",
  },
  {
    id: 3,
    img: Mentor,
    name: "MENTOR CRUISE SITE",
    desc: "The Mentor Cruise site is a specialized platform connecting individuals with experienced mentors in various fields. It offers a streamlined experience for mentorship matching, fostering one-on-one relationships to enhance personal and professional development. With a user-friendly interface, the site provides tools for effective communication and goal tracking between mentors and mentees.It aims to empower individuals by facilitating valuable mentorship.",
    link: "https://bhagyashreepatil74.wixsite.com/ten-mentor-site",
  },
  // {
  //   id: 4,
  //   img: TenInvesting,
  //   name: "TEN INVESTING",
  //   desc: "The TEN Investing website is a robust online platform tailored for users seeking comprehensive financial information and investment opportunities. Offering real-time market data, analysis tools, and educational resources, it empowers investors to make informed decisions. With an intuitive interface, the site facilitates seamless portfolio management and provides insights to guide investment strategies. The Investing website is designed to be a one-stop hub for users looking to navigate and optimize their investment journey.",
  //   link: "https://www.investing.entrepreneurshipnetwork.net/",
  // },
  {
    id: 5,
    img: Idea,
    name: "IDEA ENGINE",
    desc: "The Idea Engine website is a creative platform designed to spark and develop innovative ideas. It features collaborative tools and resources that facilitate brainstorming and idea-sharing among users. With an intuitive interface, the site encourages cross-disciplinary collaboration, helping individuals refine and bring their concepts to fruition. Idea Engine serves as a dynamic hub for creativity, empowering users to turn their ideas into actionable projects.",
    link: "https://tenideaengine.vercel.app/",
  },
  {
    id: 6,
    img: Soon,
    name: "INTERN MANAGEMENT SYSTEM",
    desc: "The Intern Management System website is a centralized platform designed to optimize internal processes and enhance communication within organizations. It streamlines project management, facilitates team collaboration, and provides tools for efficient resource allocation. With a user-friendly interface, the site promotes transparency and real-time monitoring of project progress. The Inter Management System aims to improve organizational productivity and streamline workflows by offering a comprehensive solution for effective project and team management.",
    link: "",
  },
  {
    id: 7,
    img: LeadInnovator,
    name: "LEAD INNOVATOR",
    desc: "The Lead Innovator website is a dynamic platform dedicated to fostering innovation and collaboration across industries. It connects forward-thinking professionals, providing a space for idea exchange, mentorship, and project collaboration. With an intuitive interface, the site supports networking, knowledge-sharing, and accelerates the innovation process. Lead Innovator is a catalyst for transformative ideas, empowering individuals and organizations to pioneer groundbreaking solutions.",
    link: "https://mohdfaisal231120.wixsite.com/leadinnovator",
  },
  {
    id: 8,
    img: Medplus,
    name: "MEDPLUS",
    desc: "The Medplus website serves as a convenient platform for ordering medicines online, accessing product information, and locating nearby stores. It offers essential healthcare services, such as online consultation and health tips. The website provides discounts and promotions, enhancing affordability for customers. With its user-friendly interface and comprehensive features, Medplus website plays a vital role in improving accessibility, convenience, and customer engagement in the pharmaceutical retail sector.",
    link: "https://medi-plus.vercel.app/",
  },
  // {
  //   id: 9,
  //   img: Consulting,
  //   name: "TEN CONSULTING",
  //   desc: "The Ten Consulting is a management consulting firm specializing in strategic planning, operations improvement, and digital transformation. They provide tailored solutions to businesses across various industries, focusing on enhancing efficiency and profitability. Ten Consulting offers expertise in areas such as organizational restructuring, technology integration, and market analysis. Their approach emphasizes collaboration, innovation, and measurable results to drive sustainable growth. With a team of experienced consultants, Ten Consulting delivers impactful strategies to address complex business challenges and drive success.",
  //   link: "https://contacttenconsulti.wixsite.com/consult",
  // },
  {
    id: 10,
    img: Jwellary,
    name: "JWELLARY",
    desc: "The Jewelry is a form of adornment made from precious metals, gemstones, and other materials, often worn for personal expression or cultural significance. It encompasses a wide range of items including rings, necklaces, earrings, bracelets, and watches. Jewelry serves as symbols of status, love, and celebration, and can also hold sentimental value. Design styles vary widely, from traditional to contemporary, reflecting diverse cultural influences and artistic trends. Craftsmanship and quality are paramount in jewelry creation, with skilled artisans employing various techniques to create exquisite pieces.",
    link: "https://tenaccelerator.wixsite.com/jewellery-1",
  },
  {
    id: 11,
    img: Decodeage,
    name: "DECODEAGE",
    desc: "The DecodeAge is a company specializing in genetic testing and personalized health analysis. They offer DNA testing kits that provide insights into an individual's genetic predispositions for various health conditions, traits, and ancestry. DecodeAge utilizes cutting-edge technology to analyze DNA samples and generate comprehensive reports. These reports empower individuals to make informed decisions about their health and lifestyle choices based on their genetic profile. The company prioritizes privacy and data security, adhering to strict confidentiality standards in handling genetic information.",
    link: "https://tenaccelerator.wixsite.com/decode-age-1/senolytic-activator",
  },
  {
    id: 12,
    img: Beauty,
    name: "BEAUTY SHOPPING",
    desc: "The Shopping for beauty products involves selecting skincare, makeup, haircare, and fragrance items tailored to individual preferences and needs. Customers explore a wide range of brands and products, considering factors such as skin type, concerns, and desired effects. Beauty shopping can occur in-store or online, with e-commerce platforms offering convenience and extensive product selections. Influencers and reviews often influence purchasing decisions, guiding consumers toward effective and trendy products. Loyalty programs and promotions incentivize repeat purchases and brand loyalty in the competitive beauty market.",
    link: "https://shopping133.mydurable.com/",
  },
  {
    id: 13,
    img: OneHealth,
    name: "ONE HEALTH",
    desc: "Welcome to Healthcare in! We are a healthcare company dedicated to providing high-quality medical services to our community. With our team of experienced healthcare professionals and state-of-the-art facilities, we strive to deliver exceptional care and improve the overall well-being of our patients. At Healthcare in, we understand the importance of personalized healthcare and the impact it has on individuals and their families. That's why we prioritize building strong relationships with our patients, ensuring that they receive the attention, support, and treatment they deserve. Our commitment to excellence and patient-centered care sets us apart, making us a trusted healthcare provider in the community.",
    link: "https://healthcare77.mydurable.com/",
  },
  {
    id: 14,
    img: ClickCapture,
    name: "CLICK AND CAPTURE",
    desc: 'The "Click and Capture" is a photography website offering a platform for both amateur and professional photographers to showcase their work and connect with enthusiasts. The site features a diverse range of photography genres, including landscape, portrait, wildlife, and more. Users can upload their images, engage in discussions, and participate in photo contests to enhance their skills and gain recognition. Click and Capture also provides resources such as tutorials, tips, and equipment reviews to support photographers in their creative journey. With its user-friendly interface and vibrant community, the website serves as an inspiring hub for photography enthusiasts worldwide.',
    link: "https://clickandcapture2.mydurable.com/?pt=NjViZGVmZmI1MmRhYTNlOGUyZTE1NjUzOjE3MDY5NDY2MjAuMTY1OnByZXZpZXc=",
  },
  {
    id: 15,
    img: KlipCart,
    name: "KLIP CART",
    desc: "The Klip Cart is a mobile and mobile-related shopping website offering a wide range of smartphones, accessories, and related gadgets. The platform provides a user-friendly interface for customers to browse, compare, and purchase mobile devices from various brands. Klip Cart often features exclusive deals, discounts, and bundle offers to attract shoppers. Additionally, the website may offer convenient payment options and swift delivery services to enhance the shopping experience. With its focus on mobile technology, Klip Cart aims to meet the diverse needs of consumers seeking the latest gadgets and accessories.",
    link: "https://gregarious-croissant-4a47be.netlify.app/",
  },
  {
    id: 16,
    img: MediSearch,
    name: "MEDISEARCH",
    desc: "The MedSearch website serves as a convenient platform for ordering medicines online, accessing product information, and locating nearby stores. It offers essential healthcare services, such as online consultation and health tips. The website provides discounts and promotions, enhancing affordability for customers. With its user-friendly interface and comprehensive features, Medplus website plays a vital role in improving accessibility, convenience, and customer engagement in the pharmaceutical retail sector.",
    link: "https://health-care.codedesign.app/#DivPuje",
  },
];

const Our_Work = () => {
  return (
    <div>
      <div className="our-work-title">Our Works</div>

      <div className="our-work-section">
        {data.map((ele) => (
          <div key={ele.id} className="work-card">
            <div className="work-left">
              <img src={ele.img} className="work-img" alt={ele.name} />
            </div>

            <div className="work-right">
              <div className="work-content-card">
                <h3>{ele.name}</h3>
                <p>{ele.desc}</p>

                <button disabled={ele.link === ""}>
                  <a
                    href={ele.link}
                    target="_blank"
                    className={`work-live-btn ${ele.link === "" && "disable"}`}
                  >
                    Show
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Our_Work;
