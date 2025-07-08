import React from 'react';

const PasswordChange = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col gap-12">
      <h2 className="text-[40px] font-bold text-center">비밀번호 수정</h2>

      <div className="flex flex-col gap-6">
        {['현재 비밀번호', '새 비밀번호', '비밀번호 확인'].map((label, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <label className="text-sm font-medium">{label}</label>
            <input
              type="password"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder={`${label} 입력`}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center mt-6 mb-24">
        <button className="w-[240px] h-12 border border-[#002561] rounded text-black">
          취소
        </button>
        <button className="w-[240px] h-12 bg-[#002561] text-white rounded">
          저장하기
        </button>
      </div>
    </div>
  );
};

export default PasswordChange;
