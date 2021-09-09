import s from './style.module.css';
// import bg1 from '../../assets/bg1.jpg';
// import bg2 from '../../assets/bg2.jpg';

// import ReactLogo from '/home/vlad/my-app/src/assets/logo512.png';
// import { ReactComponent as ReactLogo } from '/home/vlad/my-app/src/assets/logo.svg';

// console.log(ReactLogo);

const Layout = ({title, descr, urlBg, colorBg=false}) => {
    const styleRoot = colorBg ? { background: 'red' } : { background: 'none' };
    // const styleImg = {backgroundImage: {urlB}}
    return (
        <div className={s.root} >
            <div className={s.wrapper} style={styleRoot}>
                <img src={urlBg} />
                <div className={s.title} >
                    <h3>{title}</h3>
                    <span className={s.separator}></span>
                </div>
                
                <div className={`{${s.desc}, ${s.full}}`}>
                    <p>{descr}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Layout;




