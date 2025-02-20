"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface MemberCardProps {
  name: string
  role: string
  image: string
  description: string
}

export function MemberCard({ name, role, image, description }: MemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-square relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <motion.div
        className="p-6 flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-1 text-foreground">{name}</h3>
        <p className="text-sm text-primary mb-3">{role}</p>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </motion.div>
  )
}

