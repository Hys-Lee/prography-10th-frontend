interface SubHeaderProps {
  subHeaderContent: string;
  subDescriptionContent: string;
}

const SubHeader = ({
  subHeaderContent,
  subDescriptionContent,
}: SubHeaderProps) => {
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <h4 className="font-bold text-lg">{subHeaderContent}</h4>
        <div className="flex flex-col gap-3">
          <div className=" w-full bg-blue-500" style={{ height: '2px' }}></div>
          <p className="text-xs font-semibold text-gray-500">
            {subDescriptionContent}
          </p>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
