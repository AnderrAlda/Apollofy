import { Track } from '../../../utils/index.tsx'

type Props = {
  song: Track
}

export function MusicShowPage({song}: Props) {
  return (
    <div>
        <div className="div-img ml-16 mt-20 rounded-lg bg-gray-800">
            <img src={song.thumbnail} alt="" />
        </div>
        <p className="mt-9 text-2xl space-x-6 text-center text-white">{song.name}</p>
        <p className="mt-2 text-lg text-center text-white">{song.artist}</p>
    </div>
  )
}
