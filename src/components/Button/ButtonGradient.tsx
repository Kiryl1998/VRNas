import stylesButtonGradient from './ButtonGradient.module.css';

interface Props extends React.LinkHTMLAttributes<HTMLLinkElement> {
  textBtn: string;
}
const ButtonGradient: React.FC<Props> = ({ textBtn }) => {
  return (
    <a
      className={[
        stylesButtonGradient.button,
        stylesButtonGradient.button_gradient,
        'button_1',
      ].join(' ')}
    >
      <span>{textBtn}</span>
    </a>
  );
};

export default ButtonGradient;
