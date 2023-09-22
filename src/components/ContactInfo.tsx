/* eslint-disable @typescript-eslint/no-unused-vars */

type Info = {
  title: string;
  description: string;
  email?: string;
};

interface ContactInfoProps {
  info: Info;
}
const ContactInfo: React.FC<ContactInfoProps> = ({ info }) => {
  return (
    <div className="text-black info-card">
      {/* <p className="text-5xl">Contact us for more information</p> */}
      <div className="info-container">
        <div>
          <h6 className="text-2xl font-bold">{info.title}</h6>
          <h6>{info.description}</h6>
          <p>{info.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
