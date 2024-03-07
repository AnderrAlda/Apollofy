import { GoBackPageBtn } from './GoBackPage'
import { MusicShowPage } from './MusicShowPage'
 import  "./isongPage.css"
import AudioPlayer from '../../components/audioPlayer'

export function SongPage() {
  return (
    <section  className='bg-black w-screen h-screen'>
        <GoBackPageBtn />
        <MusicShowPage />
        <AudioPlayer/>
    </section>
  )
}
