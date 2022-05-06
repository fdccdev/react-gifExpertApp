import { GifGridItem } from '../../components/GifGridItem'
import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Detail({ params }) {
  const { id } = params
  const gifs = useGlobalGifs()
  const gif = gifs.find((gif) => gif.id === id)
  const { title, url } = gif
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <GifGridItem title={title} id={id} url={url} />
    </div>
  )
}
