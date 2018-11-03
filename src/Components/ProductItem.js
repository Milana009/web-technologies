import React from 'react';

export const ProductItem = ({id, title, description}) => (
<div className="col-sm-4">
    <div className="card">
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        </div>
    </div>
</div>
);