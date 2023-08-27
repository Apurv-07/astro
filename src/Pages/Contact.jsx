import Button from "../components/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useRef, useState } from "react";
import Modalnew from "../components/Modalnew";
import emailjs from '@emailjs/browser';

{
  /* <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" /> */
}

const Contact = () => {
  // const navigate=useNavigate();
  const data = [
    {
      id: 0,
      link: "https://www.facebook.com",
      name: "Facebook",
      icon: "FacebookIcon",
    },
    {
      id: 1,
      link: "https://www.instagram.com",
      name: "Instagram",
      icon: "InstagramIcon",
    },
    {
      id: 2,
      link: "https://www.twitter.com",
      name: "Twitter(X)",
      icon: "TwitterIcon",
    },
    {
      id: 3,
      link: "http://wa.me/+919304945343",
      name: "Whatsapp",
      icon: "WhatsAppIcon",
    },
  ];
  const iconMapping = {
    FacebookIcon: FacebookIcon,
    InstagramIcon: InstagramIcon,
    TwitterIcon: TwitterIcon,
    WhatsAppIcon: WhatsAppIcon,
  };
  function handleClick(link) {
    window.open(`${link}`);
  }
  const form = useRef();

  let [isOpen, setIsOpen]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Function running")
    console.log(form.current)
    emailjs.sendForm('service_fh6fpz9', 'template_jc9zq2d', form.current, 'Jt9uyGXeyM1KjR8_c')
      .then((result) => {
        console.log("Email sent")
        setIsOpen(true);
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="">
      <div className="relative">
        <div
          className="absolute flex justify-center h-[120vh] md:h-screen w-screen top-[-130px] z-[-10] bg-[rgba(0,0,0,0.9)] mix-blend-soft-light"
          style={{
            backgroundImage: "url(/assets/Hanuman_ji.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Your content goes here */}
          <div className="max-md:flex-col flex mt-[200px] p-10 items-center gap-5 bg-[rgba(0,0,0,0.6)]">
            <div className="animate-[wave_2s_ease-in-out]">
              <img
                className="rounded-2xl md:w-[800px] md:h-[500px]"
                src="/assets/Pandit_jee.jpeg"
              />
            </div>
            <div className="md:w-[50%] overflow-auto animate-[wave_1s_ease-in]">
              <h1 className="text-[52px] max-sm:text-[24px] text-white font-bold">Pandit Ji</h1>
              <p className="text-white font-bold max-md:text-[12px]">
                Pandit Jagannath Guruji is a renowned and talented top Indian
                astrologer with extensive experience. He offers a genuine range
                of astrological counselling and fortune-telling with useful
                predictions in significant events of your life, such as career,
                employment, business, and finance, issues of health, wealth, and
                relationships across marriage and compatibility matters (kundali
                matching), and potent luck, fortune, face, and palm readings to
                help you successfully navigate life.
              </p>
              <div className="flex lg:whitespace-nowrap gap-2 w-[100px]">
                {/* <Button onClick={handleClick}><FacebookIcon />Facebook</Button>
            <Button onClick={()=>{}}><InstagramIcon />Instagram</Button>
            <Button onClick={()=>{}}><TwitterIcon />Twitter(X)</Button>
            <Button onClick={()=>{}}><WhatsAppIcon />WhatsApp</Button> */}
                {data.map((link) => {
                  const IconComponent = iconMapping[link.icon];
                  return (
                    <Button key={link.id} onClick={() => handleClick(link.link)}>
                      <IconComponent />
                      {link.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[100vw] h-[100px] md:top-[680px] max-md:top-[650px] md:bg-white p-2 md:p-10">
        <h2 className="text-[24px] font-inter font-semibold border-orange-300 border-solid border-y-4">
          Connect with me through Email
        </h2>
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got any problem? Want the most effective solutions? Let us know.</p>
            <form ref={form} onSubmit={sendEmail} class="space-y-8">
              <div>
                <label htmlFor="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                <input name="user_name" type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
              </div>
              <div>
                <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                <input name="user_email" type="email" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
              <div>
                <label htmlFor="Subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Subject</label>
                <input name="subject" type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
              <div class="sm:col-span-2">
                <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              {/* <button type="submit" className="bg-orange-500 text-white">Send</button> */}
              <Button type={'submit'}>Send Email</Button>
            </form>
          </div>
        </section>
        <Modalnew open={isOpen} handleClose={setIsOpen} title={"We'll be in touch with you as soon as possible!"} header={"Thank you. Email sent"} />
      </div>
    </div>
  );
};

export default Contact;
