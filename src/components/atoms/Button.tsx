interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const Button = ({ text, ...rest }: IPropsButton) => {
  return (
    <button {...rest} className="bg-accent hover:bg-accent text-white font-bold py-2 px-4 rounded hover:shadow-xl ">{text}</button>
  )
}
4