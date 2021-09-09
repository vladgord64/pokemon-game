import s from './style.module.css';

// import ReactLogo from '/home/vlad/my-app/src/assets/logo512.png';
// import { ReactComponent as ReactLogo } from '/home/vlad/ReactJS/pokemon-game/src/assets/logo.svg';

const Header = ({title, descr}) => {
    return (
        <div className={s.root}>
            <div className={s.forest} ></div>
            <div className={s.container} >
                <h1 className={s.title}>
                    {title}
                </h1>
                <p className={s.descr}>{descr}</p>
            </div>
        </div>
    )
}

export default Header;



