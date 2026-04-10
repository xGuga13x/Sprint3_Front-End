interface CardProps {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white p-7 rounded-xl w-64 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <h3 className="text-[#004857] font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base">{description}</p>
    </div>
  )
}
