import Meta from "../../components/Meta";
import { MailIcon } from "@heroicons/react/solid";

const contact = () => {
  return (
    <div className="text-center mt-20">
      <Meta title="Contact Us" />
      <h1 className="text-4xl font-bold">Send me an email</h1>
      <p className="py-4 text-3xl text-gray-400">
        <a href="mailto:my@email.com" title="Click here!">
          <MailIcon className="my-2 cursor-pointer h-full m-auto w-10 text-green-400" />
        </a>
      </p>
    </div>
  );
};

export default contact;
