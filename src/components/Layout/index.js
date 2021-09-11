import s from './style.module.css';


const Layout = ({title, urlBg, colorBg=false, children}) => {
    const styleRoot = colorBg ? { background: '#000' } : {backgroundImage: `url(${urlBg})`};
    return (
        <div className={s.root} >
            <div className={s.wrapper} style={styleRoot}>
                    <div className={s.title} >
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;




