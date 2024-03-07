import { GoBackPageBtn } from './GoBackPage'
import { MusicShowPage } from './MusicShowPage'
import { MusicPlayElements } from './MusicPlayElemnets'
import  "./isongPage.css"

export function SongPage() {
  return (
    <section  className='bg-black w-screen h-screen'>
        <GoBackPageBtn />
        <MusicShowPage />
        <MusicPlayElements />
    </section>
  )
}
