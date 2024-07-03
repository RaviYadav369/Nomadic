import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupSectionClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <section
      className={`ml-[-20px] w-[1540px] h-[879px] relative max-w-[107%] shrink-0 cursor-pointer text-center text-lg text-khaki-100 font-matter ${className}`}
      onClick={onGroupSectionClick}
    >
      <img
        className="absolute top-[486px] left-[0px] w-[100px] h-[100px] z-[2]"
        alt=""
        src="/group-11273.svg"
      />
      <img
        className="absolute top-[486px] left-[1440px] w-[100px] h-[100px] z-[2]"
        loading="lazy"
        alt=""
        src="/group-11274.svg"
      />
      <div className="absolute top-[0px] left-[50px] bg-gray-300 w-[1440px] flex flex-col items-start justify-start pt-[67px] px-3.5 pb-[37px] box-border gap-[46px] max-w-full">
        <div className="w-[1445px] h-[879px] relative bg-gray-300 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[18px] box-border max-w-full">
          <div className="w-[782px] flex flex-col items-start justify-start gap-[10px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left">
              <div className="w-[236px] flex flex-row items-end justify-start gap-[9px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
                  <div className="w-[42px] h-px relative box-border z-[1] border-t-[1px] border-solid border-khaki-100" />
                </div>
                <div className="flex-1 relative tracking-[0.17em] leading-[22px] z-[1]">
                  Read experience
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full text-21xl text-text-color-secondary font-inria-serif">
              <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                Crafting Trips for Every Travel Style
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[76px] box-border max-w-full text-gray-2000">
              <div className="flex-1 relative leading-[130%] font-light inline-block max-w-full z-[1]">
                Browse our trips based on your specific interests. Whether you
                are looking for hiking and trekking adventures, snorkeling
                excursions, in-depth cultural encounters, or more, we have the
                trip for you.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[32px] max-w-full grid-cols-[repeat(4,_minmax(247px,_1fr))] text-25xl text-text-color-secondary lg:justify-center lg:grid-cols-[repeat(2,_minmax(247px,_428px))] mq750:grid-cols-[minmax(247px,_1fr)]">
          <div className="flex flex-row items-start justify-start py-52 px-6 box-border relative max-w-full z-[1]">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-211@2x.png"
            />
            <h1 className="m-0 h-[65px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
              Cultural
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start py-52 px-6 box-border relative max-w-full z-[1]">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-215@2x.png"
            />
            <h1 className="m-0 h-[65px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
              Hiking
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start py-52 px-6 box-border relative max-w-full z-[1]">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-216@2x.png"
            />
            <h1 className="m-0 h-[65px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
              Walking
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start py-[181px] px-[45px] box-border relative max-w-full z-[1]">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-217@2x.png"
            />
            <h1 className="m-0 h-[119px] flex-1 relative text-inherit leading-[130%] font-semibold font-inherit flex items-center justify-center z-[1] mq450:text-7xl mq450:leading-[34px] mq1050:text-16xl mq1050:leading-[46px]">
              River Rafting
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <img
            className="h-5 w-[228px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-11282.svg"
          />
        </div>
      </div>
    </section>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
