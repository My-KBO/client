import React from 'react';

function Footer() {
  return (
    <footer className="bg-kbo-blue text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-medium text-left">MyKBO</p>
          <p className="font-medium text-sm text-right">
            프로그래머스 풀스택 데브코스 3차 스프린트 주작팀 사이드프로젝트
            <br />
            강예람, 김지우, 박수연, 이정찬
            <br />
            25.05.29 - 25.07.11
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
