import { HeartIconBtn } from "../../../common/icons/heartIconBtn";

export function ListOfSongs() {
  return (
    <section>
      <div className="flex relative w-screen">
        <div className="flex">
          <p className="  text-white">Song Name</p>
          <p className=" text-sm text-white">Artist Name</p>
        </div>
      </div>
      <div className="absolute right-0 ">
        <HeartIconBtn />
      </div>
    </section>
  );
}
