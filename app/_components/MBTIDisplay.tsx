"use client"

interface MBTIDetailsProps {
  mbti: string
}

export default function MBTIPage({ mbti }: MBTIDetailsProps) {
  return <>Your MBTI is {mbti}</>
}
