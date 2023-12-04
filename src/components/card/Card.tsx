import { useDarkMode } from '../../contexts/DarkModeContext';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  pop: number;
  reg: string;
  cap: string;
  img: string;
  official: string;
};

const Card = ({ name, pop, reg, cap, img, official }: Props) => {
  const { elemnBg, textColor } = useDarkMode();

  return (
    <Link
      to={`/${official}`}
      className={`w-full max-w-[250px] rounded-lg overflow-hidden shadow-xl ${elemnBg} ${textColor}`}
    >
      <div className="w-full">
        <img className="w-full h-36 object-cover" src={img} alt={name} />
      </div>
      <div className="p-4">
        <p className="font-bold mb-4">{name || 'Country Name'}</p>
        <div>
          <p className="text-sm">
            <span className="font-bold">Population:</span> {pop || 'Unknown'}
          </p>
          <p>
            <span className="font-bold">Region:</span> {reg || 'Unknown'}
          </p>
          <p>
            <span className="font-bold">Capital:</span> {cap || 'Unknown'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
