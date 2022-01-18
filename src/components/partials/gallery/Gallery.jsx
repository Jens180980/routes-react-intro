import styles from './gallery.module.scss'

export function Gallery (props) {

    return (
        <div className={styles.galleryWrap}>
                {props.imageList.map((image, index) => {
                    console.log(image.filename);
                    return (
                        <figure>
                        <img key={index} src={require(`../../../assets/img/${image.filename}.jpeg`)} alt='watch'/>
                        <figcaption>{image.title}</figcaption>
                        </figure>
                    )
                })} 
        </div>

    )
}
            