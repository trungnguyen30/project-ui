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
                    <Button toCate to={'/admin'}>
                        Home
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/ad-cate'}>
                        Danh mục
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/ad-prod'}>
                        Sản phẩm
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
