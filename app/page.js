import Image from 'next/image'
import Banner from 'app/components/banner/Banner.js'
import Events from 'app/components/events/Events.js'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Banner />
      <Events />
    </main>
    
  )
}
