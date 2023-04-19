import React from "react";

const test = () => {
  const users = ["Muster", "Pascal", "Jessica"];
  return (
    <main className="dark">
      <h2 className="text-4xl text-center py-8 font-bold">Grid</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-primary text-white h-24">
          <p>First Grid Item</p>
        </div>
        <div className="bg-red text-white h-full col-span-2 row-span-2">
          <p>Second Grid Item</p>
        </div>
        <div className="bg-dark text-white h-24">
          <p>Third Grid Item</p>
        </div>

        <div className="bg-light text-white h-24">
          <p>Fourth Grid Item</p>
        </div>
      </div>

      <h2 className="text-4xl text-center py-8 font-bold">Flexbox</h2>
      <div className="flex flex-wrap gap-4">
        <div className="bg-primary text-white h-28 flex-auto dark:bg-dark">
          <p>Flex item 1</p>
        </div>
        <div className="bg-red text-white h-28 flex-auto dark:bg-dark">
          <p>Flex item 2</p>
        </div>
        <div className="bg-dark text-white h-28 flex-auto dark:bg-dark">
          <p>Flex item 3</p>
        </div>
      </div>

      <h2 className="text-4xl text-center py-8 font-bold">Animation</h2>
      <div className="w-4/5 mx-auto text-center py-12">
        <a
          href="/"
          className="bg-red-500 text-white py-4 px-8 rounded-full text-xl hover:bg-white hover:border-2 hover:border-red hover:text-red transition-color duration-1000 delay-500"
        >
          Click me!
        </a>
      </div>

      <h2 className="text-4xl text-center py-8 font-bold">Responsive</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-primary text-white h-24 sm:hidden md:block text-shadows">
          <p>First Grid Item</p>
        </div>
        <div className="bg-red text-white h-24">
          <p>Second Grid Item</p>
        </div>
        <div className="bg-dark text-white h-24">
          <p>Third Grid Item</p>
        </div>
        <div className="bg-light text-dark h-24">
          <p>Fourth Grid Item</p>
        </div>
      </div>

      <h2 className="text-4xl text-center py-8 font-bold">Repeat</h2>

      <div className="flex border-2 justify-around ">
        {[
          ["Home", "/dashboard"],
          ["Team", "/team"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 "
          >
            {title}
          </a>
        ))}
      </div>
    </main>
  );
};

export default test;
