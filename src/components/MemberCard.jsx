import PropTypes from "prop-types";

function MemberCard({ image, id, children }) {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <img
        src={image}
        alt={id}
        className="h-[240px] max-w-[240px] object-cover o"
      />

      <h3 className="my-4 h-16 w-full max-w-[240px] border-b border-black font-tanMonCheri text-lg font-medium leading-7">
        {children}
      </h3>

      <p className="text-md font- text-center font-tanMonCheri font-medium">
        {id}
      </p>
    </div>
  );
}

MemberCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
};

export default MemberCard;
