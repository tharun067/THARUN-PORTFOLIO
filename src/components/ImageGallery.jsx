import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const images = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern responsive web applications",
    url: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "development"
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Cross-platform mobile solutions",
    url: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "mobile"
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Intelligent solutions and automation",
    url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ai"
  },
  {
    id: 4,
    title: "Backend Systems",
    description: "Scalable server architectures",
    url: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "backend"
  },
  {
    id: 5,
    title: "Data Analytics",
    description: "Insights from complex datasets",
    url: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "data"
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure",
    url: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "cloud"
  }
];

const categories = ["all", "development", "mobile", "ai", "backend", "data", "cloud"];

const ImageCard = ({ image, index, onClick }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="relative group cursor-pointer"
    onClick={() => onClick(image)}
  >
    <div className="relative overflow-hidden rounded-xl bg-tertiary">
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
          <p className="text-gray-300 text-sm">{image.description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Modal = ({ image, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="relative max-w-4xl max-h-[90vh] bg-tertiary rounded-xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-auto max-h-[70vh] object-contain"
      />
      <div className="p-6">
        <h3 className="text-white font-bold text-2xl mb-2">{image.title}</h3>
        <p className="text-gray-300">{image.description}</p>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
      >
        ×
      </button>
    </motion.div>
  </motion.div>
);

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Visual Portfolio</p>
        <h2 className={styles.sectionHeadText}>Gallery.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Explore my work through this visual gallery showcasing various projects 
        and technologies I've worked with. Each image represents different aspects 
        of my development journey and expertise.
      </motion.p>

      {/* Category Filter */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#915EFF] text-white"
                : "bg-tertiary text-secondary hover:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            index={index}
            onClick={setSelectedImage}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default SectionWrapper(ImageGallery, "gallery");