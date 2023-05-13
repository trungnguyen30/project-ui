import classNames from 'classnames/bind';
import styles from './Receipt.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Receipt() {
    const [receipts, setReceipt] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        const url = 'https://localhost:44397/api/Receipt';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setReceipt(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);
    function renderReceipt() {
        return (
            <>
                <div className={cx('search')}>
                    <input placeholder="Nhập sản phẩm cần tìm kiếm..." onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div>
                    {receipts
                        .filter((item) => {
                            return search.toLowerCase() === '' ? item : item.ProdName.toLowerCase().includes(search);
                        })
                        .map((receipt) => (
                            <div key={receipt.Rid}>
                                <p>Tên sản phẩm: {receipt.ProdName}</p>
                                <p>Ngày nhập: {receipt.InputDate}</p>
                                <p>Số lượng nhập: {receipt.Quantity}</p>
                                <p>Giá: {receipt.UnitPrice}</p>
                                <p>Tổng: {receipt.Total}</p>
                                <p>Địa chỉ: {receipt.Address}</p>
                                <p>Nhà cung cấp: {receipt.SName}</p>
                                <p>Số điện thoại: {receipt.Phone}</p>
                                <p>Nhà sản xuất: {receipt.ProducerName}</p>
                                <p>Quốc gia: {receipt.Nation}</p>
                                <p>------------------------------------</p>
                            </div>
                        ))}
                </div>
            </>
        );
    }
    return <div className="grid">{receipts.length > 0 && renderReceipt()}</div>;
}

export default Receipt;
