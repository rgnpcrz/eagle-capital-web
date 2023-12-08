import bannerImg from "./../../../assets/images/banner-image.png";

export default function Banner() {
  return (
    <>
      <div className="bg-primary text-white">
        <div className="max-w-screen-lg mx-auto px-3 py-12">
          <div className="max-w-lg">
            <h1 className="text-4xl">{"Landing page TEXT, HEADER will be here".toUpperCase()}</h1>
            <h1 className="ps-10 py-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illo dolore optio voluptate deleniti deserunt quos numquam quas. Optio, dolore.</h1>
          </div>
          <div>
            <img className="w-full" src={bannerImg} />
          </div>
        </div>
      </div>
    </>
  );
}
