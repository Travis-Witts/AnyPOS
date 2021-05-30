import React from 'react';
import './style.scss';

type ICardProps = {
  id: number | undefined;
};

const ProductCard: React.FC<ICardProps> = ({ id }: ICardProps) => {
  const a = 1;

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Component {id}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <p>Price: 100</p>
          <p>Quantity: 2</p>
        </div>
      </div>
      <footer className="card-footer">
        <a href=" " className="card-footer-item">
          Add
        </a>
        <a href=" " className="card-footer-item">
          Remove
        </a>
      </footer>
    </div>
  );
};

export default ProductCard;
