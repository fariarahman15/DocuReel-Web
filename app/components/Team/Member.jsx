const Member = ({ name, role, imageUrl }) => {
  return (
    <div className="w-full px-4">
      <div className="px-6">
        <div className="flex justify-center items-center">
          <img
            src={imageUrl}
            alt={name}
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
        </div>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
