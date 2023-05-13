import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './StaffUpdateForm.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function StaffUpdateForm(props) {
    const iniData = Object.freeze({
        Staff_Username: props.staff.Staff_Username,
        Staff_Password: props.staff.Staff_Password,
        Name: props.staff.Name,
        Phone: props.staff.Phone,
        Email: props.staff.Email,
        Address: props.staff.Address,
        DateStartWork: props.staff.DateStartWork,
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

        const staffToUpdate = {
            Staffid: props.staff.Staffid,
            Staff_Username: formData.Staff_Username,
            Staff_Password: formData.Staff_Password,
            Name: formData.Name,
            Phone: formData.Phone,
            Email: formData.Email,
            Address: formData.Address,
            DateStartWork: formData.DateStartWork,
        };

        // if (!prodToCreate.ProdName) {
        //     alert('Empty product name!!');
        //     return;
        // } else if (prodToCreate.ProdName.length > 50) {
        //     alert('Name maximum 50!!');
        //     return;
        // } else if (prodToCreate.Price.length > 10 || prodToCreate.Price.length < 7) {
        //     alert('Number from 7 to 10 characters!!');
        //     return;
        // } else if (prodToCreate.Categoryid === '') {
        //     alert('Category Name must be selected!!');
        //     return;
        // }

        const url = 'https://localhost:44397/api/Staff';
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(staffToUpdate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onStaffUpdated(staffToUpdate);
    };

    return (
        <form className={cx('create')}>
            <h1>Update Staff</h1>
            <div className={cx('wrapper')}>
                <div>
                    <label className={cx('lbl')}>Username: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Staff_Username}
                        name="Staff_Username"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Password: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Staff_Password}
                        name="Staff_Password"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Name: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Name}
                        name="Name"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Phone: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Phone}
                        name="Phone"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Email: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Email}
                        name="Email"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Address: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Address}
                        name="Address"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Date Start Work: </label>
                    <input
                        className={cx('ip')}
                        value={formData.DateStartWork}
                        name="DateStartWork"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button sizeA primary onClick={handleSubmit}>
                Submit
            </Button>
            <Button sizeA onClick={(e) => props.onStaffUpdated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default StaffUpdateForm;
