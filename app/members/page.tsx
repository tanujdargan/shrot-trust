import { MemberCard } from "@/components/member-card"

const members = [
  {
    name: "Person 1",
    role: "Trustee Chair",
    image: "/assets/terrace2.jpg?height=400&width=400",
    description: "Leading the vision of sustainable luxury tourism.",
  },
  {
    name: "Person 2",
    role: "Environmental Director",
    image: "/assets/terrace.jpg?height=400&width=400",
    description: "Overseeing our ecological initiatives and sustainability programs.",
  },
  {
    name: "Person 3",
    role: "Operations Manager",
    image: "/placeholder.svg?height=400&width=400",
    description: "Ensuring smooth day-to-day operations at Swan Resort.",
  },
  {
    name: "Person 4",
    role: "Community Relations",
    image: "/placeholder.svg?height=400&width=400",
    description: "Building strong relationships with local communities.",
  },
  {
    name: "Person 5",
    role: "Sustainability Expert",
    image: "/placeholder.svg?height=400&width=400",
    description: "Implementing innovative eco-friendly solutions.",
  },
  {
    name: "Person 6",
    role: "Guest Experience Director",
    image: "/placeholder.svg?height=400&width=400",
    description: "Creating memorable experiences for our guests.",
  },
]

export default function MembersPage() {
  return (
    <div className="pt-header">
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Meet the dedicated individuals behind The Shrot Trust who work tirelessly to make Swan Resort a reality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

