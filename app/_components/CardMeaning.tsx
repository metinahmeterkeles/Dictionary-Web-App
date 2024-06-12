export interface Definition {
  definition: string;
  example?: string;
}

interface CardMeaning {
  definitions: Definition[];
}

const CardMeaning: React.FC<CardMeaning> = ({ definitions }) => {
  return (
    <div className="mt-10">
      <span className="heading-s text-primary-75">Meaning</span>
      <ul className="mt-5 flex flex-col gap-3">
        {definitions.map((definition, index) => (
          <>
            <li
              key={index}
              className="list-disc ml-6"
              style={{ color: '#8F19E8' }}
            >
              <span className="body-m text-primary-2D">
                {definition.definition}
              </span>
            </li>
            {definition.example && (
              <span className="ml-[21px] body-m text-primary-7 ">
                &quot;{definition.example}&quot;
              </span>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
export default CardMeaning;
