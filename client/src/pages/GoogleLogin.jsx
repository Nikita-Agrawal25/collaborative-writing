import {useState} from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api/userAuth";
import {Link, useNavigate} from 'react-router-dom';

const GoogleLogin = (props) => {
    const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				const result = await googleAuth(authResult.code);
				// console.log(result.data.user)
				const {email, name, image} = result.data.user;
				const token = result.data.token;
				const obj = {email,name, token, image};
				localStorage.setItem('user-info',JSON.stringify(obj));
				navigate('/dashboard');

			} else {
				// console.log('hii');
				throw new Error(authResult);
			}
		} catch (e) {
			console.log('Error while Google Login...', e);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

  return (
    
	<section className="bg-black lg:h-screen max-w-screen-2xl">
      <div className='flex py-7 px-12'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEUAAAD///+FhYXLy8siIiKcnJz09PQrKytISEjw8PB2dnb8/PxbW1uOjo4UFBQ5OTkcHBysrKwwMDDk5OTU1NS3t7cMDAxSUlLFxcWWlpZNTU29vb1kZGRqamqkpKR8fHxAQEDpp83EAAADjElEQVR4nO3c63KiQBAF4AAKIveboBKT93/KVZgeZri4rKYyzdb5/oVKrJ6FPnOR2g/7P/IBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8RKXzkjIxXflU61ovKk2XPnHxXx2LZTWmix8rXh+LZWWmq9eV74zFCiLT9auat8ZiWe6n6REMsjfHcr83B9NjILu9rhIV+tV5v9Lty/QgyMnbqdKaOqj62K3lmR7Eok8xmOJoupIfkFMTNanpUn5AKKZQ92y6kh+QnsWtKdmk1BsuIgMCZpP736WJ18mVa8dRBsR57j2TsOmuwO34SockNNlc4/5CJn5pQWCm8hkRzZLKbNGOMqB9vnxjtDqj9b+ymE/34pojMuAWPBmLb6buWaGoyQ2Ha3IdcOt/TpwngwnnP9cMWjYXyrUvuiaWxPby/o3X9uxEt0Z59r+v4mIlLlyXxmKdjBS9aC4Djq4+wnZpO8qo+3viGQqUJyYeZ0ByOShOjogETt3fowzwlV4OKQP2s39BPcSq+3sUVurJkT3KAA2N1PmtCv9B/CwDsmmLR3TQFv9ikatRBhRK4ZQB/uR/uDpRGrDr/k5MGVAN19KbKPk6PoStqPtZ3pj7up8yoB2uLWUALd2sy+/WuFo6lwH08JWt9ruy+9ks/cfypxmgPk+y+/PJh3AhZ8lCKdym5lCOxmLq/j3TjnnwphmQyBWZkgGy+/kel921dGvkrE49o4ZwSDemnf8UJna0F6BpPVQ2mCWNkIKi2Zmqc50DPUD9bZDzTOfWd0hEDyP3cyi5Wy66djhqGzK/O6rxZPezjWWS0D/748RMntEI1SMDMrp5DL+ZHTnJE7NwiGVXTCuBrXT/kdn+ck5OGdAMZxp7evjKWh4XNHznS0VNHWJTLDuHAwVYJI81atN1ruJRgvnigXqsbmj9UtBYbqzny8H36OCiuqdWOoqC4tt0lSvFtl53F8hHfYQ240WZTju8pG81MvV41uEfy1Ko1F2KTq/Vk3OGBzKLvOHNgOGbwPPwqlC2ke7vXWSHXOVicic3AwXXvfI8mQHqt+cyA7bT/T0xS+rfaYoMcLivlif6E7NSm+f7DHC396pD92LD+D2ALgOyTSzKdI/VcTNKLa9Rd9QbEkcz787cMyDaWPf3Lk41vVg524plEtczD1RYb/LGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA1vwBCi0l5pNoRQsAAAAASUVORK5CYII=" alt="hii"
         className='rounded-full w-20 h-20' />
        <div className='text-white font-bold py-6 text-2xl'>
          WriteTogether
        </div>
      </div>
      <div className="py-40 text-center">
        <div className="text-white">
          <div className="font-bold text-4xl">
		  	Log into WriteTogether
          </div>
          <div className='text-center py-4 text-md'>
		  New to WriteTogether?
            <Link className='text-sky-300' to='/signup'> Sign up for free</Link>
          </div>
        </div>
        <button className="bg-slate-400 px-10 py-3 my-12 text-slate-900 hover:bg-slate-500" onClick={googleLogin}>
          Login with google
        </button>
      </div>
    </section>

  )
}

export default GoogleLogin;