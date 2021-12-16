import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps{
    icon: any;
    size?: any;
}

const Icon = ({icon, size} : IProps) => {
    return (
        <FontAwesomeIcon icon={icon} size={size} />
    );
};

export default Icon;