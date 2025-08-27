import MBTIDisplay from '@/components/MBTIDisplay'

interface MBTIPageProps {
  params: Promise<{
    type: string
  }>
}

export const generateStaticParams = () => {
  return [{ type: 'ENFJ' }, { type: 'INFJ' }]
}

const MBTIResultPage = async (props: MBTIPageProps) => {
  const params = await props.params;
  const { type } = params
  return <MBTIDisplay mbti={type ?? ''} />
}

export default MBTIResultPage
