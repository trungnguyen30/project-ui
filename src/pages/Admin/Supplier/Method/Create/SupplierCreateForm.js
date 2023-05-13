import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SupplierCreateForm.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function SupplierCreateForm(props) {
    const iniData = Object.freeze({
        Sid: '',
        ProducerId: '',
        SName: '',
        Phone: '',
        Address: '',
        PostalCode: '',
    });

    const [formData, setFormData] = useState(iniData);

    const [listNSX, setListNSX] = useState([{ ProducerId: '', ProducerName: '' }]);
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://localhost:44397/api/Producer');
            const newData = await resp.json();
            setListNSX(newData);
            // console.log(newData);
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const supplierToCreate = {
            Sid: null,
            ProducerId: formData.ProducerId,
            SName: formData.SName,
            Phone: formData.Phone,
            Address: formData.Address,
            PostalCode: formData.PostalCode,
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

        const url = 'https://localhost:44397/api/Supplier';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(supplierToCreate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onSupplierCreated(supplierToCreate);
    };

    return (
        <form className={cx('create')}>
            <h1>Create New Supplier</h1>
            <div className={cx('wrapper')}>
                <div>
                    <label className={cx('lbl')}>Producer Name: </label>
                    <select value={formData.ProducerId} name="ProducerId" onChange={handleChange} className={cx('selection')}>
                        <option value="" disabled>
                            -- Select --
                        </option>
                        {listNSX.map((x) => (
                            <option value={x.ProducerId} key={x.ProducerId}>
                                {x.ProducerName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className={cx('lbl')}>Supplier Name: </label>
                    <input
                        className={cx('ip')}
                        value={formData.SName}
                        name="SName"
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
                    <label className={cx('lbl')}>PostalCode: </label>
                    <input
                        className={cx('ip')}
                        value={formData.PostalCode}
                        name="PostalCode"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button sizeA primary onClick={handleSubmit}>
                Submit
            </Button>
            <Button sizeA onClick={(e) => props.onSupplierCreated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default SupplierCreateForm;
