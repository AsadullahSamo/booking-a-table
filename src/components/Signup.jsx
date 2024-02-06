import React, { useState } from 'react';
import LittleLemon from '../assets/little-lemon.png';
import { Link, useNavigate } from 'react-router-dom';
import MetaTags from './MetaTags';
import ReactAlert from './ReactAlert';

const Signup = () => {
    const [alert, setAlert] = useState(false);
    const [severity, setSeverity] = useState('info');
    const [color, setColor] = useState('warning');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 1500);

        const { firstName, lastName, phone, password } = inputs;

        if (firstName !== '' || phone !== '' || password !== '') {
            if (localStorage.getItem('user')) {
                setColor('primary');
                setMsg('Account already exists, please login');
                setTimeout(() => {
                    navigate('/login');
                }, 1500)
                return
            }
        }

        if (firstName === '' || lastName === '' || phone === '' || password === '') {
            setMsg('Please fill in all fields');
            return;
        }


        setMsg('Thanks for creating an account! You can now proceed with table reservation.');
        setSeverity('success');
        setColor('success');
        localStorage.setItem('user', JSON.stringify(inputs));
        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };

    return (
        <section className="w-96 h-full bg-gray-100 m-auto">
            <MetaTags title="Little Lemon Signup" />
            <Link to="/" className="-mt-5 text-6xl">
                &larr;
            </Link>

            {alert &&
                <ReactAlert msg={msg} msgSeverity={severity} msgColor={color} />
            }

            <img src={LittleLemon} alt="Little Lemon Logo" className="-mt-14 m-auto w-48 h-48 object-contain" />
            <p className="text-[14px] m-auto text-center w-48 -mt-14 font-semibold text-[#495e57]">
                BEFORE TABLE RESERVATION CREATE AN ACCOUNT
            </p>
            <p className="text-center font-bold mt-5 text-2xl mb-10">Create New Account</p>

            <form>
                <label className="mt-10 ml-5 font-semibold" htmlFor="first-name">
                    FIRST NAME <span className='text-red-600'>*</span> <br />
                    <input
                        required={true}
                        onChange={handleChange}
                        value={inputs.firstName}
                        type="text"
                        name="firstName"
                        id="first-name"
                        className="mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2"
                    />
                </label>

                <label className="mt-10 ml-5 font-semibold" htmlFor="last-name">
                    LAST NAME <span className='text-red-600'>*</span> <br />
                    <input
                        required={true}
                        onChange={handleChange}
                        value={inputs.lastName}
                        type="text"
                        name="lastName"
                        id="last-name"
                        className="mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2"
                    />
                </label>

                <label className="mt-10 ml-5 font-semibold" htmlFor="phone">
                    PHONE <span className='text-red-600'>*</span> <br />
                    <input
                        required={true}
                        onChange={handleChange}
                        value={inputs.phone}
                        type="number"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9+]{3}"
                        placeholder="123-45-678"
                        name="phone"
                        id="phone"
                        className="mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2"
                    />
                </label>

                <label className="mt-10 ml-5 font-semibold" htmlFor="password">
                    PASSWORD <span className='text-red-600'>*</span> <br />
                    <input
                        required={true}
                        onChange={handleChange}
                        value={inputs.password}
                        type="password"
                        name="password"
                        id="password"
                        className="mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white focus:bg-white focus:text-black pl-2"
                    />
                </label>

                <label className="font-semibold" htmlFor="submit">
                    <input
                        onClick={handleSubmit}
                        type="submit"
                        name="submit"
                        id="submit"
                        className="mt-2 mb-5 border border-solid rounded-md ml-5 w-[21rem] bg-black text-white hover:bg-white hover:text-black pl-2 hover:cursor-pointer transition-all duration-500 hover:border-solid hover:border border-black"
                    />
                </label>

                <p className="text-center text-[13px] text-[#495e57]">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#f4ce14] hover:cursor-pointer">
                        Login
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default Signup;
