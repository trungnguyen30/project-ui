import { useState } from 'react';
import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import CateCreateForm from './Method/Create/CateCreateForm';
import CateUpdateForm from './Method/Update/CateUpdateForm';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function Ad_Category() {
    const [cates, setCates] = useState([]);
    const [showingCreateCateForm, setShowingCreateCateForm] = useState(false);
    const [cateCurrently, setCateCurrently] = useState(null);

    function getCates() {
        const url = 'https://localhost:44397/api/Category';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setCates(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    function deleteCate(Categoryid) {
        const url = `${'https://localhost:44397/api/Category'}/${Categoryid}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                onCateDeleted(Categoryid);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    function renderCateTable() {
        return (
            <table className={cx('table-cate')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Metatitle</th>
                        <th>CRUD Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {cates.map((cate) => (
                        <tr key={cate.Categoryid}>
                            <td>{cate.Categoryid}</td>
                            <td>{cate.CategoryName}</td>
                            <td>{cate.MetaTitle}</td>
                            <td>
                                <Button sizeA primary onClick={() => setCateCurrently(cate)}>
                                    Update
                                </Button>
                                <Button
                                    sizeA
                                    primary
                                    onClick={() => {
                                        if (
                                            window.confirm(
                                                `Are you sure that want to delete the category name "${cate.CategoryName}" ?`,
                                            )
                                        )
                                            deleteCate(cate.Categoryid);
                                    }}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    function onCateCreated(createdCate) {
        setShowingCreateCateForm(false);

        if (createdCate === null) {
            return;
        }

        alert('Add successfully!!');

        getCates();
    }

    function onCateUpdated(updatedCate) {
        setCateCurrently(null);

        if (updatedCate === null) {
            return;
        }

        let catesCopy = [...cates];

        const index = catesCopy.findIndex((catesCopyCate, currentIndex) => {
            if (catesCopyCate.Categoryid === updatedCate.Categoryid) {
                return true;
            }
        });

        if (index !== -1) {
            catesCopy[index] = updatedCate;
        }

        setCates(catesCopy);

        alert(`Update successfully!!`);
    }

    function onCateDeleted(deleteByID) {
        let catesCopy = [...cates];

        const index = catesCopy.findIndex((catesCopyCate, currentIndex) => {
            if (catesCopyCate.Categoryid === deleteByID) {
                return true;
            }
        });

        if (index !== -1) {
            catesCopy.splice(index, 1);
        }

        setCates(catesCopy);

        alert(`Delete successfully!!`);
    }

    return (
        <div className="grid">
            {showingCreateCateForm === false && cateCurrently === null && (
                <div style={{ marginBottom: '20px' }}>
                    <Button sizeA primary onClick={getCates}>
                        Get Cates
                    </Button>
                    <Button sizeA primary onClick={() => setShowingCreateCateForm(true)}>
                        Create New Cate
                    </Button>
                </div>
            )}

            {cates.length > 0 && showingCreateCateForm === false && cateCurrently === null && renderCateTable()}

            {showingCreateCateForm && <CateCreateForm onCateCreated={onCateCreated} />}

            {cateCurrently !== null && <CateUpdateForm cate={cateCurrently} onCateUpdated={onCateUpdated} />}
        </div>
    );
}

export default Ad_Category;
