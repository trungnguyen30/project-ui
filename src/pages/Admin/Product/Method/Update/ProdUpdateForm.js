import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ProdUpdateForm.module.scss';
import Button from '~/components/Layout/components/Button';
import NumericInput from 'react-numeric-input';

const cx = classNames.bind(styles);

function ProdUpdateForm(props) {
    const iniData = Object.freeze({
        Categoryid: props.prod.Categoryid,
        ProdName: props.prod.ProdName,
        MetaTitle: props.prod.MetaTitle,
        Description: props.prod.Description,
        ImagePath: props.prod.ImagePath,
        Price: props.prod.Price,
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

        const prodToUpdate = {
            Pid: props.prod.Pid,
            Categoryid: formData.Categoryid,
            ProdName: formData.ProdName,
            MetaTitle: formData.MetaTitle,
            Description: formData.Description,
            ImagePath: formData.ImagePath,
            Price: formData.Price,
        };

        if (!prodToUpdate.ProdName) {
            alert('Empty product name!!');
            return;
        } else if (prodToUpdate.ProdName.length > 50) {
            alert('Name maximum 50!!');
            return;
        } else if (prodToUpdate.Price.length > 10 || prodToUpdate.Price.length < 7) {
            alert('Number from 7 to 10 characters!!');
            return;
        }

        const url = 'https://localhost:44397/api/Product';
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prodToUpdate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onProdUpdated(prodToUpdate);
    };

    return (
        <form className={cx('update')}>
            <h1>Update New Prod</h1>
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
                    {/* <input
                        className={cx('ip')}
                        value={formData.Categoryid}
                        name="Categoryid"
                        type="text"
                        onChange={handleChange}
                    /> */}
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
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Price:</label>
                    {/* <NumericInput
                        className={cx('ip')}
                        name="Price"
                        value={formData.Price}
                        min={0}
                        max={99999999}
                        onChange={handleChange}
                    /> */}
                    <input
                        className={cx('ip')}
                        value={formData.Price}
                        name="Price"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button sizeA primary onClick={handleSubmit}>
                Submit
            </Button>
            <Button sizeA onClick={(e) => props.onProdUpdated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default ProdUpdateForm;
