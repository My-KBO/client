import { ChangeEvent, FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import { loginAPI } from '../services/authAPI';
import { useUserStore } from '../stores/store';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const setUser = useUserStore((state) => state.setUser);
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  // const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const loginMutation = useMutation({
    mutationFn: () => 
    axios.post('http://3.107.172.216:3333/api/v1/auth/login', form, {
      withCredentials: true, 
    }),
    onSuccess: (res) => {
      console.log('로그인 응답:', res);          
      console.log('응답 데이터:', res.data);

      const { accessToken } = res.data;

      setAccessToken(accessToken);
      alert('로그인 성공!');
      navigate('/');
    },
    onError: () => {
      alert('로그인 실패. 이메일 또는 비밀번호를 확인하세요.');
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-[1200px] h-[1024px] flex justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-5 w-[360px] h-[280px]">
          <h2 className="text-2xl font-bold text-slate-800">로그인</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력하세요"
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-[#002561] text-white rounded-md mt-2"
            >
              로그인
            </button>

            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="px-4 py-2 border border-[#002561] text-slate-800 rounded-md"
            >
              회원가입으로 이동
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
