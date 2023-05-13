import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../components/Heading';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <nav className={cx('category')}>
            <Heading category>
                <FontAwesomeIcon icon={faList} className={cx('category-icon')} />
                Dashboard
            </Heading>

            <ul className={cx('category-list')}>
                <li className={cx('category-item')}>
                    <Button toCate to={'/staff'}>
                        Home
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/order'}>
                        Phiếu xuất
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/receipt'}>
                        Phiếu nhập
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
