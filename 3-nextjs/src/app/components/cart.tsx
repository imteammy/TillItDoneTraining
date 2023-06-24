/* eslint-disable @next/next/no-img-element */
export const Cart = (props: { title: string; description?: string ,src?:string}) => {
  return (
    <>
      <div className="card max-w-xs rounded-3xl bg-[#F8F8F8] p-3 drop-shadow-md shadow-slate-700">
        <div className="">
          <img
            className="mt-2 aspect-video rounded-[2.1rem] object-cover px-2 drop-shadow-md shadow-slate-700"
            src={props.src??'https://shorturl.at/fwyNX'}
            alt="image"
          />

          <h1 className="text-2xl mt-2 text-black ml-2"> {props.title} </h1>
          <p className="text-lg  text-black ml-2"> {props.description} </p>

          <div>
            <p className="ml-2 h-7 w-7 mt-4 rounded-full bg-[#482FE2]"></p>
          </div>
        </div>
      </div>
    </>
  );
};
