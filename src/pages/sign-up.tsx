import{ ChangeEvent, FormEvent } from 'react';
import{ useFormStore } from './store';


const signUp = () => {
    const { email, password, confirmPassword, username, team, setForm } = useFormStore();

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(name, value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다 -!');
            return;
        }
        console.log('회원가입 정보: ', { email, password, username, team });
    }

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
