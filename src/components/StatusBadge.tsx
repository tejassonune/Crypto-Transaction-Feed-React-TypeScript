type Props = {
  status: string
}

const StatusBadge = ({ status }: Props) => {

  let color = ""

  if (status === "Confirmed") color = "bg-green-500"
  else if (status === "Pending") color = "bg-yellow-500"
  else color = "bg-red-500"

  return (
    <span className={`${color} text-white px-2 py-1 text-xs rounded`}>
      {status}
    </span>
  )
}

export default StatusBadge