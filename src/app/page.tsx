import Image from "next/image";
import { Button } from "./_components/button";

export default function Home() {
  return (
    <>
      <section className="border-2 bg-yellow-300 bg-hero-pattern bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left">
        <div className="container flex flex-col-reverse items-center xl:flex-row">
          <div className="border-4 border-red-500 flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right xl:text-2xl">
            <h3 className=" text-xl dark:text-info">خوش اومدی به ...</h3>
            <h1 className="gradient text-3xl font-black lg:text-3xl xl:text-5xl">
              مسیر صعود به قله های برنامه نویسی
            </h1>
            <p className="text-lg font-bold leading-8">
              {" "}
              هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
              کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
              هواتو داریم.
            </p>

            <Button variant="accent" shape="square" size="small">
              دوره های ری اکت ونکست
            </Button>
            <Image
              src="/images/frameworks.png"
              width={412}
              height={39}
              alt=""
              className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            />
          </div>
          <div className="border-4 border-green-500">
            <Image
              src="/images/programmer-landing.svg"
              width={702}
              height={521}
              alt="کلاسبن"
            />
          </div>
        </div>
      </section>
    </>
  );
}
