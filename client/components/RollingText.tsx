import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RollingTextProps {
  text: string;
  className?: string;
  hoverColor?: string;
}

const RollingText: React.FC<RollingTextProps> = ({ text, className = "", hoverColor = "text-amber-400" }) => {
  return (
    <div className={`relative overflow-hidden group cursor-default ${className}`}>
      <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        <span className="block">{text}</span>
        <span className={`block absolute top-full left-0 ${hoverColor}`}>{text}</span>
      </div>
    </div>
  );
};

export default RollingText;
