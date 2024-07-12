import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/maxwitdhwrapper";
import Phone from "@/components/phone";
import { Reviews } from "@/components/reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CheckIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper classname="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4 ">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block ">
                <img src="/CaseomeLogo.png" className="w-full h-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Memories on a{" "}
                <span className="bg-yellow-400 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture Your Favorite People with Your own
                <span className="font-semibold"> Customized</span> Phone Case.
                Caseome helps you to create your own Memories while keeping your
                phone safe and secure.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start ">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <CheckIcon className="h-5 w-5 shrink-0 text-green-500" />
                    High Quality, Polymer Phone Case Material for Your IPhone.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <CheckIcon className="h-5 w-5 shrink-0 text-green-500" />
                    Water-Proof, Shock Proof with Anti-Slip Design Case for Your
                    IPhone.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <CheckIcon className="h-5 w-5 shrink-0 text-green-500" />
                    High Quality Printing Material, Non-Pixelated Phone Case
                    Design for Your IPhone.
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/iroha.jpeg"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/karina2.jpg"
                    alt="user2 image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/ning.jpg"
                    alt="user3 image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/minju.jpg"
                    alt="user4 image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/moka.jpg"
                    alt="user5 image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start ">
                  <div className="flex gap-0.5 ">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>

                  <p>
                    <span className="font-semibold">5,000 </span>
                    Satisfied Customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/urimage.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hiddn sm:block lg:hidden xl:block"
              />
              <img
                src="line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/haerin.jpeg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Value Proposition Section  */}

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper classname="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Our{" "}
              <span className="relative px-2">
                Customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              Reviews
            </h2>
            <img src="/CaseomeLogo.png" className="w-24 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  The Caseome is the perfect solution for your Slippery IPhone.,
                  <span className="ml-2 mr-2 p-0.5 bg-slate-800 text-white">
                    And The Image is High Quality, Not Pixelated,
                  </span>
                  And the Case Never Fades, It's Been 10 Months and the Picture
                  is Clear.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/moka.jpg"
                  className="rounded-full h-12 w-12 object-cover"
                  alt="user-review"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Moka Sakai もか</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <CheckIcon className="h-4 w-4 stroke-[3px] text-yellow-500" />
                    <p className="text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  Very Durable and Long Lasting,
                  <span className="ml-2 mr-2 p-0.5 bg-slate-800 text-white">
                    It Prevents the Phone from Damage.
                  </span>
                  When I Dropped It The Case only have Minor Scratches and the
                  Phone is in Perfect Condition.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/wonhee.jpeg"
                  className="rounded-full h-12 w-12 object-cover"
                  alt="user-review"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Wonhee Lee 이원희</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <CheckIcon className="h-4 w-4 stroke-[3px] text-yellow-500" />
                    <p className="text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section className="">
        <MaxWidthWrapper classname="py-24 ">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload Your Photo and Get{" "}
                <span className="relative px-2 text-yellow-400">
                  Your OWN{" "}
                  <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
                </span>{" "}
                Case
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative h-80 md:h-full wfull md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/wonyoung.jpg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>

              <Phone className="w-60" imgSrc="/wonyoung.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <CheckIcon className="h-5 w-5 text-yellow-400 inline mr-1.5" />
              High Quality, Polymer Phone Case Material.
            </li>
            <li className="w-fit">
              <CheckIcon className="h-5 w-5 text-yellow-400 inline mr-1.5" />
              Water-Proof Technology with Silicon Bonded Material.
            </li>
            <li className="w-fit">
              <CheckIcon className="h-5 w-5 text-yellow-400 inline mr-1.5" />
              High Definition Image Printed with High-Quality 3D Printing
              Material.
            </li>
            <li className="w-fit">
              <CheckIcon className="h-5 w-5 text-yellow-400 inline mr-1.5" />
              Anti Slip Design with rough silicone surface.
            </li>

            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                {" "}
                Create Your Memories Now{" "}
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
