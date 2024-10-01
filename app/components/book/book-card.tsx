import Image from 'next/image';

import { ButtonMore } from '../button/button-more';

import { Book } from '@/app/utils/types';

interface BookCardProps {
  book: Book;
  openModal: (book: Book) => void;
}

const BookCard = ({ book, openModal }: BookCardProps) => {
  const { title, cover, slug } = book.attributes;

  return (
    <li
      key={book.id}
      id={slug}
      className="p-4 border rounded-lg shadow-lg transition-transform hover:scale-105"
    >
      {cover && (
        <div className="flex justify-center items-center flex-col pb-4">
          <Image
            src={cover}
            alt={title}
            width={200}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <ButtonMore label="Abrir" onClick={() => openModal(book)} />
    </li>
  );
};

export default BookCard;
