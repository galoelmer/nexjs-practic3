import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
     <h1>Homepage</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error earum necessitatibus nobis ab est dolor natus. Velit maxime, dicta accusantium repellat hic nesciunt itaque minima quas atque possimus. Necessitatibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error earum necessitatibus nobis ab est dolor natus. Velit maxime, dicta accusantium repellat hic nesciunt itaque minima quas atque possimus. Necessitatibus.</p>
     <Link href="/ninjas">
      <a>See Ninjas List</a>
     </Link>
    </div>
  )
}
