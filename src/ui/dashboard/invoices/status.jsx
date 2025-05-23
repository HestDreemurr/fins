import { ClockIcon, CheckIcon } from "@heroicons/react/24/outline"

export default function InvoiceStatus({ status }) {
  if (status === "pending") {
    return (
      <span style={{ backgroundColor: "darkgray" }}>
        Pendente <ClockIcon width={16} height={16} />
      </span>
    )
  } else if (status === "paid") {
    return (
      <span style={{ backgroundColor: "limegreen" }}>
        Pago <CheckIcon width={16} height={16} />
      </span>
    )
  }
}