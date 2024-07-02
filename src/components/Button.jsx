/* eslint-disable react/prop-types */
const Button = ({ name }) => {
  return (
    <button className="w-[100%] text-[hsl(0,0%,100%)] text-sm bg-[hsl(0,0%,20%)] rounded-xl py-4 lg:py-3 hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,12%)] font-[InterSemiBold] transition-all duration-300 ease-in-out">
      {name}
    </button>
  );
};

export default Button;
