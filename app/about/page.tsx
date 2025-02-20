"use client"

import Image from "next/image"
import { PageWrapper } from "@/components/animations"
import { motion } from "framer-motion"

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="pt-header">
        <section className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.h1
                className="text-4xl font-bold mb-8"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
              >
                About The Shrot Trust
              </motion.h1>

              <div className="prose max-w-none">
                <motion.p
                  className="text-lg mb-6"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  The Shrot Trust was established with a vision to create harmonious spaces where luxury meets
                  sustainability. Our flagship project, Swan Resort, represents the culmination of this vision – an
                  off-grid paradise that proves eco-conscious living doesn't mean compromising on comfort.
                </motion.p>

                <motion.h2
                  className="text-2xl font-semibold mt-12 mb-4"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Our Mission
                </motion.h2>
                <motion.p
                  className="mb-6"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  We strive to demonstrate that sustainable living can be both luxurious and responsible. Through Swan
                  Resort, we offer our guests an opportunity to experience the perfect balance between modern comfort
                  and environmental consciousness.
                </motion.p>

                <motion.div
                  className="my-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Swan Resort Exterior"
                    width={800}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </motion.div>

                <motion.h2
                  className="text-2xl font-semibold mb-4"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  The Off-Grid Experience
                </motion.h2>
                <motion.p
                  className="mb-6"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  At Swan Resort, we've carefully crafted an experience that showcases the potential of off-grid living.
                  Our facilities are powered by renewable energy, utilize advanced water conservation systems, and
                  implement sustainable waste management practices – all while providing the amenities and comfort
                  expected of a luxury resort.
                </motion.p>

                <motion.h2
                  className="text-2xl font-semibold mt-12 mb-4"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Our Commitment
                </motion.h2>
                <motion.p
                  className="mb-6"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  The Shrot Trust is committed to:
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 mb-6 space-y-2"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {[
                    "Environmental conservation and sustainability",
                    "Promoting eco-conscious luxury tourism",
                    "Supporting local communities",
                    "Educational initiatives about sustainable living",
                    "Preserving natural habitats",
                  ].map((item, index) => (
                    <motion.li key={index} variants={listItemVariants} className="text-foreground">
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

