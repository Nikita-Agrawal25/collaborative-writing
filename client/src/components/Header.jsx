import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-black">
            <div className="mx-auto flex justify-between h-16 max-w-screen-xl items-center gap-28 px-4 ">
                <div className='flex'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEUAAAD///+FhYXLy8siIiKcnJz09PQrKytISEjw8PB2dnb8/PxbW1uOjo4UFBQ5OTkcHBysrKwwMDDk5OTU1NS3t7cMDAxSUlLFxcWWlpZNTU29vb1kZGRqamqkpKR8fHxAQEDpp83EAAADjElEQVR4nO3c63KiQBAF4AAKIveboBKT93/KVZgeZri4rKYyzdb5/oVKrJ6FPnOR2g/7P/IBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8RKXzkjIxXflU61ovKk2XPnHxXx2LZTWmix8rXh+LZWWmq9eV74zFCiLT9auat8ZiWe6n6REMsjfHcr83B9NjILu9rhIV+tV5v9Lty/QgyMnbqdKaOqj62K3lmR7Eok8xmOJoupIfkFMTNanpUn5AKKZQ92y6kh+QnsWtKdmk1BsuIgMCZpP736WJ18mVa8dRBsR57j2TsOmuwO34SockNNlc4/5CJn5pQWCm8hkRzZLKbNGOMqB9vnxjtDqj9b+ymE/34pojMuAWPBmLb6buWaGoyQ2Ha3IdcOt/TpwngwnnP9cMWjYXyrUvuiaWxPby/o3X9uxEt0Z59r+v4mIlLlyXxmKdjBS9aC4Djq4+wnZpO8qo+3viGQqUJyYeZ0ByOShOjogETt3fowzwlV4OKQP2s39BPcSq+3sUVurJkT3KAA2N1PmtCv9B/CwDsmmLR3TQFv9ikatRBhRK4ZQB/uR/uDpRGrDr/k5MGVAN19KbKPk6PoStqPtZ3pj7up8yoB2uLWUALd2sy+/WuFo6lwH08JWt9ruy+9ks/cfypxmgPk+y+/PJh3AhZ8lCKdym5lCOxmLq/j3TjnnwphmQyBWZkgGy+/kel921dGvkrE49o4ZwSDemnf8UJna0F6BpPVQ2mCWNkIKi2Zmqc50DPUD9bZDzTOfWd0hEDyP3cyi5Wy66djhqGzK/O6rxZPezjWWS0D/748RMntEI1SMDMrp5DL+ZHTnJE7NwiGVXTCuBrXT/kdn+ck5OGdAMZxp7evjKWh4XNHznS0VNHWJTLDuHAwVYJI81atN1ruJRgvnigXqsbmj9UtBYbqzny8H36OCiuqdWOoqC4tt0lSvFtl53F8hHfYQ240WZTju8pG81MvV41uEfy1Ko1F2KTq/Vk3OGBzKLvOHNgOGbwPPwqlC2ke7vXWSHXOVicic3AwXXvfI8mQHqt+cyA7bT/T0xS+rfaYoMcLivlif6E7NSm+f7DHC396pD92LD+D2ALgOyTSzKdI/VcTNKLa9Rd9QbEkcz787cMyDaWPf3Lk41vVg524plEtczD1RYb/LGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA1vwBCi0l5pNoRQsAAAAASUVORK5CYII=" alt="hii" className='rounded-full w-20 h-20' />
                    <div className='text-white font-bold py-7'> 
                        WriteTogether
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-white transition hover:text-gray-500/75" href="#"> Home </a>
                            </li>

                            <li>
                                <a className="text-white transition hover:text-gray-500/75" href="#"> Features </a>
                            </li>

                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="block rounded-md font-medium px-5 py-2.5 text-sm  text-white transition "
                                to="/login"
                            >
                                Login
                            </Link>

                            <Link
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm text-black font-medium transition  sm:block hover:bg-slate-200"
                                to="/signup"
                            >
                                Register
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header