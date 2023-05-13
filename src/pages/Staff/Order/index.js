import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Order() {
    const [orders, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        const url = 'https://localhost:44397/api/Order';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setOrder(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);
    function renderOrder() {
        return (
            <>
                <div className={cx('search')}>
                    <input
                        placeholder="Nhập sản phẩm cần tìm kiếm..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div>
                    {orders
                        .filter((item) => {
                            return search.toLowerCase() === '' ? item : item.ProdName.toLowerCase().includes(search);
                        })
                        .map((order) => (
                            <div key={order.OrderId}>                                
                                <p>Tên sản phẩm: {order.ProdName}</p>
                                <p>Ngày đặt hàng: {order.OrderDate}</p>
                                <p>Ngày xuất: {order.ExportDate}</p>
                                <p>Số lượng đặt: {order.Quantity}</p>
                                <p>Giá: {order.UnitPrice}</p>
                                <p>Tổng: {order.Total}</p>
                                <p>Tên khách hàng: {order.Name}</p>
                                <p>Số điện thoại: {order.Phone}</p>
                                <p>Email: {order.Email}</p>
                                <p>Địa chỉ: {order.Address}</p>
                                <p>--------------------------------</p>
                            </div>
                        ))}
                </div>
            </>
        );
    }
    return <div className='grid'>
        {orders.length > 0 && renderOrder()}
    </div>;
}

export default Order;
