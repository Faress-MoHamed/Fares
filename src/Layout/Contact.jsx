import Form from "../ui/Form";
import Header from "../ui/Header";

function Contact() {
  return (
    <section
      id="#contact"
      className="container mx-auto max-w-7xl pt-36 pb-9 overflow-hidden"
    >
      <Header>Keep In Touch</Header>
      <div className="flex flex-col md:flex-row items-start gap-20 md:p-0 p-9">
        <div className="md:w-2/5 w-full flex flex-col justify-center gap-5">
          <h2 className="relative w-fit text-xl  font-bold text-cyan-700 before:absolute before:w-full before:bottom-[-5px] before:left-0 before:h-[2px] before:bg-cyan-700">
            Let`s contact and don`t waste any time
          </h2>
          <p className="font-semibold">
            I`m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I`ll try
            my best to get back to you!
          </p>
          <a
            className="flex items-center gap-3 text-lg font-semibold"
            href="tel:+201144545347"
          >
            <i class="fa-solid fa-phone text-cyan-700"></i>
            <p>+201144545347</p>
          </a>
          <a
            className="flex items-center gap-3 text-lg font-semibold"
            href="mailto:fareess.mohameedd@gmail.com"
          >
            <i class="fa-solid fa-envelope text-cyan-700"></i>
            <p>fareess.mohameedd@gmail.com</p>
          </a>
        </div>
      <Form/>
      </div>
    </section>
  );
}

export default Contact
