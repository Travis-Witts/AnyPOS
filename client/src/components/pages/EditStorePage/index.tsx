import React from 'react';
import './style.scss'
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'

const EditStorePage: React.FC = () => {
    const a = 1;
    return (
        <div className="edit-store-container">
            <div className="edit-store-header">Edit Store</div>
            <NavLink exact to="/profile" className="edit-back-arrow"><Arrow className="back-arrow" /></NavLink>
            <div className="edit-name edit-cards">
                <p className="edit-store-h2">
                    Edit Name
                </p>
            </div>
            <div className="edit-description edit-cards">
            <p className="edit-store-h2">
                    Edit Description
                </p>
            </div>
        </div>
    )
}

export default EditStorePage;