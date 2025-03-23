"use client";

import {
  Users,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaPinterest } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";

import { Card, CardContent } from "@/components/ui/card";
import { collegeExams, collegesList, faqs, whyChooseUs } from "@/lib/colleges";
import { CollegeExamType, CollegeListType, FAQs, WhyChooseUs } from "@/lib/types";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CallbackForm from "./callback";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const CollegeCarousel = () => {
    return (
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    {collegesList
                      .filter(
                        (_: CollegeListType, i: number) =>
                          i > index * 8 && i <= (index + 1) * 8
                      )
                      .map((college: CollegeListType) => (
                        <div
                          key={college.id}
                          className=" font-semibold p-2 text-sm my-2 flex gap-x-2 shadow-md rounded-lg w-full justify-between items-center"
                        >
                          <img
                            src={college.logo}
                            alt={college.collegeName}
                            className=" h-8"
                          />
                          <p> {college.collegeName}</p>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/owl.png" alt="Admission Hoga Logo" height={80} width={80} />
              <p className=" font-semibold">Admission Hoga</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(testimonialsRef)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection(accordionRef)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                FAQ
              </button>
            </nav>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <button
              onClick={() => scrollToSection(heroRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(testimonialsRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection(accordionRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
            >
              FAQ
            </button>
          </div>
        </div>
      </header>

      <main>
        <section
          ref={heroRef}
          className="pt-24 pb-16 bg-gradient-to-r from-[#6FB2F9] to-[#4D84D1]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 pr-4">
                <h1 className="text-4xl font-extrabold text-white sm:text-4xl md:text-5xl">
                  Your Dream College is Just a Click Away!
                </h1>
                <div className=" flex gap-x-2 items-center">
                  {/* <Target color="red" /> */}
                  <p className="mt-3 max-w-md text-lg text-white opacity-90">
                    Get Expert Guidance & Secure Your Admission Now!
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 flex items-center justify-center"
                    href={`https://wa.me/+918960980806`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" flex items-center justify-center">
                      Chat with Us
                      <img
                        src="https://vacationsaga.b-cdn.net/assets/wsp.png"
                        alt="icon image"
                        className="h-12 w-12"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10"
                  >
                    Schedule a callback
                  </button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2 hidden md:block">
                <div className="relative h-64 sm:h-72 md:h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/admission.png"
                    alt="Admission"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {showForm && <CallbackForm onClose={() => setShowForm(false)} />}
        </section>

        <section className=" flex justify-center mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center">
              Why Choose Us?
            </h2>
            <p className=" text-neutral-600 text-lg mt-4 italic">
              Personalized service, dedicated agents, and hassle-free rentals—because your
              property deserves the best!
            </p>
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center">
              Top-Tier Institutions We&apos;ve Worked With
            </h2>
            {isMobile ? (
              <CollegeCarousel />
            ) : (
              <div className="grid grid-cols-3 gap-1 mt-2 text-neutral-600">
                {collegesList.map((college: CollegeListType) => (
                  <div
                    key={college.id}
                    className="bg-white rounded-xl text-center border p-2"
                  >
                    <div className=" flex md:flex-col gap-x-2 p-4 items-center justify-center">
                      <img
                        src={college.logo}
                        alt={college.collegeName}
                        className=" h-12"
                      />
                      <h3 className=" font-semibold">{college.collegeName}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us ? */}
        <section
          ref={testimonialsRef}
          className="relative w-full max-w-7xl mx-auto mt-4 p-4 "
        >
          <div className="text-center py-4">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose <span className=" text-[#769CCF]">Admission Hoga</span> ?
            </h2>
            <div className=" flex justify-between mt-4">
              <div className=" text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {whyChooseUs.map((item: WhyChooseUs, index: number) => (
                  <div
                    className="bg-white rounded-lg shadow-md text-center w-full my-2"
                    key={index}
                  >
                    {/* Logo */}
                    <div className="flex justify-center">
                      <img src={item.logo} alt="Logo" className=" h-16" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-xl font-bold mt-4 text-gray-800">
                      {item.feature}
                    </h1>

                    {/* Text */}
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* College Exams */}
        <section
          ref={testimonialsRef}
          className="relative w-full max-w-7xl mx-auto mt-4 p-4 "
        >
          <div className="text-center py-4">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Master India&apos;s Leading Entrance Exams
            </h2>
          </div>
          {/* Slider Wrapper */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1} // Default: 1 card visible
            breakpoints={{
              640: { slidesPerView: 1 }, // 1 card for small screens
              768: { slidesPerView: 2 }, // 2 cards for medium screens
              1024: { slidesPerView: 3 }, // 3 cards for large screens
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop
            className="w-full"
          >
            {collegeExams.map((item: CollegeExamType) => (
              <SwiperSlide
                key={item.id}
                className=" bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center"
              >
                <h3 className="text-gray-600 font-bold text-lg">{item.exam_name}</h3>
                <p className="mt-4 text-lg font-medium">{item.full_form}</p>
                <p className="mt-4 ">{item.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 w-full text-center">
          How We Work
        </h2>
        <section className=" flex justify-center h-[60vh] md:h-[70vh]">
          <video autoPlay muted loop className=" hidden md:block rounded-2xl shadow-lg">
            <source
              src="/videos/admission-video.mp4"
              type="video/mp4"
              className=" rounded-xl "
            />
          </video>
          <video autoPlay muted loop className=" md:hidden rounded-2xl shadow-lg">
            <source
              src="/videos/admission-mobile.mp4"
              type="video/mp4"
              className=" rounded-xl "
            />
          </video>
        </section>

        <section ref={aboutRef} className=" bg-white mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Creating unforgettable travel experiences since 2017
              </p>
            </div>
            <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className=" ">
                <h3 className="text-2xl font-extrabold text-gray-900">Our Mission</h3>
                <p className="mt-3 text-lg text-gray-500">
                  At Admission Hoga, we believe that travel has the power to transform
                  lives. Our mission is to create personalized travel experiences that
                  inspire, educate, and bring joy to our clients.
                </p>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Expert Team</h4>
                      <p className="mt-1 text-base text-gray-500">
                        Our team of travel experts has visited over 100 countries.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Global Destinations
                      </h4>
                      <p className="mt-1 text-base text-gray-500">
                        We offer packages to over 500 destinations worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" hidden lg:block">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                  {/* <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="Our team"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section ref={accordionRef} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Find answers to common questions about our services
              </p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((item: FAQs, index: number) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {item.title}
                      </span>
                      {openAccordion === index ? (
                        <ChevronUp className="h-5 w-5 text-orange-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-orange-500" />
                      )}
                    </button>
                    {openAccordion === index && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                {/* <Image
                  src="https://vacationsaga.b-cdn.net/assets/vsround.png"
                  alt="Admission Hoga Logo"
                  width={45}
                  height={45}
                  className="mr-2"
                /> */}
                <span className="ml-2 text-xl font-bold">Admission Hoga</span>
              </div>
              <p className="mt-4 text-base text-gray-400">
                Creating unforgettable travel experiences since 2017.
              </p>
              <p className="mt-2 text-base text-gray-400">
                117/N/70 3rd Floor Kakadeo Kanpur
              </p>
              <p className="mt-2 text-base text-gray-400">
                info@vacationsaga.com | +91 8960980806
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/Vacationsaga/"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://in.pinterest.com/vacationsaga/"
                className="text-gray-400 hover:text-white"
              >
                <FaPinterest className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/vacationsaga/?hl=en"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://in.linkedin.com/company/vacationsaga"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Admission Hoga. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
