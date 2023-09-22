import MBTIDisplay from "@/components/MBTIDisplay"

interface MBTIPageProps {
  searchParams: {
    type: string
  }
}

export default function MBTIResultPage({
  searchParams: { type }
}: MBTIPageProps) {
  return (
    <>
      <MBTIDisplay mbti={type ?? ""} />
    </>
  )
}
