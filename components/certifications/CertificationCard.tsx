import React from 'react';
import { motion } from "framer-motion";
import { certification } from "@/types/main";
import Image from "next/image";

interface Props {
  certification: certification;
  index: number;
}

const CertificationCard: React.FC<Props> = ({ certification, index }) => {
  // Function to get the badge image based on issuer
  const getBadgeImage = (issuer: string): string => {
    switch (issuer.toLowerCase()) {
      case "coursera":
        return "https://img.icons8.com/?size=512w&id=brPKCGmHqb0l&format=png";
      case "udemy":
        return "https://img.icons8.com/color/144/udemy.png";
      case "microsoft":
        return "https://img.icons8.com/color/144/microsoft.png";
      case "amazon web services":
        return "https://img.icons8.com/color/144/amazon-web-services.png";
      default:
        return "https://img.icons8.com/color/144/certificate.png";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12">
          <Image
            src={getBadgeImage(certification.issuer)}
            alt={`${certification.issuer} badge`}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {certification.name}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        {certification.issuer}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        {certification.date}
      </p>
      {certification.url && (
        <a
          href={certification.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 text-sm font-medium inline-flex items-center gap-1"
        >
          View Certificate
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </motion.div>
  );
};

export default CertificationCard; 