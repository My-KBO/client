
import axios from 'axios';
import{ ChangeEvent, FormEvent } from 'react';
import{ useFormStore } from '../store/store';
import { useNavigate } from 'react-router-dom';



const signUp = () => {
    const navigate = useNavigate();
    const { email, password, confirmPassword, username, team, setForm } = useFormStore();

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(name, value);
    };

    const validateForm = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    
      if (!email || !emailRegex.test(email)) {
        alert('유효한 이메일을 입력해주세요.');
        return false;
      }
    
      if (!password || !passwordRegex.test(password)) {
        alert('비밀번호는 6자 이상이며, 영문, 숫자, 특수문자를 포함해야 합니다.');
        return false;
      }
    
      if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return false;
      }
    
      if (!username || username.length < 2) {
        alert('닉네임은 2자 이상이어야 합니다.');
        return false;
      }
    
      if (!team) {
        alert('선호 팀을 선택해주세요.');
        return false;
      }
    
      return true;
    };    

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        if(!validateForm()) return;

        const requestData = {
          email,
          password,
          nickname: username,
          favoriteTeam: team,
        };
    
        try {
          const response = await axios.post(
            'http://3.107.172.216:3333/api/v1/auth/signup',
            requestData,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          console.log('회원가입 성공:', response.data);
          alert('회원가입이 완료되었습니다!');
          navigate('/login');
        } catch (error: any) {
          console.error('회원가입 실패:', error.response?.data || error.message);
          alert(`회원가입 실패: ${error.response?.data?.message || '서버 오류'}`);
        }
      };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 flex flex-col gap-4"
      >
        <h2 className="text-center text-xl font-semibold text-gray-800">회원가입</h2>

        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요."
          className="border border-gray-300 rounded-md px-4 py-2 text-sm"
          required
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요."
          className="border border-gray-300 rounded-md px-4 py-2 text-sm"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="비밀번호를 다시 입력해주세요."
          className="border border-gray-300 rounded-md px-4 py-2 text-sm"
          required
        />

        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="닉네임을 입력해주세요."
          className="border border-gray-300 rounded-md px-4 py-2 text-sm"
          required
        />

        <select
          name="team"
          value={team}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 text-sm"
          required
        >
          <option value="">선호 팀을 선택해주세요</option>
          <option value="두산">두산 베어스</option>
          <option value="LG">LG 트윈스</option>
          <option value="삼성">삼성 라이온즈</option>
          <option value="기아">KIA 타이거즈</option>
          <option value="키움">키움 히어로즈</option>
          <option value="SSG">SSG 랜더스</option>
          <option value="한화">한화 이글스</option>
          <option value="KT">KT wiz</option>
          <option value="NC">NC 다이노스</option>
          <option value="롯데">롯데 자이언츠</option>
        </select>

        <button
          type="submit"
          className="w-full bg-[#002561] text-white py-2 rounded-md font-medium text-sm hover:bg-[#001f4d] transition"
        >
          회원가입
        </button>
      </form>
    </div>
  );
    
}

export default signUp;
