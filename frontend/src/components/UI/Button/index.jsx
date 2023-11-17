import s from './Button.module.css'

function Button(props) {

    const {title, styles, ...otherProps} = props 



    return (
        <button 
            {...otherProps} 
            className={`${s[styles]}`}
        >   {title}
        </button>
    )
}

export default Button