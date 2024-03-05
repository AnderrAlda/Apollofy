import { AudioPlayer } from './AudioPlayer'
import { GoBackPageBtn } from './GoBackPage'


export function SongPage() {
  return (
    <section className="section">
        <GoBackPageBtn />
        <AudioPlayer />
    </section>
  )
}
