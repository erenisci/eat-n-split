interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className='button'
      onClick={onClick}
    >
      {children ? children : 'Button'}
    </button>
  );
};

export default Button;
