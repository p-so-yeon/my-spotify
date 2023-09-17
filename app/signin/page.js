"use client";
import React, { useState, useEffect } from "react";
import "@/app/sign.css";
import { db } from "@/app/firebase";

import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  onSnapshot,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
const Signin = () => {
  const [inform, setinform] = useState([
    {
      email: "",
      pw: "",
      name: "",
      birth: " ",
    },
  ]);
  const addinfo = async (e) => {
    e.preventDefault();
    if (
      inform.email !== "" &&
      inform.pw !== "" &&
      inform.name !== "" &&
      inform.birth !== "" &&
      inform.gender !== ""
    ) {
      await addDoc(collection(db, "userinform"), {
        email: inform.email,
        pw: inform.pw,
        name: inform.name,
        birth: inform.birth,
        gender: inform.gender,
      });
      setinform({
        name: "",
        price: "",
        pw: "",
        name: "",
        birth: "",
        gender: "",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="w-1/3 flex-col items-center text-center">
        <div className="justify-center flex-col">
          <span> Spotify</span>
          <h2>무료로 가입하고 들어보세요</h2>
          <button className="fcbtn">Facebook 으로 가입하기 </button>
          <br></br>
          <button className="gbtn">Google로 가입하기 </button>
        </div>{" "}
        <br></br>
        <br></br>
        <div className="flex">
          <div className="bg-[#7f7f7f] h-0.5 w-[24rem]"></div>{" "}
          <span className="text-[#7f7f7f]"> 또는 </span>{" "}
          <div className="bg-[#7f7f7f] h-0.5 w-[24rem]"></div>
        </div>
        <form>
          <h2 className="email"> 이메일 주소로 가입하기 </h2>
          <div>
            <div> 이메일이 어떻게 되시나요?</div>
            <input
              value={inform.email}
              onChange={(e) => setinform({ ...inform, email: e.target.value })}
              type="email"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div>
            <div> 비밀번호를 만드세요</div>
            <input
              value={inform.pw}
              onChange={(e) => setinform({ ...inform, pw: e.target.value })}
              type="password"
              placeholder="비밀번호를 만드세요"
            />
          </div>
          <div>
            <div>어떤 사용자 이름을 사용하시겠어요?</div>
            <input
              value={inform.name}
              onChange={(e) => setinform({ ...inform, name: e.target.value })}
              type="text"
              placeholder="프로필 이름을 입력하세요"
            />
            <div>프로필에 표시되는 이름입니다. </div>
          </div>
          <div>
            <div> 생년월일이 어떻게 되시나요?</div>
            <input
              value={inform.birth}
              onChange={(e) => setinform({ ...inform, birth: e.target.value })}
              type="birth"
              placeholder="yyyy-mm-nn "
            ></input>
          </div>
          <div>
            <div>성별이 무엇인가요?</div>
            <label>
              <input
                onClick={(e) =>
                  setinform({ ...inform, gender: e.target.value })
                }
                type="radio"
                name="gender"
                value="male"
              ></input>
              남성{" "}
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onClick={(e) =>
                  setinform({ ...inform, gender: e.target.value })
                }
              ></input>
              여성{" "}
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="nonbinary"
                onClick={(e) =>
                  setinform({ ...inform, gender: e.target.value })
                }
              ></input>
              논바이너리{" "}
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="etc "
                onClick={(e) =>
                  setinform({ ...inform, gender: e.target.value })
                }
              ></input>
              기타{" "}
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="refuse"
                onClick={(e) =>
                  setinform({ ...inform, gender: e.target.value })
                }
              ></input>
              답변거부{" "}
            </label>
          </div>{" "}
          <div className="agree">
            <label>
              {" "}
              <input type="checkbox"></input>
              Spotify 마케티 메시지 수신동의(선택사항)
            </label>
            <label>
              {" "}
              <input type="checkbox"></input>
              써드 파티 데이터 제공(선택 사항)
            </label>
            <label>
              {" "}
              <input type="checkbox"></input>
              필수 개인정보 수집 및 이용
            </label>
            <label>
              {" "}
              <input type="checkbox"></input>
              Spotify 사용 약관
            </label>
          </div>
          <div>
            {" "}
            당사가 귀하에 대해 처리 할 데이터에 대한 자세한 정보는 당사
            개인정보처리방침을 참조하십시오.{" "}
          </div>
          <button onClick={addinfo} type="submit" className="register">
            {" "}
            가입하기{" "}
          </button>
        </form>
      </div>
    </main>
  );
};
export default Signin;
