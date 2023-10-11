import Particles from './ParticlesBg.jsx';
import Image from 'next/image';

const Home = () => {
    return (
        <>
            <Particles />
            <div class="mt-24 border border-black grid grid-cols-2">
                <div class="mx-auto">
                    <Image
                        src="/dylan-portrait.webp"
                        width={100}
                        height={0}
                        alt="Picture of Author"
                    />
                </div>
                <div class="border border-black text-center my-auto bg-blue-600 mx-2 h-30">
                    <div class="font-bold">
                        DYLAN ST. HILAIRE
                    </div>
                    <div>
                        Software Engineer
                    </div>
                    <div>
                        Full-Stack Developer
                    </div>
                </div>
            </div>
            <div class="text-center">
                Introduction
            </div>
            <div class="text-center">
                LinkedIn - GitHub
            </div>
            <div class="text-center">
                Contact Button
            </div>
        </>
    )
}

export default Home