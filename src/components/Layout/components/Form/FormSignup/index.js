import classNames from 'classnames/bind';
import Button from '../../Button';
import Heading from '../../Heading';
import styles from './FormSignup.module.scss';
import img from '~/assets/img';

import { useState } from 'react';

const cx = classNames.bind(styles);

function Form() {
    const [repassword, setRePassword] = useState('');

    const iniData = Object.freeze({
        User_Username: '',
        User_Password: '',
        Name: '',
        Phone: '',
        Email: '',
        Address: '',
    });

    const [formData, setFormData] = useState(iniData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userRegis = {
            Userid: null,
            User_Username: formData.User_Username,
            User_Password: formData.User_Password,
            Name: formData.Name,
            Phone: formData.Phone,
            Email: formData.Email,
            Address: formData.Address,
            User_Role: 'User',
        };

        const url = 'https://localhost:44397/api/user_regis';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRegis),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
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
                    <div className={cx('sub-inner')}>
                        <div className={cx('row-inner')}>
                            <div className={cx('input-box')}>
                                <input
                                    placeholder="Tên đăng nhập"
                                    type="text"
                                    name="User_Username"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('input-box')}>
                                <input
                                    placeholder="Mật khẩu"
                                    type="text"
                                    name="User_Password"
                                    onChange={handleChange}
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
                        </div>
                        <div className={cx('row-inner')}>
                            <div className={cx('input-box')}>
                                <input placeholder="Họ và tên" type="text" name="Name" onChange={handleChange} />
                            </div>
                            <div className={cx('input-box')}>
                                <input placeholder="Điện thoại" type="text" name="Phone" onChange={handleChange} />
                            </div>
                            <div className={cx('input-box')}>
                                <input placeholder="Email" type="text" name="Email" onChange={handleChange} />
                            </div>
                            <div className={cx('input-box')}>
                                <input placeholder="Địa chỉ" type="text" name="Address" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('btn-regis')}>
                        <Button sizeD primary onClick={handleSubmit}>
                            Đăng ký
                        </Button>
                    </div>
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
