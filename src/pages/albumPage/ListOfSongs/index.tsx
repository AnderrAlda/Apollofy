import { HeartIconBtn } from "../../../common/icons/heartIconBtn";



export function ListOfSongs() {
  return (
    <section>
      <div className="flex relative">
        <div>
          <p className="ml-7 mt-5 text-white">Song Name</p>
          <p className="ml-7 text-sm text-white">Artist Name</p>
        </div>
        <HeartIconBtn />
      </div>
    </section>
  );
}
