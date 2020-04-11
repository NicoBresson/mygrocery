import Link from 'next/link'

const Home = () => (
  <div>
    <h1>Welcome, please authenticate</h1>
    <Link href='/login'><a>Go to login</a></Link>
    <Link href='/signup'><a>Go to Signup</a></Link>
  </div>
)

export default Home
