import { useEffect, useState } from "react";
import myStore from "./Store";

export function IncrementBtn() {
  const { count, Increment } = myStore();
  const [isTen, setIsTen] = useState("flex");

  useEffect(() => {
    if (count >= 10) {
      setIsTen("opacity-50 pointer-events-none disabled cursor-not-allowed");
    } else {
      setIsTen("flex cursor-pointer");
    }
  }, [count]);

  return (
    <button
      className={`bg-[#610ee4] selection:bg-none ${isTen} cursor-pointer text-white font-bold h-[20px] w-[20px] rounded-full flex justify-center items-center`}
      onClick={Increment}
    >
      <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      data-dm-inline-fill=""
      style={{
        "--dm-inline-fill": "currentColor",
      }}
    />
  </svg>
    </button>
  );
}

export function DecrementBtn() {
  const { count, Decrement } = myStore();
  const [isZero, setIsZero] = useState("flex");

  useEffect(() => {
    if (count === 0) {
      setIsZero("opacity-50 pointer-events-none disabled cursor-not-allowed");
    } else {
      setIsZero("flex cursor-pointer");
    }
  }, [count]);

  return (
    <button
  className={`bg-[#610ee4] selection:bg-none ${isZero} cursor-pointer text-white font-bold h-[20px] w-[20px] rounded-full flex justify-center items-center`}
  onClick={Decrement}
>
  {count === 1 ? (
    <img
      alt="svgImg"
      width={15}
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNlMzFiMWIiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
    />
  ) : (
    <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      data-dm-inline-fill=""
      style={{
        "--dm-inline-fill": "currentColor",
      }}
    />
  </svg>
    )} 
</button>

  );
}