import { Spinner } from '@nextui-org/react';

const loading = () => {
  return (
    <div className=" h-full flex items-center justify-center">
      <Spinner color="success" size="lg" />
    </div>
  );
};
export default loading;
