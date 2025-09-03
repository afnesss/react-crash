
const Card = ({children, bg = 'bg-gray-100'}) => {
  return (
    <div className={`shadow-md p-6 ${bg} rounded-lg`}>
      {children}
    </div>
  )
}

export default Card
