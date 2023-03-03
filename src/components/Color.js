import { FaTrash } from 'react-icons/fa';
import React from 'react';
import StarRating from './StarRating';

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <section>
      <h1>{title}</h1>
      <button type="button" onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(rate) => onRate(id, rate)} />
    </section>
  );
}
