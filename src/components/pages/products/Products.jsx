import { Button } from '../../partials/button/button'
import { Gallery } from '../../partials/gallery/Gallery'

const imgArr = [
    {
        filename: 'watch1',
        title: 'watch1' 
    },
    {
        filename: 'watch2',
        title: 'watch2' 
    },
    {
        filename: 'watch3',
        title: 'watch3' 
    },
    {
        filename: 'watch4',
        title: 'watch4' 
    },
    {
        filename: 'watch5',
        title: 'watch5' 
    },
    {
        filename: 'watch6',
        title: 'watch6' 
    }
]

export function Products() {
    return (
        <div>
            <Gallery imageList={imgArr} />
            <div>
            <Button type='danger' text='BUY A WATCH'/>
            <Button text='MORE INFO'/>
            </div>
        </div>
    )
}

