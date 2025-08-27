import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Link href="/mbti">MBTI</Link>
      <Link href="/who-am-i">Who am I</Link> */}
      <Link href="/pdf-preview">PDF Preview</Link>
      <h3>Welcome to my space</h3>
      <p>Still in progress...</p>
    </div>
  )
}

export default HomePage
