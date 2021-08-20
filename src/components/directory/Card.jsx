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
            <img src={imgPath1} alt="" srcSet="" />
          </div>

          <div className=" flex flex-col">
            <div className="text-white">{subtitle}</div>
            <div className="text-white">{title}</div>
          </div>
          <img
            className="absolute -bottom-10 justify-self-end"
            src={imgPath2}
            alt=""
            srcSet=""
          />
        </div>
        <div className="p-4 flex flex-col">
          <div className="w-full">
            <p className={`text-${color}`}>{place}</p>
          </div>
          <div className="w-full">
            <p>Gudalajara</p>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <img src={incDirection} alt="" srcSet="" />
                <p className="ml-4">Miguel Gordoa #1782 Int 2 Col. Guadalupana Sur</p>
              </div>
              <div className="flex flex-row">
                <img src={incDirection} alt="" srcSet="" />
                <p className="ml-4">(333) 31 27 16 54 / (333) 35 43 52 72</p>
              </div>
              <div className="flex flex-row">
                <img src={incDirection} alt="" srcSet="" />
                <p className="ml-4">nutrikarinagut@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-full flex fle-row justify-between">
            <div className="flex flex-row">
              <img src={incFb} alt="" srcset="" />
              <div className="flex flex-col ml-4">
                <div>Facebook</div>
                <div>Nutrikarinagut</div>
              </div>
            </div>
            <div className="flex flex-row">
              <img src={incInsta} alt="" srcset="" />
              <div className="flex flex-col ml-4">
                <div>Instagram</div>
                <div>Nutrikarinagut</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
