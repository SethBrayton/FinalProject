import { useEffect } from 'react';
import s from './NotFoundPage.module.css'
import notFound from './notfound404.png'


function NotFoundPage() {

    useEffect(() => {
        document.title = "Oops! The page was not found"
    },[])

    return (
        <div className={s.container}>
            <img className={s.img} src={notFound} alt='notfound'/>
        
        </div>
    )
}

export default NotFoundPage