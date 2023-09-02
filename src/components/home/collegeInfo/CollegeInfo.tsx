import { BsFillBookFill } from 'react-icons/Bs';
import { GiThumbUp } from 'react-icons/Gi';
import { BiBookReader } from 'react-icons/bi';
import './CollegeInfo.css';

const CollegeInfo = () => {
  return (
    <div className="container infoContainer">
      <div className="flex  flex-row gap-8 collegeInfo">
        <div className="cInfo education col-md-4">
          <p>
            <GiThumbUp className="icons" />
          </p>
          <h5>Quality Education</h5>
          <p>
            We don’t just give students an education and experiences that set
            them up for success in a career. We help them succeed in their
            career—to discover a field they’re passionate about and dare to lead
            it. <br />
            গুণগত শিক্ষা <br />
            আমরা ছাত্রদের একটি শিক্ষা এবং অভিজ্ঞতা দেওয়ার চেষ্টা করি না
            শুধুমাত্র একটি পেশায় সাফল্যের দিকে সেট করে। আমরা তাদের কর্মজীবনে
            সাফল্য অর্জনে সাহায্য করি - একটি ক্ষেত্র আবিষ্কার করতে যা তারা
            উৎসাহী এবং সেটিতে নেতৃত্ব দাঁড়াতে আগ্রহী।
          </p>
        </div>
        <div className="cInfo education col-md-4 healthy">
          <p>
            {/* <i class="fas fa-book-open icon"></i> */}
            <BsFillBookFill className="icons" />
          </p>
          <h5>Healthy Education</h5>
          <p>
            We don’t just give students an education and experiences that set
            them up for success in a career. We help them succeed in their
            career—to discover a field they’re passionate about and dare to lead
            it. <br />
            স্বাস্থ্যমূলক শিক্ষা <br />
            আমরা ছাত্রদের একটি শিক্ষা এবং অভিজ্ঞতা দেওয়ার চেষ্টা না করি শুধু
            তাদের কর্মজীবনে সাফল্য অর্জনে সাহায্য করতে পারি। আমরা তাদের
            কর্মজীবনে সাফল্য অর্জনে সাহায্য করি - তাদের উদ্যোগ নিতে এবং সেটি
            নেতৃত্ব করতে মুক্তি দেওয়ার জন্য একটি আগ্রহবোধ করতে।
          </p>
        </div>
        <div className="cInfo education col-md-4">
          <p>
            <BiBookReader className="icons" />
          </p>
          <h5 className="">Qualified Teacher</h5>
          <p>
            We don’t just give students an education and experiences that set
            them up for success in a career. We help them succeed in their
            career—to discover a field they’re passionate about and dare to lead
            it. <br />
            যোগ্য শিক্ষক <br />
            আমরা ছাত্রদের শুধু শিক্ষা এবং অভিজ্ঞতা দেওয়ার চেষ্টা করি না, যা
            তাদের একটি কর্মজীবনে সাফল্যের দিকে সেট করে। আমরা তাদের কর্মজীবনে
            সাফল্য অর্জনে সাহায্য করি - তাদের যে ক্ষেত্রে প্রাণপ্রিয় এবং সেই
            ক্ষেত্রে নেতৃত্ব নেওয়া যেতে সাহায্য করি।
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;
