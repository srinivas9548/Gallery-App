import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updatedThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const activeThumbnailClassName = isActive ? 'active-thumbnail' : ' '

  const onClickThumbnail = () => {
    updatedThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeThumbnailClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
