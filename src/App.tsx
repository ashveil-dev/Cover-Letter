import ProfileImage from "./assets/images/profile.jpg"

function App() {
  return (
    <div className="w-full flex flex-col gap-4 min-h-dvh p-4 md:p-10 bg-FairyBlue overflow-hidden">
      <div className="flex flex-col md:flex-row bg-white p-4 gap-5 md:gap-10">
        <div className="">
          <img className="w-full md:w-60 md:h-80" src={ProfileImage} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-2 md:gap-0 mb-5">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:mb-2">
              <h2 className="text-4xl font-bold">장동건</h2>
              <h3 className="text-3xl text-FairyBlue/60 font-bold">Frontend Developer</h3>
            </div>
            <div className="flex justify-center md:justify-start gap-2">
              <span className="text-RoyalAmethyst font-bold text-sm">React</span>
              <span className="text-RoyalAmethyst font-bold text-sm">React-Query</span>
              <span className="text-RoyalAmethyst font-bold text-sm">Zustand</span>
              <span className="text-RoyalAmethyst font-bold text-sm">Tailwindcss</span>
            </div>
          </div>

          <div className="w-full md:max-h-37.5 flex flex-wrap md:gap-8">
            <div className="flex flex-col gap-2">
              <dl className="grid grid-cols-3 md:grid-cols-2 ">
                <dt className="font-bold">Birth</dt>
                <dd className="md:col-span-2">1999. 09. 28</dd>
              </dl>
              <dl className="grid md:grid-cols-2 grid-cols-3">
                <dt className="font-bold">Phone</dt>
                <dd className="col-span-2">010-8138-9280</dd>
              </dl>
              <dl className="grid md:grid-cols-2 grid-cols-3">
                <dt className="font-bold">Address</dt>
                <dd className="col-span-2">서울특별시 중랑구 동일로107길 29</dd>
              </dl>
            </div>
            <div className="flex flex-col gap-2">
              <dl className="grid md:grid-cols-2 grid-cols-3">
                <dt className="font-bold">Mail</dt>
                <dd className="col-span-2">ashveil.dev@gmail.com</dd>
              </dl>
              <dl className="grid md:grid-cols-2 grid-cols-3">
                <dt className="font-bold">Github</dt>
                <dd className="col-span-2">
                  <a href="https://github.com/ashveil-dev">
                    https://github.com/ashveil-dev
                  </a>
                </dd>
              </dl>
              <dl className="grid md:grid-cols-2 grid-cols-3">
                <dt className="font-bold">Tistory</dt>
                <dd className="col-span-2">
                  <a href="https://ashveil.tistory.com/">
                    https://ashveil.tistory.com/
                  </a>
                </dd>
              </dl>
            </div>

          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-white p-4">
        <h2 className="text-3xl font-semibold">경력</h2>
        <div>
          <div className="flex flex-col gap-2 flex-wrap border-b border-b-gray-200 pb-5">
            <div className="flex items-center gap-2 pl-2">
              <span className="text-sm text-gray-500">2021-07 ~ 2021-10</span>
              <span>티릴리 - <b className="font-bold">프론트엔드</b></span>
            </div>
            <p className="text-sm pl-2 leading-6">
              프론트엔드 개발자로, 자사의 웹 사이트 견적 프로그램을 개발하였습니다. <br />
              사용한 기술은 React, Fullscreen.js, Typescript, Next.js, Redux-toolkit을 사용하였습니다. <br />
              3개월간 진행한 프로젝트로 개발자 1, 디자이너 1, 기획자 1로 묶어서 팀 단위로 작업을 하였습니다. <br />
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-wrap border-b border-b-gray-200 pb-5">
            <div className="flex items-center gap-2 pl-2">
              <span className="text-sm text-gray-500">2023-11 ~ 2023-12</span>
              <span>스탠다드네트웍스 - <b className="font-bold">서버 운영</b></span>
            </div>
            <p className="text-sm pl-2 leading-6">
              자사의 프로그램의 관리 및 운영을 담당하였습니다. <br />
              대량의 SMS, MMS의 서버와 데이터베이스, 로그를 관리하고 고객의 불편사항을 로그를 보면서 해결하였습니다. <br />
              리눅스 서버 목록의 용량, 비밀번호, NTP, iptables를 관리하고, 데이터베이스를 마이그레이션하는 업무를 하였습니다. <br />
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-wrap border-b border-b-gray-200 pb-5">
            <div className="flex items-center gap-2 pl-2">
              <span className="text-sm text-gray-500">2024-12 ~ 2025-05</span>
              <span>엘비유세스주식회사 - <b className="font-bold">IT 헬프데스크 사원(계약직)</b></span>
            </div>
            <p className="text-sm pl-2 leading-6">
              입사자 분들을 위해 노트북을 포맷하고, 회사에서 정한 프로그램을 설치합니다. <br />
              발급된 입사자분의 계정을 AD에 등록하고, 도메인과 연결하여 회사의 정책이 적용될 수 있도록 합니다. <br />
              그 외에 자산관리 및 에러가 발생했을 때, 포맷 및 에러를 해결하는 업무를 하였습니다. <br />
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-wrap border-b border-b-gray-200 pb-5">
            <div className="flex items-center gap-2 pl-2">
              <span className="text-sm text-gray-500">2024-12 ~ 2025-05</span>
              <span>벨류에이치알 - <b className="font-bold">OA 소프트웨어테스트 사원(계약직)</b></span>
            </div>
            <p className="text-sm pl-2 leading-6">
              프린터 회사에서 펌웨어가 업데이트 될 때마다 해당되는 기계와 웹의 테스트 업무를 하였습니다. <br />
              확인해야할 사항을 먼저 확인한 다음, 다국어나 새로 발견된 문제를 정리하고 이를 보고하는 업무입니다. <br />
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-white p-4">
        <h2 className="text-3xl font-semibold">학력</h2>
        <div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">2021-07 ~ 2021-10</span>
            <span className="font-bold">선린인터넷고등학교 정보통신공학과 졸업</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
