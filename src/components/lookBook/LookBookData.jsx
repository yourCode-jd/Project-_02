import Image from "next/image";
import LookBookImgData from "./LookBookImgData";

function LookBookData() {
  return (
    <>
      {LookBookImgData.map((item) => (
        <li key={item.id} className="border border-grey-100 ">
          <div className="w-[200px] h-[200px] max-w-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={item.img}
              width={200}
              height={200}
              alt={item.title}
            />
          </div>
        </li>
      ))}
    </>
  );
}

export default LookBookData;
