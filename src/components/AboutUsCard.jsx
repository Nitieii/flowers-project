import PropTypes from "prop-types";

function AboutUsCard({ image, title, children }) {
  return (
    <div className="flex flex-1 flex-col items-center border mx-4 border-black p-6">
      <img src={image} alt="card" className="-mt-4 sm:w-[200px]" />

      <h3 className="mb-4 font-tanMonCheri text-[30px]">{title}</h3>

      <p className="md:w-[360px] border-t border-black pt-6 text-center font-montserrat text-xl italic leading-8">
        {children}
      </p>
    </div>
  );
}

AboutUsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AboutUsCard;
