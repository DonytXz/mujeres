import React from "react";
import incDirection from "../../assets/icons/ico_dirección.svg";
import incInsta from "../../assets/icons/ico_insta.svg";
import incFb from "../../assets/icons/ico_fb.svg";

const Card = (props) => {
  const { title, subtitle, color, imgPath1, imgPath2, place } = props;
  return (
    <>
      <div className="w-full h-full border-2 border-transparent rounded-2xl shadow-lg">
        <div
          className={`bg-${color} grid grid-fol-col grid-cols-3 border-t-2 border-transparent rounded-t-2xl p-2 relative`}
        >
          <div className="">
            <img height="58" width="58" src={imgPath1} alt="" srcSet="" />
          </div>

          <div className=" flex flex-col">
            <div className="text-white text-base font-bold">{subtitle}</div>
            <div className="text-white text-xl font-bold">{title}</div>
          </div>
          <img
            height="110"
            width="110"
            className="absolute -bottom-9 justify-self-end"
            src={imgPath2}
            alt=""
            srcSet=""
          />
        </div>
        <div className="p-4 flex flex-col">
          <div className="w-full">
            <p className={`text-xl font-bold text-${color}`}>{place}</p>
          </div>
          <div className="w-full">
            <p className="text-xs font-semibold my-2 text-gray-700">
              Gudalajara
            </p>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <img src={incDirection} alt="" srcSet="" />
                <p className="ml-4 text-xs font-medium text-gray-500">
                  Miguel Gordoa #1782 Int 2 Col. Guadalupana Sur
                </p>
              </div>
              <div className="flex flex-row">
                <img src={incDirection} alt="" srcSet="" />
                <p className="ml-4 text-xs font-bold text-gray-500">
                  (333) 31 27 16 54 / (333) 35 43 52 72
                </p>
              </div>
              <div className="flex flex-row">
                <img src={incDirection} alt="" srcSet="" />
                <p className="ml-4 text-xs font-medium text-gray-500">
                  nutrikarinagut@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex fle-row justify-between border-t-2 mt-4 border-gray-150">
            <div className="flex flex-row">
              <img src={incFb} alt="" srcset="" />
              <div className="flex flex-col ml-4">
                <div className="text-xs text-gray-400 font-bold">Facebook</div>
                <div className="text-xs text-gray-400 font-bold">
                  Nutrikarinagut
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <img src={incInsta} alt="" srcset="" />
              <div className="flex flex-col ml-4">
                <div className="text-xs text-gray-400 font-bold">Instagram</div>
                <div className="text-xs text-gray-400 font-bold">
                  Nutrikarinagut
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
