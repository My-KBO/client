import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/axios';
import { useUserStore } from '../store/store';
import KboBanner from '../components/common/Board/KBOBanner';


const Posting = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async () => {
    const user = useUserStore.getState().user;
    
    if (!title || !content || !category) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    try {
      const token = useUserStore.getState().accessToken;

      await api.post(
        '/posts',
        { title, content, category, nickname: user?.nickname, },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('게시글이 등록되었습니다!');
      window.scrollTo(0, 0);
      navigate('/board'); 
    } catch (error:any) {
      console.error('게시글 등록 실패:', error);

      if (error.response?.status === 401) {   // 401에러 처리 
        alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
        useUserStore.getState().setAccessToken(null);
         
        navigate('/login', { state: { from: '/posting' } });
      } else {
        alert('게시글 등록에 실패했습니다.');
      }
    }
  };

  return (
    <div className="w-screen flex justify-center bg-white">
      <div className="flex flex-col items-center w-[1440px] h-[1562px] bg-white relative isolate pt-[80px]">
        <KboBanner />

        {/* 작성 폼 */}
        <div className="flex flex-col items-center w-full px-[170px] py-[60px] gap-[20px] z-10">
          {/* 카테고리 */}
          <div className="flex flex-col gap-[8px] w-[1100px] h-[80px]">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-[48px] px-[16px] py-[12px] border border-[#D9D9D9] rounded-[8px] text-[16px] text-[#1E1E1E] bg-white"
            >
              <option value="" disabled hidden>카테고리를 선택하세요</option>
              <option value="FREE">자유 게시판</option>
              <option value="LG">LG 트윈스</option>
              <option value="KIWOOM">키움 히어로즈</option>
              <option value="NC">NC 다이노스</option>
              <option value="KIA">KIA 타이거즈</option>
              <option value="SSG">SSG 랜더스</option>
              <option value="DOOSAN">두산 베어스</option>
              <option value="SAMSUNG">삼성 라이온즈</option>
              <option value="LOTTE">롯데 자이언츠</option>
              <option value="KT">KT wiz</option>
              <option value="HANHWA">한화 이글스</option>
            </select>
          </div>

          {/* 제목 & 내용 */}
          <div className="flex flex-col gap-[8px] w-[1100px] h-[80px]">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              className="w-full h-[80px] px-[16px] py-[12px] border border-[#D9D9D9] rounded-[8px] text-[16px] text-[#1E1E1E]"
            />
          </div>

          <div className="flex flex-col gap-[8px] w-[1100px] h-[714px]">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              className="w-full h-[714px] px-[16px] py-[12px] border border-[#D9D9D9] rounded-[8px] text-[16px] text-[#1E1E1E] resize-none"
            />
          </div>

          {/* 등록하기 */}
          <button
            onClick={handleSubmit}
            className="w-[135px] h-[48px] bg-[#002561] text-white text-[16px] rounded-[8px] flex items-center justify-center"
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posting;
