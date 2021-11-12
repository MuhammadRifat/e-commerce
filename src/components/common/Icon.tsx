import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps{
    icon: any;
}

const Icon = ({icon} : IProps) => {
    return (
        <FontAwesomeIcon icon={icon} />
    );
};

export default Icon;