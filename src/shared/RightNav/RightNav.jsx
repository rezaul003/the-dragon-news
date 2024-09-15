import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightNav = () => {
    return (
        <div>

            <div className='p-4 space-y-3 mb-3 '>
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>


            <div className='p-4  mb-3 '>
                <h2 className="text-3xl font-semibold mb-4">Find Us On</h2>

                <a className='p-4 flex text-md items-center font-light border rounded-t-md' href="">
                    <FaFacebook className='mr-2'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-md items-center font-light border' href="">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-md items-center font-light border rounded-b-md' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>


            <div className='p-4 space-y-3 mb-4 bg-base-200'>
                <h2 className="text-3xl font-semibold">Q-Zone</h2>
                
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>





        </div>
    );
};

export default RightNav;