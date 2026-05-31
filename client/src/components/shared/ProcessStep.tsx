interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isFirst: boolean;
  isLast: boolean;
}

const ProcessStep = ({
  number,
  title,
  description,
  isFirst,
  isLast,
}: ProcessStepProps) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl shadow-custom p-6 h-full flex flex-col items-center text-center">
        <div className="relative flex items-center justify-center mb-6 w-full">
          {/* Left connecting line (hidden on small screens) */}
          {!isFirst && (
            <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1 bg-secondary"></div>
          )}

          {/* Number circle */}
          <div className="w-14 h-14 z-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">
            {number}
          </div>

          {/* Right connecting line (hidden on small screens) */}
          {!isLast && (
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1 bg-secondary"></div>
          )}
        </div>

        <h3 className="font-bold text-xl text-primary mb-3">{title}</h3>
        <p className="text-dark-gray text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
