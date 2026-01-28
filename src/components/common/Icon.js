import { ICONS } from '../../constants/icons';

/**
 * Icon 컴포넌트
 * @param {Object} props
 * @param {string} props.name - 아이콘 이름 (ICONS 객체의 키)
 * @returns {JSX.Element|null}
 */
const Icon = ({ name }) => {
  const RenderIcon = ICONS[name];
  return RenderIcon ? <RenderIcon /> : null;
};

export default Icon;
