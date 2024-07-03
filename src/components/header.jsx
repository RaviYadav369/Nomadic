import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDescriptionTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-base text-text-color-secondary font-gilroy-medium ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-9xl font-gilroy-bold">
        <div className="self-stretch relative leading-[32px] mq450:text-3xl mq450:leading-[26px]">
          Create an Account
        </div>
        <div className="w-[272px] relative text-sm leading-[24px] font-gilroy-medium inline-block">
          Hello there, Let’s start your journey with us.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-gray-1100">
        <div className="self-stretch flex flex-row items-start justify-start pt-[3px] px-0 pb-[9px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full z-[1]">
            <div className="flex-1 rounded-lg bg-whitesmoke box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 whitespace-nowrap max-w-full border-[1px] border-solid border-lightgray-100">
              <div className="relative leading-[24px] inline-block min-w-[73px] z-[1]">
                Full Name
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-whitesmoke overflow-x-auto flex flex-row items-start justify-start pt-[5px] px-[13px] pb-[3px] gap-[3.8px] text-sm text-gray-900 border-[1px] border-solid border-lightgray-100">
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-[26px] h-[19px] relative rounded object-cover"
              alt=""
              src="/image-980@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="h-3 relative leading-[24px] flex items-center shrink-0 min-w-[22px] whitespace-nowrap z-[1]">
              +91
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
            <img
              className="w-1.5 h-1 relative z-[1]"
              alt=""
              src="/strength-level.svg"
            />
          </div>
          <div className="h-9 flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
            <div className="w-px h-[37px] relative box-border border-r-[1px] border-solid border-gray-1000" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base text-gray-1100">
            <div className="relative leading-[24px] inline-block min-w-[95px] z-[1]">
              8923-612-313
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-gray-1100">
        <div className="self-stretch h-12 flex flex-row items-end justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
          <div className="flex-1 rounded-lg bg-whitesmoke box-border overflow-hidden flex flex-row items-start justify-start pt-[13px] px-4 pb-[7px] max-w-full border-[1px] border-solid border-lightgray-100">
            <div className="relative leading-[24px] inline-block min-w-[70px] z-[1]">
              Password
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 rounded-lg bg-whitesmoke box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 whitespace-nowrap max-w-full border-[1px] border-solid border-lightgray-100">
            <div className="w-[139px] relative leading-[24px] flex items-end shrink-0 z-[1]">
              Confirm Password
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[24px] text-xs text-dimgray-200 font-caption-semibold-12">
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <div className="h-5 w-10 relative rounded-17xl-5 bg-gold-100 box-border border-[0.5px] border-solid border-whitesmoke">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl-5 bg-gold-100 box-border hidden border-[0.5px] border-solid border-whitesmoke" />
              <div className="absolute top-[0px] left-[20px] shadow-[1px_1px_2px_-1px_rgba(51,_51,_51,_0.3)] rounded-xs bg-whitesmoke w-5 h-5 z-[1]">
                <div className="absolute h-4/5 w-4/5 top-[10%] right-[10%] bottom-[10%] left-[10%] shadow-[1px_1px_2px_-1px_rgba(51,_51,_51,_0.3)] rounded-xs bg-whitesmoke hidden" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="self-stretch relative leading-[16px]">
              I accept the Terms of Service and Privacy Policy.
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-gold-100 flex flex-row items-start justify-center py-[9.6px] px-5 whitespace-nowrap text-center text-base text-text-color-secondary font-gilroy-bold">
          <div className="h-[28.8px] w-[61px] relative leading-[24px] flex items-center justify-center shrink-0 min-w-[61px]">
            Sign up
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-xs mq450:gap-[16px]">
        <div className="self-stretch h-px relative bg-lightgray-100" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
            <div className="flex-1 relative leading-[16px]">
              Already have an account?
            </div>
            <div
              className="w-[57px] relative leading-[16px] font-gilroy-bold text-gold-100 text-right inline-block min-w-[57px] cursor-pointer"
              onClick={onDescriptionTextClick}
            >
              Login now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
