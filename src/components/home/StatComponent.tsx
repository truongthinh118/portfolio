export default function StatComponent() {
  return (
    <>
      <div className="flex w-full divide-x divide-[#BDBBBB] bg-content1-foreground dark:bg-default-600 max-lg:rounded-[5px] max-lg:text-content1 lg:h-16 lg:bg-background">
        <div className="w-full py-1 text-center lg:py-2">
          <span className="text-3xl font-bold xl:text-5xl">
            2+{" "}
            <span className="text-tiny font-light lg:text-lg">
              years experience
            </span>
          </span>
        </div>
        <div className="w-full py-1 text-center lg:py-2">
          <span className="text-3xl font-bold xl:text-5xl">
            10+{" "}
            <span className="text-tiny font-light lg:text-lg">
              completed projects
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
