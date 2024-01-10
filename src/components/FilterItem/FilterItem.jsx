// eslint-disable-next-line react/prop-types
export default function FilterItem({ value }) {
  return (
    <div className="bg-[#17161B] min-w-[4rem] rounded-3xl flex justify-center items-center mr-2 px-4 py-1 even:bg-violet-700">
      <div className="text-white text-center">{value.url}</div>
    </div>
  );
}
