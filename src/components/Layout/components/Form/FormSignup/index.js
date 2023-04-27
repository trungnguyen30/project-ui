import classNames from 'classnames/bind';
import Button from '../../Button';
import Heading from '../../Heading';
import styles from './FormSignup.module.scss';
import img from '~/assets/img';

import { useState } from 'react';

const cx = classNames.bind(styles);

function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const handleSubmit = () => {
        if (!username) {
            alert('empty username');
            return;
        }
        if (!password) {
            alert('empty password');
            return;
        }
        if (!repassword) {
            alert('empty re-password');
            return;
        }
        if (password !== repassword) {
            alert('not same password');
            return;
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Button backHome to={'/'}>
                    <img src={img.logo} className={cx('img-logo')} />
                </Button>
            </div>
            <div className={cx('form-signup')}>
                <Heading form>Đăng ký</Heading>
                <div className={cx('inner')}>
                    <div className={cx('input-box')}>
                        <input
                            placeholder="Tên đăng nhập"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            placeholder="Mật khẩu"
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            placeholder="Xác nhận mật khẩu"
                            type="text"
                            value={repassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                    </div>
                    <Button sizeD primary onClick={handleSubmit}>
                        Đăng ký
                    </Button>
                    <span className={cx('login')}>
                        <span className={cx('title')}>Bạn đã có tài khoản?</span>
                        <Button form to={'/login'}>
                            Đăng nhập
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Form;
