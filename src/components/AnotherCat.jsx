import { useCatImage } from '../hooks/useCatImage.js'

export function AnotherCat () {
  const { imageUrl } = useCatImage({ fact: 'cat' })
  console.log(imageUrl)

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
