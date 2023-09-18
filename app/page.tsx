import MBTIInput from "@/components/MBTIInput"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> What's Your MBTI?</div>
      <MBTIInput />
    </div>
  )
}
