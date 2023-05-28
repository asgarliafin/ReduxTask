import React from "react";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div id="landing">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to our E-commerce Home Page!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        We are delighted to have you here on our E-commerce Home Page, where
        your online shopping experience begins. Our mission is to provide you
        with a seamless and personalized shopping journey that caters to your
        unique needs. Explore, unwind, and discover the products you've been
        searching for with ease!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        With our extensive range of products, you'll find everything you desire
        across various categories such as fashion, electronics, home essentials,
        cosmetics, and much more. Whether you're a fashion enthusiast keeping up
        with the latest trends or seeking high-quality electronics, we've got
        you covered.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our user-friendly interface ensures that navigating through our platform
        is a breeze. Browse through our carefully curated collections, use our
        intuitive search feature to find specific items, and take advantage of
        our detailed product descriptions and images to make informed decisions.
        Plus, our secure and hassle-free checkout process ensures a smooth
        transaction every time.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Join our growing community of satisfied customers who trust us to
        deliver top-notch products and exceptional service. We value your
        feedback, and our dedicated customer support team is here to assist you
        with any queries or concerns you may have along the way.
      </motion.p>
    </div>
  );
}

export default Landing;
