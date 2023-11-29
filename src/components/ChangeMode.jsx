import React from "react";

export default function ChangeMode() {
  const [mode, setMode] = React.useState("light");
  const [rotate, setrotate] = React.useState(0);
  const [opacity, setopacity] = React.useState(100);

  const changeMode = () => {
    setrotate((prevRotate) => prevRotate + 180);
    setopacity((prevOpacity) => prevOpacity - 100);
    setTimeout(() => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      setopacity((prevOpacity) => prevOpacity + 100);
    }, 500);
  };

  return (
    <>
      <div className="flex"></div>

      <div className="bg-[#601ee4] bottom-8 right-24 fixed rounded-full z-50 Mobile:left-8 drop-shadow-xl h-[50px] w-[50px] select-none">
        <img draggable="false"
          style={{
            transform: `rotate(${rotate}deg)`,
            transition: `all 0.5s ease-in-out`,
            opacity: `${opacity}%`,
          }}
          className={`cursor-pointer rotate-[90] transition-all duration-500 ease-in-out transform hover:rotate-[10deg] hover:scale-110`}
          src={
            mode === "light"
              ? "data:image/png;base64,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"
              : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDc4IiBoZWlnaHQ9IjQ3OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KPHJhZGlhbEdyYWRpZW50IGlkPSJuUm9YZTN1VnRxaTI1MnpUMTM0VTlhX05KeDZHYmM0Tmc3Q19ncjEiIGN4PSIyOTYiIGN5PSIyNCIgcj0iMTgiIGZ4PSIyOTUuOTA1IiBmeT0iMTYuMjg5IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzIpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmM2M0Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNjI5IiBzdG9wLWNvbG9yPSIjZmZmMGJkIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNzAxIiBzdG9wLWNvbG9yPSIjZmVlZGI4Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNzkiIHN0b3AtY29sb3I9IiNmYmUyYTgiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii44OSIgc3RvcC1jb2xvcj0iI2Y3ZDI4ZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjk5NSIgc3RvcC1jb2xvcj0iI2YwYmI2YyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2YwYmE2YSI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMTgiIGZpbGw9InVybCgjblJvWGUzdVZ0cWkyNTJ6VDEzNFU5YV9OSng2R2JjNE5nN0NfZ3IxKSI+PC9jaXJjbGU+PHJhZGlhbEdyYWRpZW50IGlkPSJuUm9YZTN1VnRxaTI1MnpUMTM0VTliX05KeDZHYmM0Tmc3Q19ncjIiIGN4PSIyNC4xODYiIGN5PSIyNC4wOTUiIHI9IjE3Ljk2NCIgZng9IjI0LjA3NiIgZnk9IjE3LjMzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y1ZTNhMSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjYzIiBzdG9wLWNvbG9yPSIjZmZlMTllIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNzAzIiBzdG9wLWNvbG9yPSIjZmRkZDk5Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNzk1IiBzdG9wLWNvbG9yPSIjZjdkMTg5Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuODk2IiBzdG9wLWNvbG9yPSIjZWRiZTcwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTBhNTRlIj48L3N0b3A+PC9yYWRpYWxHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI25Sb1hlM3VWdHFpMjUyelQxMzRVOWJfTkp4NkdiYzROZzdDX2dyMikiIGQ9Ik0zNS42MjcsMzQuMDExYy0wLjQ5NCwwLjc5OC0xLjIzNCwxLjUyOC0yLjE2NSwxLjY1NmMtMC45MywwLjEyNy0xLjk4OC0wLjYwNC0xLjkxMi0xLjU0CWMtMC41NzksMC4wMzEtMS4xNzgsMC4wNjgtMS42OTEsMC4zMzljLTAuNTEyLDAuMjcxLTAuOTEzLDAuODQ2LTAuNzkxLDEuNDEzYzAuMDQ0LDAuMjA1LDAuMTUyLDAuNDEyLDAuMDk1LDAuNjEzCWMtMC4wNzMsMC4yNTUtMC4zOTEsMC40MDYtMC40MDIsMC42NzFjLTAuMDIxLDAuNDgzLDAuODgsMC40NTksMS4wMTksMC45MjJjMC4wOTgsMC4zMjktMC4yNiwwLjU5OS0wLjU2NSwwLjc1NgljLTEuMzYzLDAuNzAxLTIuNzc2LDEuNDE2LTQuMzA2LDEuNTA1Yy0wLjYzOCwwLjAzNy0xLjI4Mi0wLjAzNi0xLjkxNywwLjA0M0MyMiw0MC41MTIsMjEuMDk1LDQxLDIwLjEzNCw0MS4yNzUJYy0wLjIwMywwLjA1OC0wLjQwOCwwLjEwMi0wLjYxMywwLjE0MWMtMy42NzYtMC45NDMtNi45MDEtMy4wMDQtOS4yNzYtNS44MThjLTAuMDgzLTAuMzQ0LTAuMTYxLTAuNjg5LTAuMjM0LTEuMDMJYzAsMCwwLDAuMDE4LDAuMTI3LTAuMTQ5czAuMzQ3LTAuMjI4LDAuNTU0LTAuMjYzYzAuNjMyLTAuMTA3LDEuMjg4LTAuMDY4LDEuOTAyLDAuMTE0YzAuNDI5LDAuMTI3LDAuODQ1LDAuMzI0LDEuMjkyLDAuMzQ3CWMwLjQ0NywwLjAyMywwLjk1Mi0wLjE5NSwxLjA3My0wLjYyNmMwLjI0OS0wLjg5Mi0xLjIzMS0xLjQ1My0xLjIwOC0yLjM3OGMtMC40MzIsMC41NDItMS4zNzIsMC42MDYtMS44MTYsMC4wNzQJcy0wLjEzMS0xLjUxNCwwLjU1NC0xLjYyMmMtMC45NzQtMC41Ni0xLjQ0Ny0xLjc3LTEuMzU4LTIuODlzMC42NTQtMi4xNTIsMS4zNTItMy4wMzJjMC41MDMtMC42MzUsMS4xMjMtMS4yMzYsMS45MS0xLjQyOAljMC41NjMtMC4xMzgsMS4xNjEtMC4wNTEsMS43MTEsMC4xMzNjMS4zMzcsMC40NDgsMi40MTUsMS40MzEsMy40NSwyLjM4OWMwLjQxMSwwLjM4LDAuODMxLDAuNzcyLDEuMDc5LDEuMjc0CWMwLjQ0OSwwLjkwOCwwLjI1NywxLjk4MiwwLjE3LDIuOTkxczAuMDEyLDIuMTc1LDAuODE3LDIuNzljMC4xNDIsMC4xMDksMC4zMSwwLjE5NywwLjQ4OSwwLjE5N2MwLjE2OSwwLDAuMzI4LTAuMDc4LDAuNDcyLTAuMTY3CWMxLjA2OS0wLjY2NCwxLjU3LTIuMTE2LDEuMTM5LTMuMjk5Yy0wLjQ0NS0xLjIyMS0xLjcxMS0yLjA1MS0xLjk4NC0zLjMyMWMtMC4wMjgtMC4xMjktMC4wNDMtMC4yNywwLjAyMS0wLjM4NQljMC4wNjktMC4xMjcsMC4yMTYtMC4xOSwwLjM1Ny0wLjIyMWMwLjk0OS0wLjIxMSwyLjE1MiwwLjU2LDIuODA1LTAuMTZjMC4yNTEtMC4yNzcsMC4yOTUtMC42OCwwLjQ2Ni0xLjAxMglzMC42MjctMC41OTYsMC45MDQtMC4zNDVjMC4wNywwLjA2MywwLjExNSwwLjE1MSwwLjE0MywwLjI0MWMwLjI0NiwwLjc5MS0wLjY4LDEuNzg3LTAuMTAyLDIuMzgxCWMwLjEyOSwwLjEzMywwLjMwOSwwLjIwMiwwLjQ2NSwwLjMwMmMwLjU2LDAuMzU5LDAuNzY2LDEuMTc1LDAuNDQzLDEuNzU3YzAuNzY5LTAuMTk0LDEuMDE1LTEuMjg5LDEuNzc1LTEuNTE5CWMwLjE4Ny0wLjA1NywwLjM4OC0wLjA1MywwLjU3Mi0wLjEyYzAuNDIzLTAuMTUzLDAuNjQxLTAuNzExLDAuNDM1LTEuMTFjMC41NTQtMC4zMTksMS4wOCwwLjU2MSwxLjcxNSwwLjYzNQljMC40NTYsMC4wNTMsMC44NDEtMC4zMjMsMS4yODQtMC40NDVjMC42NzUtMC4xODYsMS40NTEsMC4zNTcsMS41MDgsMS4wNTVjMC4wMzIsMC4zOTYtMC4wNjMsMC45MjksMC4zMDcsMS4wNzUJYzAuMTM3LDAuMDU0LDAuMjk2LDAuMDIyLDAuNDM0LDAuMDczYzAuNDI5LDAuMTU3LDAuMjUzLDAuODE0LTAuMDUzLDEuMTUzYy0wLjM2MSwwLjM5OS0wLjgwMiwwLjcyNi0xLjI5LDAuOTU0CWMtMC4zNjcsMC4xNzEtMC44MzQsMC4zOTctMC44MDQsMC44MDFjMC4wMSwwLjE0LDAuMDg2LDAuMjcxLDAuMDc3LDAuNDExYy0wLjAyNywwLjQyMS0wLjc2NSwwLjY2LTAuNTgzLDEuMDQJYzAuMjc2LDAuMzYzLDAuODQsMC4wMDUsMS4xMjQtMC4zNTJjMC4yODQtMC4zNTcsMC44MjEtMC43MzksMS4xMjQtMC4zOTdjLTAuMjQ0LDAuMjUtMC4wMjksMC42NzgsMC4yNDcsMC44OTEJYzAuMjc2LDAuMjEzLDAuNjM0LDAuMzgsMC43NDIsMC43MTJDMzUuOTQ4LDMzLjQxNiwzNS43OTUsMzMuNzQsMzUuNjI3LDM0LjAxMXogTTE0Ljk0NSwxOC4wOTljMC40MTMsMC43NDItMC4zNywxLjY4OS0wLjA4OSwyLjQ5CWMwLjIwMywwLjU3NywwLjg2NiwwLjgzNCwxLjQ2MiwwLjk3M2MwLjQ2NiwwLjEwOCwwLjkzOCwwLjE4OSwxLjQxNCwwLjI0YzAuMjgxLDAuMDMsMC41NjksMC4wNSwwLjg0NS0wLjAxMgljMC43NDktMC4xNjgsMS4yMzYtMC44OCwxLjU4OC0xLjU2MmMwLjE5NC0wLjM3NSwwLjM3NC0wLjc2OCwwLjQxNS0xLjE4OGMwLjA0NC0wLjQ0Ni0wLjA3LTAuODkxLTAuMTk4LTEuMzIxCWMtMC4yMDktMC43LTAuNDk4LTEuNDQtMS4xMTctMS44MjdjLTAuNTU0LTAuMzQ2LTEuMzU2LTAuNDg5LTEuODktMC4xMTNjLTEuMTk0LDAuODQyLTIuMTE2LDAuOTc2LTIuMzYzLDEuMTA1CWMtMC4yNDcsMC4xMjktMC40NDEsMC40MDUtMC4zODEsMC42NzhDMTQuNjc1LDE3Ljc2NiwxNC44NDMsMTcuOTE3LDE0Ljk0NSwxOC4wOTl6IE0xOS42MzksMTMuMjQxCWMtMC4xNzEsMC4yOTUtMC4wNDQsMC42NzgsMC4xNTYsMC45NTNjMC4yLDAuMjc2LDAuNDcxLDAuNTAzLDAuNjI4LDAuODA1YzAuMzE3LDAuNjEsMC4xNjIsMS40MTgsMC41MTEsMS45OAljMC43ODMsMS4yNTksMS45MzUsMS44MjYsMi45NzYsMS4zODdjMS4xMzYtMC40NzksMS41NjYtMS45MTksMi42MTktMi41NjFjMC4xOS0wLjExNiwwLjQwOC0wLjIxNCwwLjUxOS0wLjQwNgljMC4yMi0wLjM4MS0wLjEyNy0wLjg2My0wLjUyOC0xLjA0NWMtMC40MDItMC4xODEtMC44NjgtMC4yMDUtMS4yNDUtMC40MzNjLTAuMTIxLTAuMDczLTAuMjMzLTAuMTcxLTAuMjg3LTAuMzAxCWMtMC4xNDQtMC4zNDMsMC4xNjQtMC43MzQsMC4wNzgtMS4wOTZjLTAuMTA0LTAuNDM1LTAuNjc3LTAuNTQ1LTEuMTIxLTAuNDgzYy0wLjQ0MywwLjA2Mi0wLjkzNywwLjE5NS0xLjMwNy0wLjA1NwljLTAuMjY5LTAuMTg0LTAuNDQ1LTAuNTU3LTAuNzcxLTAuNTU5Yy0wLjQ4LTAuMDAyLTAuNTIyLDAuNzIzLTAuODUzLDEuMDdDMjAuNjQ3LDEyLjg4MSwxOS45MDYsMTIuNzgsMTkuNjM5LDEzLjI0MXogTTE3LjczNiwxMC4yODljMC40MTIsMC4yNTksMC45MjQsMC4zMywxLjQwNiwwLjI2NmMwLjQ4My0wLjA2MywwLjk0LTAuMjUzLDEuMzctMC40ODJjMC4zMTEtMC4xNjYsMC42MTktMC4zNjIsMC44MjQtMC42NQlzMC4yODYtMC42ODYsMC4xMjItMC45OTljLTAuMjAyLTAuMzgzLTAuNjk3LTAuNTE2LTEuMTI3LTAuNDY2Yy0wLjI0OSwwLjAyOS0wLjU2NCwwLjA3Ni0wLjY5Mi0wLjEzOQljLTAuMDI2LTAuMDQzLTAuMDQtMC4wOTQtMC4wNzgtMC4xMjdjLTAuMDY1LTAuMDU4LTAuMTY1LTAuMDM5LTAuMjQ3LTAuMDEzYy0wLjg0MiwwLjI3MS0xLjQyOSwwLjg1OS0xLjY0LDEuMTIxCWMtMC4yNTUsMC4zMTYtMC40NywwLjc0Ni0wLjI5OSwxLjExNEMxNy40NDksMTAuMDczLDE3LjU4NywxMC4xOTUsMTcuNzM2LDEwLjI4OXogTTIyLjc0LDEwLjYxNQljMC4zNTUsMC4yMTEsMC43OTUtMC4xMTksMS4yMDYtMC4wODVjMC41MSwwLjA0MiwwLjc5NiwwLjYwMiwxLjIzNCwwLjg2N2MwLjM4LDAuMjMsMC44OTQsMC4yMTQsMS4yNTktMC4wMzkJYzAuMTU0LTAuMTA3LDAuMzQ5LTAuMjU3LDAuNTAzLTAuMTVjMC4xMDIsMC4wNzIsMC4xMTEsMC4yMTksMC4xNzksMC4zMjVjMC4xMjksMC4yMDIsMC40MiwwLjE5OSwwLjY1OSwwLjE3MgljMC4wNzEtMC4wMDgsMC4xNDctMC4wMTgsMC4yMDMtMC4wNjNjMC4xMTctMC4wOTYsMC4wNzktMC4yNzksMC4wOTEtMC40M2MwLjA0Ny0wLjU3NSwwLjg5My0wLjc3NywxLjAyOC0xLjMzOAljMC4wMjMtMC4wOTUsMC4wMjctMC4yMDMsMC4wOTgtMC4yN2MwLjEzOS0wLjEzMSwwLjM1NywwLjAxOCwwLjQ4NCwwLjE2YzAuMTM2LDAuMTUyLDAuMjc2LDAuMzA2LDAuNDU0LDAuNDA1CWMwLjE3OCwwLjA5OSwwLjQwNiwwLjEzMywwLjU4NSwwLjAzN2MwLjE4LTAuMDk3LDAuMjc1LTAuMzUsMC4xNjEtMC41MTljLTAuMTAzLTAuMTU0LTAuMzM0LTAuMi0wLjQwMi0wLjM3MwljLTAuMDMzLTAuMDg1LTAuMDE4LTAuMTgyLTAuMDQ3LTAuMjY5Yy0wLjA0NC0wLjEzMS0wLjE3OS0wLjIwOC0wLjMwNy0wLjI2Yy0wLjk3Mi0wLjM5NC0yLjE2Ny0wLjA1OS0zLjA2MS0wLjYwOQljLTAuMjE3LTAuMTMzLTAuNDExLTAuMy0wLjYzLTAuNDNjLTEuMTMxLTAuNjc2LTEuOTcsMC4zNTQtMi4xMzUsMC41NzhjLTAuMDU4LDAuMDc5LTAuMDY2LDAuMTgyLTAuMTA1LDAuMjcyCWMtMC4wNTQsMC4xMjQtMC4xNjQsMC4yMTMtMC4yNjgsMC4yOTljLTAuNDYsMC4zODUtMC44NzIsMC44MjctMS4yMjYsMS4zMTFjLTAuMDU0LDAuMDc0LTAuMTA5LDAuMTYtMC4wOTIsMC4yNQlDMjIuNjI1LDEwLjUyNiwyMi42NzksMTAuNTgsMjIuNzQsMTAuNjE1eiI+PC9wYXRoPgo8L3N2Zz4="
          }
          alt={mode === "light" ? "Light Mode Icon" : "Dark Mode Icon"}
          onClick={changeMode}
          height={mode === "light" ? 50 : 35}
          width={80}
        />
      </div>
    </>
  );
}
