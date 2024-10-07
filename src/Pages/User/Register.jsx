import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(Error => {
                console.log(Error)
            });
    }



    return (
        <div>
            <Navbar></Navbar>


            <div className=" bg-slate-50 lg:w-1/2 md:w-3/4 mx-auto p-8 rounded-lg my-20" >
                <h2 className="text-3xl pt-10 text-center font-bold"> Register Your Account</h2>
                <hr className="mt-6"></hr>
                <form onSubmit={handleRegister} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="name" placeholder="Name" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name="photo" type="photo" placeholder="Photo" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gray-700 text-white">Register</button>
                    </div>
                </form>
                <h3 className="text-center">Already Have Account? <Link to='/login' className="text-red-500 pl-2">Login</Link> </h3>
            </div>


        </div>
    );
};

export default Register;