import { Card } from "@/app/components/card";
import { Navigation } from "@/app/components/nav";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function threadsPage(){
    
    return(
        <div className="bg-gradient-to-tl flex items-start pt-24 justify-center h-max from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-14">
            <Navigation />
            <div className="w-9/12 max-[768px]:w-full flex flex-wrap justify-around">
                <div className="w-full flex content-center items-center justify-between">
                    <h2 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
                        Threads
                    </h2>
                    <Link href="/project/security"
                        className="duration-200 flex content-center items-center text-zinc-300 hover:text-zinc-100">
                            <p className="leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Security</p>
                            <ArrowRight className="w-6 h-6 " />
                    </Link>
                </div>
                <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                <div className="w-11/12 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <Image src="/threads.png" width={1500} height={300} alt="Ia Picture" className="rounded-xl"></Image>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Malware
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Malicious software designed to damage or compromise a system.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Spyware
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Spies on the user, collecting sensitive information such as passwords and banking data.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Phishing
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Attacks that attempt to trick users into revealing sensitive information, often through fraudulent emails that mimic trusted sources.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Denial-of-Service Attacks (DDoS)
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300"> Intentional overload of a service or network, making it inaccessible to legitimate users.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Social Engineering Attacks
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Techniques that exploit trust or human error to gain access to information or systems. This can include phone calls or messages pretending to be tech support or other authority figures.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Brute Force Attacks
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Automated attempts to discover passwords by trying various combinations until the correct one is found.</p>
                        </article>
                    </Card>
                </div>
            </div>
        </div>
    )
}