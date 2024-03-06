import { GoBackPageBtn } from './GoBackPage'
import { MusicShowPage } from './MusicShowPage'
import { MusicPlayElements } from './MusicPlayElemnets'
import  "./isongPage.css"

export function SongPage() {
  return (
    <section className="section">
        <GoBackPageBtn />
        <MusicShowPage />
        <MusicPlayElements />
    </section>
  )
}
