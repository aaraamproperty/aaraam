import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import MilestonesTimeline from "@/components/MilestonesTimeline";
import { Link } from "react-router-dom";
import { Building2, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import officeImage from "@/assets/office-space.jpg";
import rajuSahaImage from "@/assets/Members/Raju Saha.jpeg";
import sauravGuhaImage from "@/assets/Members/Saurav Guha.jpeg";
import sanupRoyImage from "@/assets/Members/Sanup Roy.jpeg";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "Aaraam Properties was established with a vision to revolutionize commercial real estate in India",
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Expanded operations to 5 major cities across India",
    },
    {
      year: "2019",
      title: "Digital Platform",
      description: "Launched our comprehensive digital property platform",
    },
    {
      year: "2021",
      title: "Corporate Partnerships",
      description: "Partnered with 100+ leading corporates and retail brands",
    },
    {
      year: "2023",
      title: "Industry Leader",
      description:
        "Recognized as one of India's leading commercial property consultants",
    },
    {
      year: "2025",
      title: "Pan-India Presence",
      description:
        "Serving clients across 15+ cities with 500+ verified properties",
    },
  ];

  const team = [
    { name: "Raju Saha", role: "Co-Founder & CEO", image: rajuSahaImage },
    {
      name: "Saurav Guha",
      role: "Co-Founder & COO",
      image: sauravGuhaImage,
    },
    {
      name: "Sanup Roy",
      role: "Co-Founder & CMO",
      image: sanupRoyImage,
    },
  ];

  const values = [
    {
      icon: Building2,
      title: "Excellence",
      description:
        "We strive for excellence in every property we present and every service we deliver.",
    },
    {
      icon: Users,
      title: "Trust",
      description:
        "Building lasting relationships through transparency and reliability.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Leveraging technology to simplify commercial real estate.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "Committed to helping businesses find spaces that fuel their growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingChatbot />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-32 pb-20 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={officeImage}
            alt="Aaraam Properties Office"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#004861]/90" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Building Trust for Decades
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Your trusted partner in commercial real estate excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Milestones Timeline - Interactive Animated */}
      <MilestonesTimeline milestones={milestones} />

      {/* Vision Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#16A34A] mb-4">
              Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-1 lg:order-1 overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img
                src={officeImage}
                alt="Aaraam Properties Vision"
                className="w-full h-[500px] object-cover shadow-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-2 h-[500px] flex flex-col justify-center space-y-6"
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                Founded in 2015, Aaraam Properties was established with a vision
                to revolutionize commercial real estate in India. We are
                dedicated to connecting businesses with verified, transparent,
                and hassle-free commercial spaces—from corporate offices to
                retail shops.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                Established with integrity at our core, Aaraam Properties is
                committed to sourcing premium-grade authentic commercial
                properties across major cities. Our properties undergo thorough
                verification to preserve the naturally occurring business
                potential and growth opportunities.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                The brainchild of industry veterans with decades of real estate
                experience, Aaraam Properties has secured itself as a reliable
                source for high-quality commercial properties with a large
                selection of premium office spaces, retail outlets, and
                co-working hubs.
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision Cards - Inside Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative h-[150px] bg-white hover:bg-[#16A34A] rounded-3xl overflow-hidden cursor-pointer border border-[#004861]/10 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Title - Visible by default, fades out on hover */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out group-hover:opacity-0">
                <h3 className="text-3xl md:text-4xl font-bold text-[#004861]">
                  Our Mission
                </h3>
              </div>

              {/* Description - Hidden by default, fades in with upward motion on hover */}
              <div className="absolute inset-0 flex items-center justify-center px-6 py-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="text-center flex items-center justify-center h-full">
                  <p className="text-white leading-relaxed text-sm md:text-base">
                    To revolutionize commercial real estate by providing
                    transparent, verified, and corporate-grade leasing solutions
                    across India. We aim to simplify the process of finding
                    perfect commercial spaces for businesses of all sizes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative h-[150px] bg-white hover:bg-[#16A34A] rounded-3xl overflow-hidden cursor-pointer border border-[#004861]/10 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Title - Visible by default, fades out on hover */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out group-hover:opacity-0">
                <h3 className="text-3xl md:text-4xl font-bold text-[#004861]">
                  Our Vision
                </h3>
              </div>

              {/* Description - Hidden by default, fades in with upward motion on hover */}
              <div className="absolute inset-0 flex items-center justify-center px-6 py-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="text-center flex items-center justify-center h-full">
                  <p className="text-white leading-relaxed text-sm md:text-base">
                    To be India's most trusted commercial property platform,
                    empowering businesses to find their perfect space with
                    confidence and ease. We continuously strive to provide the
                    best solutions today, tomorrow, and beyond.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#004861] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-muted-foreground">
              The minds behind Aaraam Properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#004861] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#004861] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#F7F7F7] p-8 rounded-3xl text-center hover:bg-[#16A34A] hover:text-white group transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-[#16A34A] group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-white group-hover:text-[#16A34A] transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-[#004861] group-hover:text-white mb-4 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#004861] mb-4">
              Stay Updated About Properties
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get announcements, launch information, and exclusive offers
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email && email.includes("@")) {
                  setSubscribeStatus("success");
                  setEmail("");
                  setTimeout(() => setSubscribeStatus("idle"), 3000);
                } else {
                  setSubscribeStatus("error");
                  setTimeout(() => setSubscribeStatus("idle"), 3000);
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto items-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 w-full px-6 py-4 rounded-full border-2 border-[#004861]/20 focus:border-[#16A34A] focus:outline-none transition-colors"
              />
              <Button
                type="submit"
                className="bg-[#16A34A] hover:bg-[#15803d] text-white px-8 py-4 rounded-full font-semibold whitespace-nowrap"
              >
                SUBSCRIBE
              </Button>
            </form>
            {subscribeStatus === "success" && (
              <p className="mt-4 text-[#16A34A] font-semibold">
                Successfully subscribed! Thank you.
              </p>
            )}
            {subscribeStatus === "error" && (
              <p className="mt-4 text-red-500 font-semibold">
                Please enter a valid email address.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
