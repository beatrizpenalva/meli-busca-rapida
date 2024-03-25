import PropTypes from 'prop-types'
import NoPicturesPlaceholder from '../../atoms/NoPicturesPlaceholder'
import './CardProduct.styles.css'

const CardProduct = ({ onClick, product }) => {
    const { domain_id, name, pictures } = product ?? {}
    const hasPictures = pictures.length

    return (
        <div type="button" onClick={onClick} className="card-container">
            {hasPictures ? (
                <div className='card-image-wrapper'>
                    <img src={product.pictures[0].url} aria-hidden className="card-image" />
                </div>
            ) : (
                <NoPicturesPlaceholder size='64px' />
            )}
            <div className="card-text-container">
                <p>{name}</p>
                <p>Por: {domain_id}</p>
            </div>
        </div>
    )
}

CardProduct.propTypes = {
    onClick: PropTypes.func.isRequired,
    product: PropTypes.shape({
        domain_id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string,
        })).isRequired,
    }).isRequired,
}

export default CardProduct