import AboutUs from '@/components/home/aboutUs/AboutUs';
import CollegeInfo from '@/components/home/collegeInfo/CollegeInfo';
import HeroSection from '@/components/home/hero/HeroSection';
import OurTeachers from '@/components/home/ourTeachers/OurTeachers';
import Principal from '@/components/home/principal/Principal';
import Teachers from '@/components/home/teachers/Teachers';

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <CollegeInfo></CollegeInfo>
      <Principal></Principal>
      <AboutUs></AboutUs>
      {window.innerWidth > 768 ? (
        <OurTeachers></OurTeachers>
      ) : (
        <Teachers></Teachers>
      )}
      {/* <Testimonial></Testimonial> */}
      {/* <CallToAction></CallToAction> */}
      {/* <Footer /> */}
    </>
  );
}
