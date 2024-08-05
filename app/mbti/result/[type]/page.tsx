import MBTIDisplay from '@/components/MBTIDisplay'

interface MBTIPageProps {
  params: {
    type: string
  }
}

export const generateStaticParams = () => {
  return [{ type: 'ENFJ' }, { type: 'INFJ' }]
}

const MBTIResultPage = async ({ params }: MBTIPageProps) => {
  const { type } = params
  return <MBTIDisplay mbti={type ?? ''} />
}

export default MBTIResultPage
