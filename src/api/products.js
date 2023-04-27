import axiosClient from './axiosClient';

const END_POINT = {
    PRODUCTS: 'products',
};

export const getAPI = () => {
    return axiosClient.get(`${END_POINT.PRODUCTS}`);
};
