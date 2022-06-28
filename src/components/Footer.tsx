import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center font-display">
      <div className="flex w-full max-w-5xl flex-col items-center">
        <div className="flex w-full max-w-md justify-between p-8 font-display">
          <p className="text-blue-500">Home</p>
          <p className="text-gray-500">Tasks</p>
          <p className="text-gray-500">Learn</p>
          <p className="text-gray-500">About</p>
        </div>
        <div className="flex w-full justify-center border-y-[0.5px]">
          <div className="flex max-w-sm flex-col items-center py-12">
            <p className="my-2 font-bold text-gray-500">PROGRAMMING.IN.TH</p>
            <p className="text-center text-sm text-gray-500">
              โปรแกรมมิ่งอินทีเอช ศูนย์รวมของโจทย์และเนื้อหาสำหรับ
              การเขียนโปรแกรมเพื่อการแข่งขัน และวิทยาการคอมพิวเตอร์
            </p>
            <button className="mt-4 rounded-md bg-blue-500 py-2.5 px-9 text-white">
              เข้าร่วม
            </button>
          </div>
        </div>
        <div className="flex justify-between p-12 font-display">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.9558 13.4779C26.9558 6.03407 20.9218 0 13.4779 0C6.03407 0 0 6.03407 0 13.4779C0 20.2048 4.92888 25.7806 11.3727 26.7914V17.3744H7.94928V13.4779H11.3727V10.5087C11.3727 7.13117 13.3836 5.26582 16.4633 5.26582C17.9378 5.26582 19.4796 5.52864 19.4796 5.52864V8.84421H17.7814C16.1061 8.84421 15.5845 9.88336 15.5845 10.9495V13.4779H19.3219L18.7249 17.373H15.5845V26.7914C22.027 25.7806 26.9558 20.2048 26.9558 13.4779Z"
              fill="#64748B"
            />
          </svg>
          <svg
            className="mx-4"
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2592 0C6.81532 0 0.78125 6.0435 0.78125 13.5008C0.78125 19.4648 4.64267 24.5258 9.9988 26.3103C10.6727 26.4342 10.918 26.0178 10.918 25.6593C10.918 25.3398 10.9072 24.4894 10.9005 23.364C7.15092 24.1794 6.35976 21.5539 6.35976 21.5539C5.74786 19.9931 4.86371 19.578 4.86371 19.578C3.63992 18.7424 4.95671 18.7586 4.95671 18.7586C6.30855 18.8529 7.02018 20.1495 7.02018 20.1495C8.22241 22.2116 10.1754 21.6159 10.9423 21.2709C11.0663 20.3988 11.414 19.8045 11.7995 19.4675C8.80735 19.1265 5.66026 17.9674 5.66026 12.7946C5.66026 11.3215 6.1859 10.1152 7.04714 9.17173C6.90831 8.83073 6.44602 7.45733 7.17922 5.60008C7.17922 5.60008 8.31136 5.23617 10.8856 6.98291C11.9851 6.68305 13.1195 6.53031 14.2592 6.52871C15.4048 6.5341 16.5572 6.6837 17.634 6.98291C20.207 5.23617 21.3364 5.59873 21.3364 5.59873C22.0723 7.45733 21.6087 8.83073 21.4712 9.17173C22.3338 10.1152 22.8567 11.3215 22.8567 12.7946C22.8567 17.9809 19.7043 19.1225 16.7027 19.4567C17.1866 19.8732 17.6165 20.6967 17.6165 21.9569C17.6165 23.7602 17.6003 25.2172 17.6003 25.6593C17.6003 26.0205 17.843 26.441 18.5276 26.3089C21.2115 25.4087 23.5446 23.6879 25.1972 21.3895C26.8497 19.0912 27.7382 16.3316 27.7371 13.5008C27.7371 6.0435 21.7017 0 14.2592 0Z"
              fill="#64748B"
            />
          </svg>
          <p className="w-80 text-sm leading-4 text-gray-500">
            © 2019-2021 the PROGRAMMING.IN.TH team{'\n'} The source code for
            this website is available on GitHub
          </p>
        </div>
      </div>
    </footer>
  )
}
