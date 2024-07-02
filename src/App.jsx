import Button from "./components/Button";

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-[90%] sm:w-[50%] lg:w-[30%] bg-[hsl(0,0%,12%)] p-8 flex flex-col items-center gap-8 rounded-2xl">
        <img
          width={1000}
          height={1000}
          src="/avatar-jessica.jpeg"
          alt=""
          className="rounded-full w-[30%] sm:w-[20%] bg-cover bg-no-repeat bg-center"
        />
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-[InterSemiBold] text-[hsl(0,0%,100%)] text-lg sm:text-xl">
            Jessica Randall
          </h1>
          <h3 className="font-[InterSemiBold] text-[hsl(75,94%,57%)] text-xs">
            London, United Kingdom
          </h3>
        </div>
        <p className="font-[InterRegular] text-[#e7e7e7] text-sm">
          &quot;Front-end developer and avid reader.&quot;
        </p>
        <div className="w-[100%] flex flex-col gap-4">
          <Button name="GitHub" />
          <Button name="Frontend Mentor" />
          <Button name="LinkedIn" />
          <Button name="Twitter" />
          <Button name="Instagram" />
        </div>
      </div>
      <div className="attribution mt-5">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/Azazek6" target="_blank">
          @Azazek6
        </a>
        .
      </div>
    </div>
  );
};

export default App;
