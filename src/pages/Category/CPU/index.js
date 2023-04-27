import { faCaretDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './CPU.module.scss';
import img from '~/assets/img';
import Button from '~/components/Layout/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PriceItem from '~/components/Layout/components/PriceItem';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <span className={cx('filter-label')}>Sắp xếp theo</span>
                <Button sizeA>Phổ biến</Button>
                <Button sizeA disableHover>
                    Mới nhất
                </Button>
                <Button sizeA>Bán chạy</Button>

                <Tippy
                    interactive
                    // visible
                    placement="bottom-start"
                    render={(attrs) => (
                        <div className={cx('price-list')}>
                            <PopperWrapper>
                                <PriceItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('price')}>
                        <span className={cx('price-label')}>Giá</span>
                        <FontAwesomeIcon icon={faCaretDown} className={cx('icon')} />
                    </div>
                </Tippy>

                <div className={cx('filter-page')}>
                    <span className={cx('filter-num')}>1/14</span>
                    <div className={cx('filter-control')}>
                        <Button sizeB>
                            <FontAwesomeIcon icon={faChevronLeft} className={cx('filter-icon')} />
                        </Button>
                        <Button sizeB>
                            <FontAwesomeIcon icon={faChevronRight} className={cx('filter-icon')} />
                        </Button>
                    </div>
                </div>
            </div>

            <div className={cx('product')}>
                <div className={cx('grid-row')}>
                    <div className={cx('grid-column-2-4')}>
                        <div className={cx('product-item')}>
                            <Button toDetail to={'/product'}>
                                <div className={cx('product-img')}>
                                    <img src={img.i9_13900} className={cx('img')} />
                                </div>
                            </Button>
                            <h4 className={cx('product-title')}>Intel Core i9 13900</h4>
                            <div className={cx('product-price')}>
                                <span className={cx('old-price')}>1.200.000đ</span>
                                <span className={cx('new-price')}>999.000đ</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('grid-column-2-4')}>
                        <div className={cx('product-item')}>
                            <Button toDetail to={'/product'}>
                                <div className={cx('product-img')}>
                                    <img src={img.i9_13900k} className={cx('img')} />
                                </div>
                            </Button>
                            <h4 className={cx('product-title')}>Intel Core i9 13900K</h4>
                            <div className={cx('product-price')}>
                                <span className={cx('old-price')}>1.200.000đ</span>
                                <span className={cx('new-price')}>999.000đ</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('grid-column-2-4')}>
                        <div className={cx('product-item')}>
                            <Button toDetail to={'/product'}>
                                <div className={cx('product-img')}>
                                    <img src={img.i9_10980XE} className={cx('img')} />
                                </div>
                            </Button>
                            <h4 className={cx('product-title')}>Intel Core i9 10980XE</h4>
                            <div className={cx('product-price')}>
                                <span className={cx('old-price')}>1.200.000đ</span>
                                <span className={cx('new-price')}>999.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('pagination')}>
                <ul className={cx('pagination-list')}>
                    <li className={cx('pagination-item')}>
                        <Button noBG>
                            <FontAwesomeIcon icon={faChevronLeft} className={cx('pagination-icon')} />
                        </Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button sizeC disableHover>
                            1
                        </Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>2</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>3</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>4</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>...</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>14</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>
                            <FontAwesomeIcon icon={faChevronRight} className={cx('pagination-icon')} />
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
