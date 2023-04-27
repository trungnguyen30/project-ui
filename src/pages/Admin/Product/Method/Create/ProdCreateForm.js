import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProdCreateForm.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function ProdCreateForm(props) {
    const iniData = Object.freeze({
        Categoryid: '',
        ProdName: '',
        MetaTitle: '',
        Description: '',
        ImagePath: '',
        Price: '',
    });

    const [formData, setFormData] = useState(iniData);

    const [listCate, setListCate] = useState([{ Categoryid: '', CategoryName: '' }]);
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://localhost:44397/api/Category');
            const newData = await resp.json();
            setListCate(newData);
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

        const prodToCreate = {
            Pid: null,
            Categoryid: formData.Categoryid,
            ProdName: formData.ProdName,
            MetaTitle: formData.MetaTitle,
            Description: formData.Description,
            ImagePath: formData.ImagePath,
            Price: formData.Price,
        };

        if (!prodToCreate.ProdName) {
            alert('Empty product name!!');
            return;
        } else if (prodToCreate.ProdName.length > 50) {
            alert('Name maximum 50!!');
            return;
        } else if (prodToCreate.Price.length > 10 || prodToCreate.Price.length < 7) {
            alert('Number from 7 to 10 characters!!');
            return;
        } else if (prodToCreate.Categoryid === '') {
            alert('Category Name must be selected!!');
            return;
        }

        const url = 'https://localhost:44397/api/Product';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prodToCreate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onProdCreated(prodToCreate);
    };

    return (
        <form className={cx('create')}>
            <h1>Create New Prod</h1>
            <div className={cx('wrapper')}>
                <div>
                    <label className={cx('lbl')}>Category Name:</label>
                    <select
                        value={formData.Categoryid}
                        name="Categoryid"
                        onChange={handleChange}
                        className={cx('selection')}
                    >
                        <option value="" disabled>
                            -- Select --
                        </option>
                        {listCate.map((x) => (
                            <option value={x.Categoryid} key={x.Categoryid}>
                                {x.CategoryName}
                            </option>
                        ))}
                    </select>
                    {/* <input className={cx('ip')} value={formData.Categoryid} name="Categoryid" type="text" onChange={handleChange} /> */}
                </div>
                <div>
                    <label className={cx('lbl')}>Prod Name:</label>
                    <input
                        className={cx('ip')}
                        value={formData.ProdName}
                        name="ProdName"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>MetaTitle:</label>
                    <input
                        className={cx('ip')}
                        value={formData.MetaTitle}
                        name="MetaTitle"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Description:</label>
                    <input
                        className={cx('ip')}
                        value={formData.Description}
                        name="Description"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>ImagePath:</label>
                    <input
                        className={cx('ip')}
                        value={formData.ImagePath}
                        name="ImagePath"
                        type="file"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Price:</label>
                    <input
                        className={cx('ip')}
                        value={formData.Price}
                        name="Price"
                        type="number"
                        pattern="[0-9]"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button sizeA primary onClick={handleSubmit}>
                Submit
            </Button>
            <Button sizeA onClick={(e) => props.onProdCreated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default ProdCreateForm;
