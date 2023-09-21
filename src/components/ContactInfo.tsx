/* eslint-disable @typescript-eslint/no-unused-vars */

type Info = {
  title: string;
  description: string;
  background: string;
  email?: string;
};

interface ContactInfoProps {
  info: Info;
}
const ContactInfo: React.FC<ContactInfoProps> = ({ info }) => {
  return (
    <div className="text-black info-card">
      <div className="flex flex-row items-center justify-center info-container">
        <div className="">
          <h1>This is our image</h1>
        </div>
        <div>
          <h6>{info.title}</h6>
          <h6>{info.description}</h6>
          <p>{info.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
