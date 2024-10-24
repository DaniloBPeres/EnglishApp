"use client";

import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import Image from 'next/image';


export default function ProjectPage(){

    return(
        <div className="bg-gradient-to-tl flex items-start pt-24 justify-center h-max from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-14">
            <Navigation />
            <div className="animate-fade-in duration-200 w-9/12 max-[768px]:w-full max-[768px]: p-4">
                <div className="w-full">
                    <h2 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
                        Digital Security
                    </h2>
                </div>
                <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                <div className="w-full flex flex-wrap">
                    <div className="w-1/2 mb-6 flex max-[768px]:w-full">
                        <Image src="/iateste.jpg" width={650} height={500} alt="Ia Picture" className="rounded-xl"></Image>
                    </div>
                    <div className="w-1/2 mb-6 max-[768px]:w-full">
                        <Card>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    Introduction
                                </h1>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                Digital security has become a highly relevant field of study in the current era, where everything is driven by technology. It enables the protection of data and financial information, application security, endpoint security, cloud security, and prevention of unauthorized access. The most common aspects of data protection include cyber threats, encryption, authentication and authorization, firewall and network monitoring, software security and patches, backups and disaster recovery, compliance and security policies, user education and awareness, and cloud security.
                                We can understand cyber threats as malicious activities aimed at compromising, damaging, or gaining unauthorized access to systems, networks, data, or digital devices. These threats can be conducted by individuals, groups, or even states, usually with the intent of data theft, service disruption, financial gain, or espionage.
                                </p>
                            </article>
                        </Card>
                    </div>
                    <div className="w-full mb-6">
                        <Card>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                    The most common types are:
                                </h1>
                                <div className="mb-4 flex justify-between">
                                    <Link href="/project/malware" className="mb-4 bg-transparent font-display text-2xl p-4 border font-bold text-white border-zinc-600 rounded-xl">
                                        Malware
                                    </Link>
                                    <Link href="/project/malware" className="mb-4 bg-transparent font-display text-2xl p-4 border font-bold text-white border-zinc-600 rounded-xl">
                                        Spyware
                                    </Link>
                                    <Link href="/project/malware" className="mb-4 bg-transparent font-display text-2xl p-4 border font-bold text-white border-zinc-600 rounded-xl">
                                        Phishing
                                    </Link>
                                    <Link href="/project/malware" className="mb-4 bg-transparent font-display text-2xl p-4 border font-bold text-white border-zinc-600 rounded-xl">
                                        DDoS
                                    </Link>
                                    <Link href="/project/malware" className="mb-4 bg-transparent font-display text-2xl p-4 border font-bold text-white border-zinc-600 rounded-xl">
                                        Social Engineering Attacks
                                    </Link>
                                    <Link href="/project/malware" className="mb-4 bg-transparent font-display text-2xl p-4 border font-bold text-white border-zinc-600 rounded-xl">
                                        Brute Force Attacks
                                    </Link>
                                </div>
                            </article>
                        </Card>
                    </div>
                    <div className="w-1/2 mb-6 max-[768px]:w-full">
                        <Card>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    Encryption
                                </h1>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Encryption plays a crucial role in digital security, providing a foundation for data protection in various contexts, such as communications, online transactions, user authentication, and sensitive data storage. With the rise in cyber threats, encryption has become an essential tool for protecting privacy and ensuring information security. However, encryption security also depends on factors such as the strength of cryptographic keys (the longer and more complex the key, the harder it is to break) and the correct use of appropriate algorithms. Some of its functions are:
                                </p>
                            </article>
                        </Card>
                    </div>
                    <div className="w-1/2 mb-6 flex justify-end max-[768px]:w-full">
                        <Image src="/iateste.jpg" width={650} height={500} alt="Ia Picture" className="rounded-xl"></Image>
                    </div>
                    <div className="mb-4 w-full">
                        <Card>
                            <Link href="/project/malware">
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <h1 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white font-display mb-4">
                                        Confidentiality:
                                    </h1>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        Encryption prevents unauthorized third parties from reading the information. Only those who have the correct key can decrypt and access the data.
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    </div>
                    <div className="mb-4 w-full">
                        <Card>
                            <Link href="/project/malware">
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <h1 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white font-display mb-4">
                                        Authenticity:
                                    </h1>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        By using digital signatures and cryptographic keys, it’s possible to verify that a message or file actually came from the claimed source, preventing forgeries.
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    </div>
                    <div className="mb-4 w-full">
                        <Card>
                            <Link href="/project/malware">
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <h1 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white font-display mb-4">
                                        Non-Repudiation:
                                    </h1>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        In some cases, such as with digital signatures, encryption can ensure that the sender of a message cannot later deny that they sent it, creating a reliable audit trail.
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}