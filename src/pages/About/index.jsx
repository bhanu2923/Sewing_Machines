import React from "react";
import { motion } from "framer-motion";
import { Check, Award, Users, Heart, Shield, Truck, Lightbulb, Hand,Webhook, Handshake } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#eef2f7] py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6"
        >
          Our <span className="text-[#c54513]">Story</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto"
        >
          Four decades of trust, quality, and innovation in the world of sewing
        </motion.p>
      </div>

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Our Journey Since 1982</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Our journey began in 1982 in Rajahmundry, with a simple but powerful vision: to bring reliable sewing machines and genuine service to every customer who values craftsmanship. Over the past 43 years, that vision has grown into a legacy.
            </p>
            <p>
              From a humble family-run business, we have become one of the most trusted names in sewing machines, accessories, and servicing in Andhra Pradesh.
            </p>
            <p>
              With a strong presence in Rajahmundry and an expanding footprint through our branch in Visakhapatnam, we have served thousands of households, boutiques, professional tailors, and industries—each one becoming a part of our story.
            </p>
          </div>
        </motion.div>

        {/* Heritage Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] text-white p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 mr-3 text-[#c54513]" />
              <h3 className="text-2xl font-bold">A Heritage of Trust and Quality</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Built on dedication, honesty, and expertise, our brand has earned deep-rooted customer faith that spans generations. We believe in delivering not just products, but long-lasting solutions backed by expert service and personal guidance. This trust has positioned us among the leading sewing machine dealers in the region.
            </p>
          </motion.div>

          {/* What We Offer */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Hand className="h-8 w-8 mr-3 text-[#c54513]" />
              <h3 className="text-2xl font-bold text-[#1a365d]">What We Offer</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>A wide range of domestic, professional, and industrial sewing machines</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Genuine accessories, spare parts, attachments, and upgrades</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Technical servicing and repairs by skilled, experienced technicians</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Personalized consultation to help you choose the perfect machine</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Long-term after-sales support for smooth, reliable performance</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Innovation Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#f8fafc] to-white rounded-2xl shadow-xl p-8 md:p-12 mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c54513]/10 text-[#c54513] mb-6">
             <Handshake className="h-10 w-10 mr-0 text-[#c54513]" />

            </div>
            
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Commitment to Innovation and Growth</h3>
            <p className="text-gray-700 leading-relaxed">
              As the sewing industry evolves, so do we. We continue to adopt new technologies, modern models, and advanced solutions to ensure our customers always have access to the best tools for their creative and business needs.
            </p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col justify-center"
          >
            <div className="flex items-center mb-6">
              <Webhook className="h-8 w-8 mr-3 text-[#c54513]" />
              <h3 className="text-2xl font-bold text-[#1a365d]">Moving Forward</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              From 1982 to today, our purpose remains the same: to support creativity, empower livelihoods, and provide dependable sewing solutions with integrity and care. As we expand across India, we carry forward the values that built our foundation—quality, trust, and unwavering customer commitment.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c54513] to-[#1a365d] opacity-90"></div>
            <div className="relative p-8 text-white">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 mr-3 text-white" />
                <h3 className="text-2xl font-bold">Our Vision for India</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                After becoming a trusted name in Andhra Pradesh for over four decades, we are now stepping into a larger dream—
                <br /> <span className="text-white font-bold text-lg">to serve the pan-India market and deliver sewing machines and accessories to customers across the country.</span>
              </p>
              <p className="text-gray-200 leading-relaxed mt-4">
                With nationwide delivery capabilities, strengthened logistics, and a growing digital presence, we are committed to making our products and services accessible to every corner of India.
              </p>
            </div>
          </motion.div>

          
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-[#c54513] mb-2">40+</div>
            <div className="text-gray-700">Years of Excellence</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-[#c54513] mb-2">10,000+</div>
            <div className="text-gray-700">Happy Customers</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-[#c54513] mb-2">2</div>
            <div className="text-gray-700">Cities & Growing</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Become Part of Our Growing Family</h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their sewing needs. Experience the difference of working with a company that truly cares.
          </p>
          <button className="bg-[#c54513] hover:bg-[#a43a10] text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Contact Us Today
          </button>
        </motion.div>
      </section>
    </div>
  );
}