import React from "react";
import Draggable from "react-draggable";
import { Tooltip, Typography } from "@material-tailwind/react";
import ChangeMode from "../ChangeMode";
import MobileNavigation from "./MobileNavigation";
import { Link } from "react-router-dom";

export default function OnScreenNav() {
  const [Ham, setHam] = React.useState("flex");
  const [HamClose, setHamClose] = React.useState("hidden");
  const [MobileNav, setMobileNav] = React.useState(false);
  const [firstHover, setFirstHover] = React.useState("flex");
  const [QuickPane, setQuickPane] = React.useState();

  function handleClick() {
    Ham === "flex" ? setHam("hidden") : setHam("flex");
    Ham === "hidden" ? setQuickPane(false) : setQuickPane(true);
    HamClose === "hidden" ? setHamClose("flex") : setHamClose("hidden");
  }

  function handleHover() {
    setFirstHover("hidden");
  }

  function OpenNavigationPane() {
    setMobileNav(true);
    setQuickPane(false) 
  }
  return (
    <>
      <Draggable>
        {firstHover == "flex" ? (
          <Tooltip
            placement="top-start"
            onMouseEnter={handleHover}
            className={`border ${firstHover} border-blue-gray-50 text-[black] bg-white px-4 py-3 shadow-xl shadow-black/10`}
            content={
              <div className="w-80">
                <Typography
                  color="blue-gray"
                  className="font-medium font-[Satoshi-Bold] text-[1.2rem]"
                >
                  Quick Navigation
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-80 my-3"
                >
                  Click on the icon to open the navigation menu and drag it to
                  any corner of the screen.
                </Typography>
                <Typography className="mb-3">
                  If you want to see this again, Just refresh the page.
                </Typography>
                <img
                  className="w-[100%] rounded-md"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
            }
          >
            <div
              className={`z-50 fixed bottom-8 right-8 drop-shadow-xl select-none`}
            >
              <div className="rounded-full bg-[#610ee4] h-[50px] w-[50px] flex justify-center items-center">
                <img
                  className={`cursor-pointer p-2 hover:bg-pink-400 rounded-full ${Ham}`}
                  onTouchStart={handleClick}
                  onClick={handleClick}
                  draggable={false}
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTUsOGMtMC43MjEyNywtMC4wMTAyIC0xLjM5MjE2LDAuMzY4NzUgLTEuNzU1NzgsMC45OTE3NWMtMC4zNjM2MSwwLjYyMyAtMC4zNjM2MSwxLjM5MzUxIDAsMi4wMTY1MWMwLjM2MzYxLDAuNjIzIDEuMDM0NSwxLjAwMTk1IDEuNzU1NzgsMC45OTE3NWg0MGMwLjcyMTI3LDAuMDEwMiAxLjM5MjE2LC0wLjM2ODc1IDEuNzU1NzgsLTAuOTkxNzVjMC4zNjM2MSwtMC42MjMgMC4zNjM2MSwtMS4zOTM1MSAwLC0yLjAxNjUxYy0wLjM2MzYxLC0wLjYyMyAtMS4wMzQ1LC0xLjAwMTk1IC0xLjc1NTc4LC0wLjk5MTc1ek01LDIzYy0wLjcyMTI3LC0wLjAxMDIgLTEuMzkyMTYsMC4zNjg3NSAtMS43NTU3OCwwLjk5MTc1Yy0wLjM2MzYxLDAuNjIzIC0wLjM2MzYxLDEuMzkzNTEgMCwyLjAxNjUxYzAuMzYzNjEsMC42MjMgMS4wMzQ1LDEuMDAxOTUgMS43NTU3OCwwLjk5MTc1aDQwYzAuNzIxMjcsMC4wMTAyIDEuMzkyMTYsLTAuMzY4NzUgMS43NTU3OCwtMC45OTE3NWMwLjM2MzYxLC0wLjYyMyAwLjM2MzYxLC0xLjM5MzUxIDAsLTIuMDE2NTFjLTAuMzYzNjEsLTAuNjIzIC0xLjAzNDUsLTEuMDAxOTUgLTEuNzU1NzgsLTAuOTkxNzV6TTUsMzhjLTAuNzIxMjcsLTAuMDEwMiAtMS4zOTIxNiwwLjM2ODc1IC0xLjc1NTc4LDAuOTkxNzVjLTAuMzYzNjEsMC42MjMgLTAuMzYzNjEsMS4zOTM1MSAwLDIuMDE2NTFjMC4zNjM2MSwwLjYyMyAxLjAzNDUsMS4wMDE5NSAxLjc1NTc4LDAuOTkxNzVoNDBjMC43MjEyNywwLjAxMDIgMS4zOTIxNiwtMC4zNjg3NSAxLjc1NTc4LC0wLjk5MTc1YzAuMzYzNjEsLTAuNjIzIDAuMzYzNjEsLTEuMzkzNTEgMCwtMi4wMTY1MWMtMC4zNjM2MSwtMC42MjMgLTEuMDM0NSwtMS4wMDE5NSAtMS43NTU3OCwtMC45OTE3NXoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
                  width={35}
                />
                <img
                  onTouchStart={handleClick}
                  onClick={handleClick}
                  className={`cursor-pointer p-2 hover:bg-pink-400 rounded-full ${HamClose}`}
                  draggable={false}
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQwLjc4MzIsNy4yNzE0OGMtMC41Mjg1MSwwLjAxMjQ3IC0xLjAzMDU4LDAuMjMzNjcgLTEuMzk2NDgsMC42MTUyM2wtMTQuMzM1OTQsMTQuMzM1OTRsLTE0LjMzNTk0LC0xNC4zMzU5NGMtMC4zNzY2OSwtMC4zODgyNyAtMC44OTQ1OCwtMC42MDc0MSAtMS40MzU1NSwtMC42MDc0MmMtMC44MTQzNywwLjAwMDE5IC0xLjU0NzMxLDAuNDk0MDkgLTEuODUzMjQsMS4yNDg4MWMtMC4zMDU5MiwwLjc1NDcyIC0wLjEyMzczLDEuNjE5NTcgMC40NjA2NiwyLjE4NjczbDE0LjMzNTk0LDE0LjMzNTk0bC0xNC4zMzU5NCwxNC4zMzU5NGMtMC41MjI0NywwLjUwMTY0IC0wLjczMjkyLDEuMjQ2NTMgLTAuNTUwMjEsMS45NDc0YzAuMTgyNzIsMC43MDA4NyAwLjczMDA1LDEuMjQ4MjEgMS40MzA5MywxLjQzMDkzYzAuNzAwODcsMC4xODI3MiAxLjQ0NTc3LC0wLjAyNzc0IDEuOTQ3NCwtMC41NTAyMWwxNC4zMzU5NCwtMTQuMzM1OTRsMTQuMzM1OTQsMTQuMzM1OTRjMC41MDE2NCwwLjUyMjQ3IDEuMjQ2NTMsMC43MzI5MyAxLjk0NzQxLDAuNTUwMjFjMC43MDA4OCwtMC4xODI3MiAxLjI0ODIxLC0wLjczMDA1IDEuNDMwOTMsLTEuNDMwOTNjMC4xODI3MiwtMC43MDA4OCAtMC4wMjc3NCwtMS40NDU3NyAtMC41NTAyMSwtMS45NDc0MWwtMTQuMzM1OTQsLTE0LjMzNTk0bDE0LjMzNTk0LC0xNC4zMzU5NGMwLjU5NTY3LC0wLjU3MTE5IDAuNzc5MzksLTEuNDQ5NTggMC40NjI1NiwtMi4yMTE2MWMtMC4zMTY4MywtMC43NjIwNCAtMS4wNjkxNSwtMS4yNTEyNSAtMS44OTQyLC0xLjIzMTc1eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                  width={35}
                />
              </div>
            </div>
          </Tooltip>
        ) : (
          <div
            className={`z-50 fixed bottom-8 right-8 drop-shadow-xl select-none`}
          >
            <div className="rounded-full bg-[#610ee4] h-[50px] w-[50px] flex justify-center items-center">
              <img
                className={`cursor-pointer p-2 hover:bg-pink-400 rounded-full ${Ham}`}
                onTouchStart={handleClick}
                onClick={handleClick}
                draggable={false}
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTUsOGMtMC43MjEyNywtMC4wMTAyIC0xLjM5MjE2LDAuMzY4NzUgLTEuNzU1NzgsMC45OTE3NWMtMC4zNjM2MSwwLjYyMyAtMC4zNjM2MSwxLjM5MzUxIDAsMi4wMTY1MWMwLjM2MzYxLDAuNjIzIDEuMDM0NSwxLjAwMTk1IDEuNzU1NzgsMC45OTE3NWg0MGMwLjcyMTI3LDAuMDEwMiAxLjM5MjE2LC0wLjM2ODc1IDEuNzU1NzgsLTAuOTkxNzVjMC4zNjM2MSwtMC42MjMgMC4zNjM2MSwtMS4zOTM1MSAwLC0yLjAxNjUxYy0wLjM2MzYxLC0wLjYyMyAtMS4wMzQ1LC0xLjAwMTk1IC0xLjc1NTc4LC0wLjk5MTc1ek01LDIzYy0wLjcyMTI3LC0wLjAxMDIgLTEuMzkyMTYsMC4zNjg3NSAtMS43NTU3OCwwLjk5MTc1Yy0wLjM2MzYxLDAuNjIzIC0wLjM2MzYxLDEuMzkzNTEgMCwyLjAxNjUxYzAuMzYzNjEsMC42MjMgMS4wMzQ1LDEuMDAxOTUgMS43NTU3OCwwLjk5MTc1aDQwYzAuNzIxMjcsMC4wMTAyIDEuMzkyMTYsLTAuMzY4NzUgMS43NTU3OCwtMC45OTE3NWMwLjM2MzYxLC0wLjYyMyAwLjM2MzYxLC0xLjM5MzUxIDAsLTIuMDE2NTFjLTAuMzYzNjEsLTAuNjIzIC0xLjAzNDUsLTEuMDAxOTUgLTEuNzU1NzgsLTAuOTkxNzV6TTUsMzhjLTAuNzIxMjcsLTAuMDEwMiAtMS4zOTIxNiwwLjM2ODc1IC0xLjc1NTc4LDAuOTkxNzVjLTAuMzYzNjEsMC42MjMgLTAuMzYzNjEsMS4zOTM1MSAwLDIuMDE2NTFjMC4zNjM2MSwwLjYyMyAxLjAzNDUsMS4wMDE5NSAxLjc1NTc4LDAuOTkxNzVoNDBjMC43MjEyNywwLjAxMDIgMS4zOTIxNiwtMC4zNjg3NSAxLjc1NTc4LC0wLjk5MTc1YzAuMzYzNjEsLTAuNjIzIDAuMzYzNjEsLTEuMzkzNTEgMCwtMi4wMTY1MWMtMC4zNjM2MSwtMC42MjMgLTEuMDM0NSwtMS4wMDE5NSAtMS43NTU3OCwtMC45OTE3NXoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
                width={35}
              />
              <img
                onTouchStart={handleClick}
                onClick={handleClick}
                className={`cursor-pointer p-2 hover:bg-pink-400 rounded-full ${HamClose}`}
                draggable={false}
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQwLjc4MzIsNy4yNzE0OGMtMC41Mjg1MSwwLjAxMjQ3IC0xLjAzMDU4LDAuMjMzNjcgLTEuMzk2NDgsMC42MTUyM2wtMTQuMzM1OTQsMTQuMzM1OTRsLTE0LjMzNTk0LC0xNC4zMzU5NGMtMC4zNzY2OSwtMC4zODgyNyAtMC44OTQ1OCwtMC42MDc0MSAtMS40MzU1NSwtMC42MDc0MmMtMC44MTQzNywwLjAwMDE5IC0xLjU0NzMxLDAuNDk0MDkgLTEuODUzMjQsMS4yNDg4MWMtMC4zMDU5MiwwLjc1NDcyIC0wLjEyMzczLDEuNjE5NTcgMC40NjA2NiwyLjE4NjczbDE0LjMzNTk0LDE0LjMzNTk0bC0xNC4zMzU5NCwxNC4zMzU5NGMtMC41MjI0NywwLjUwMTY0IC0wLjczMjkyLDEuMjQ2NTMgLTAuNTUwMjEsMS45NDc0YzAuMTgyNzIsMC43MDA4NyAwLjczMDA1LDEuMjQ4MjEgMS40MzA5MywxLjQzMDkzYzAuNzAwODcsMC4xODI3MiAxLjQ0NTc3LC0wLjAyNzc0IDEuOTQ3NCwtMC41NTAyMWwxNC4zMzU5NCwtMTQuMzM1OTRsMTQuMzM1OTQsMTQuMzM1OTRjMC41MDE2NCwwLjUyMjQ3IDEuMjQ2NTMsMC43MzI5MyAxLjk0NzQxLDAuNTUwMjFjMC43MDA4OCwtMC4xODI3MiAxLjI0ODIxLC0wLjczMDA1IDEuNDMwOTMsLTEuNDMwOTNjMC4xODI3MiwtMC43MDA4OCAtMC4wMjc3NCwtMS40NDU3NyAtMC41NTAyMSwtMS45NDc0MWwtMTQuMzM1OTQsLTE0LjMzNTk0bDE0LjMzNTk0LC0xNC4zMzU5NGMwLjU5NTY3LC0wLjU3MTE5IDAuNzc5MzksLTEuNDQ5NTggMC40NjI1NiwtMi4yMTE2MWMtMC4zMTY4MywtMC43NjIwNCAtMS4wNjkxNSwtMS4yNTEyNSAtMS44OTQyLC0xLjIzMTc1eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                width={35}
              />
            </div>
          </div>
        )}
      </Draggable>

      {MobileNav && ( 
          <>
          <MobileNavigation /> 
          <div className="fixed cursor-pointer flex justify-center z-50 bottom-8 right-8 drop-shadow-xl select-none items-center rounded-full w-[50px] h-[50px] bg-[#610ee4]" onClick={()=>{
            setMobileNav(false), setQuickPane(true);
          }}>
            <img className="p-2 mr-1" src="https://img.icons8.com/ios-filled/50/ffffff/back.png" alt="" width={35} />
          </div>
          </>)
          }
          
          {QuickPane &&
        <div className="bg-[#610ee4] h-[25rem] left-0 right-0 mx-auto top-0 bottom-0 my-auto w-[20rem] z-50 fixed text-white rounded-xl overflow-y-scroll">
          <h4 className="text-white text-[23px] left-0 right-0 mx-auto w-[80%] p fixed text-center font-[Satoshi-Medium] mt-5 bg-[#610ee4]">
            Quick Pane
          </h4>
          <div className="flex flex-col items-center justify-start mt-12">
            <div
              className="Mobile:flex md:hidden justify-center items-center m-4 cursor-pointer select-none"
              onClick={OpenNavigationPane}
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
                alt=""
              />
              <span className="flex flex-col ml-3" onClick={OpenNavigationPane}>
                <p className="text-[20px]">Open Navigation Pane</p>
                <p className="text-[12px]">See the Navigation Menu</p>
              </span>
            </div>
            <div className="flex justify-center items-center m-4">
              <img
                src="https://img.icons8.com/ios/50/shopping-bag--v1.png"
                alt=""
              />
              <span className="flex flex-col ml-3">
                <p className="text-[20px]">Your Orders</p>
                <p className="text-[12px]">Quick Check Your Order History</p>
              </span>
            </div>
            <div className="flex justify-center items-center m-4">
              <img src="https://img.icons8.com/ios/50/truck--v1.png" alt="" />
              <span className="flex flex-col ml-3">
                <p className="text-[20px]">Track An Order</p>
                <p className="text-[12px]">See where you product is..</p>
              </span>
            </div>
            <div className="flex justify-center items-center m-4">
              <img src="https://img.icons8.com/ios/50/marker--v1.png" alt="" />
              <span className="flex flex-col ml-3">
                <p className="text-[20px]">Your Location</p>
                <p className="text-[12px]">You can update it also</p>
              </span>
            </div>
            <div className="flex justify-center items-center m-4">
              <img src="https://img.icons8.com/ios/50/return.png" alt="" />
              <span className="flex flex-col ml-3">
                <p className="text-[20px]">Return Request</p>
                <p className="text-[12px]">You can request a return</p>
              </span>
            </div>
          </div>
          <ChangeMode />
          
        </div>
      }
    </>
  );
}
