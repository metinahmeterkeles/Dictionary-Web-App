const CardSpeech = ({ partOfSpeech }: { partOfSpeech: string }) => {
  return (
    <div className="flex items-center gap-5">
      <span className="font-bold italic lowercase body-m  md:heading-m">
        {partOfSpeech}
      </span>
      <span className="w-full h-[1px] bg-primary-97"></span>
    </div>
  );
};
export default CardSpeech;
