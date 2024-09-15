import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mb-2' src={logo} alt="" />
            <p className='text-lg font-extralight'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;