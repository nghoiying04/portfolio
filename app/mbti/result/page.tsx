import MBTIDisplay from "@/components/MBTIDisplay"
import { redirect } from "next/navigation"

interface MBTIPageProps {
  searchParams: {
    type: string
  }
}

export default function MBTIResultPage({
  searchParams: { type }
}: MBTIPageProps) {
  if (type === null) {
    redirect("../")
  } else {
    return (
      <>
        <MBTIDisplay mbti={type} />
      </>
    )
  }
}