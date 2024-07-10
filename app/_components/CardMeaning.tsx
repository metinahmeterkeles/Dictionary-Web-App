import Link from 'next/link';

export interface Definition {
  definition: string;
  example?: string;
}

interface CardMeaning {
  definitions: Definition[];
  synonyms: string | string[];
}

const CardMeaning: React.FC<CardMeaning> = ({ definitions, synonyms }) => {
  return (
    <div className="mt-10">
      <span className=" body-s md:heading-s text-primary-75">Meaning</span>
      <ul className="mt-5 flex flex-col gap-3 ">
        {definitions.map((definition, index) => (
          <>
            <li
              key={index}
              className="list-disc ml-6"
              style={{ color: '#8F19E8' }}
            >
              <span className="body-s md:body-m text-primary-2D dark:text-white">
                {definition.definition}
              </span>
            </li>
            {definition.example && (
              <span className="ml-[21px] body-s md:body-m text-primary-75 ">
                &quot;{definition.example}&quot;
              </span>
            )}
          </>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div className="flex items-center gap-4 mt-5">
          <span className="body-m md:heading-s text-primary-75">Synonyms:</span>
          <span className="font-bold body-m md:heading-s text-primary-purple">
            <Link href={`/word?query=${synonyms.at(0)}`}>{synonyms.at(0)}</Link>
          </span>
        </div>
      )}
    </div>
  );
};
export default CardMeaning;
