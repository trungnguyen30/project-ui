import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import SearchHistory from '../SearchHistory';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h3 className={cx('search-title')}>Lịch sử tìm kiếm</h3>
                        <SearchHistory />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    placeholder="Nhập sản phẩm cần tìm kiếm..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
