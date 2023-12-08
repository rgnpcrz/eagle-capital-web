export default function TheFirm() {
  return (
    <>
      <div className="">
        <div className="max-w-screen-lg mx-auto px-3 py-12 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center w-40">
              <p>The Firm</p>
              <hr className="w-16 h-0.5 bg-primary flex-1 ms-3"></hr>
            </div>
            <button className="px-3 py-1.5 border-2 rounded-full border-primary">View more</button>
          </div>
          <div className="max-w-lg mx-auto py-24 flex flex-col gap-12 items-center text-center">
            <h1 className="text-4xl">What we do?</h1>
            <h1 className="text-center text-base">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
              not only five centuries
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
