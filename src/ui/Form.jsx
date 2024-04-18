import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ItemForm from "../Components/ItemForm";

function Form() {
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_imt0f7s", "template_70lnm59", form.current, {
        publicKey: "bBhmftc8yaiNUMpQc",
      })
      .then(
        () => {
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 3000);
          Array.from(form.current.getElementsByTagName("input")).map(
            (el) => (el.value = ""),
          );
          const textareas = form.current.getElementsByTagName("textarea");
          for (let i = 0; i < textareas.length; i++) {
            textareas[i].value = "";
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };


  return (
    <div className=" md:w-[60%] w-full">
      <p className={`${showMessage ? "block" : "hidden"}`}>Submited SUCCESS</p>
      <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
        <ItemForm name={"name"} type={"text"}></ItemForm>
        <ItemForm name={"email"} type={"email"}></ItemForm>
        <label className="inline-block after:content-['*'] after:text-red-700 capitalize">
          Message
        </label>
        <textarea
          aria-label="text area"
          className="outline-none p-2 border-gray-950 border-[2px] rounded-md bg-primary-50 placeholder:text-xl"
          name="message"
          cols={50}
          rows={10}
        />
        <div className="flex justify-center space-y-14 my-5">
          <button
            aria-label="submit"
            type="submit"
            className=" bg-primary-900 w-36 h-12 rounded-full text-lg hover:text-white font-bold hover:scale-110 text-neutral-300 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
