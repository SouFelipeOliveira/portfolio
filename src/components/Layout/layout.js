import './index.scss';
import Sidebar from '../Sidebar/index';
import SpaceShip from '../../assets/images/spaceship.gif';
import SpaceShip2 from '../../assets/images/spaceship2.gif';
const Layout = () => {
    return (
        <div>
            <Sidebar />
            <img className='spaceShip' src={SpaceShip} alt='SpaceShip'/>
            <img className='spaceShip2' src={SpaceShip2} alt='SpaceShip'/>
        </div>
    )
};

export default Layout;