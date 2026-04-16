import logoImage from '../assets/images/logo.png';

type Props = {
  size?: number;
  className?: string;
  variant?: 'default' | 'black';
};

/**
 * GRB TRAVELS logo component using the official brand image.
 * Features stylized GRB text with an airplane.
 */
export default function LogoMark({ size = 40, className, variant = 'default' }: Props) {
  return (
    <img
      src={logoImage}
      alt="GRB TRAVELS Tour & Travels"
      className={`transition-all duration-500 hover:scale-110 animate-float ${className || ''}`}
      style={{ 
        width: size, 
        height: size, 
        objectFit: 'contain',
        filter: variant === 'black' ? 'brightness(0)' : undefined,
        cursor: 'pointer'
      }}
    />
  );
}
