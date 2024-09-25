interface Props {
  title: string;
  id: string;
  description: string;
}
const Section = ({ title, id, description }: Props) => {
  return (
    <section>
      <h2 id={id} className="text-3xl font-bold mb-4 mt-8">
        {title}
      </h2>
      <p className="mb-6">{description}</p>
      <hr className="border-gray-400 my-8 border-t-2 w-1/2 mx-auto" />
    </section>
  );
};

export default Section;
