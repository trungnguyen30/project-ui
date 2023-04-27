import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCheck, faChevronLeft, faChevronRight, faList, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Heading from '../../components/Heading';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <nav className={cx('category')}>
            <Heading category>
                <FontAwesomeIcon icon={faList} className={cx('category-icon')} />
                Danh mục
            </Heading>

            <ul className={cx('category-list')}>
                <li className={cx('category-item')}>
                    <Button toCate to={'/VGA'}>VGA - Card màn hình</Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/CPU'}>CPU - Bộ vi xử lý</Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/RAM'}>RAM - bộ nhớ trong</Button>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
