"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatusCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  valueColor?: string;
  isLoading?: boolean;
}

export default function StatusCard({
  icon,
  title,
  value,
  valueColor = "text-gray-100",
  isLoading = false,
}: StatusCardProps) {
  return (
    <motion.div
      className="bg-dark-200 rounded-lg p-4 border border-dark-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-gray-400">{icon}</div>
        <h3 className="font-medium text-gray-300">{title}</h3>
      </div>
      {isLoading ? (
        <div className="h-8 bg-dark-100 animate-pulse rounded" />
      ) : (
        <p className={`text-2xl font-semibold ${valueColor}`}>{value}</p>
      )}
    </motion.div>
  );
}
