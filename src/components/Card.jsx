import cardImage from '../assets/images/image-equilibrium.jpg';
import eyeIcon from '../assets/images/icon-view.svg';
import clockIcon from '../assets/images/icon-clock.svg';
import ethereumIcon from '../assets/images/icon-ethereum.svg';
import autorImage from '../assets/images/image-avatar.png';

export default function Card() {
    return (
        <main className='font-outfit rounded-2xl bg-card-bg w-[327px] md:w-[350px] h-[543px] md:h-[596px] p-6 flex flex-col items-stretch gap-4 shadow-card'>
            <div className="relative group cursor-pointer">
                <img
                    id='cardImage'
                    className='rounded-lg transition-transform duration-300 hover:scale-105 hover:opacity-90'
                    src={cardImage}
                    alt="NFT Image"
                />
                <div className='absolute inset-0 bg-transparent group-hover:bg-cyan opacity-[0.503] rounded-lg transition-colors duration-300' />
                <img
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block'
                    src={eyeIcon}
                    alt="Eye Icon"
                />
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex flex-col items-start gap-[12px] md:gap-4'>
                    <h1 className='text-[22px] text-white font-semibold hover:text-cyan cursor-pointer transition-colors'>Equilibrium #3429</h1>
                    <h2 className='text-lg text-soft-blue font-light'>Our Equilibrium collection promotes balance and calm.</h2>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1.5'>
                        <img className='h-[18px]' src={ethereumIcon} alt="NFT Ethereum Icon" />
                        <p className='text-[15px] md:text-base text-cyan font-semibold'>0.041 ETH</p>
                    </div>

                    <div className='flex items-center gap-1.5'>
                        <img className='h-[16px]' src={clockIcon} alt="Clock Icon" />
                        <p className='text-[15px] md:text-base text-soft-blue font-normal'>3 days left</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <hr className="h-[1px] border-line" />
                    <div className='flex items-center gap-4'>
                        <img className='w-8 h-8 border border-white rounded-full' src={autorImage} alt="Jules Wyvern - Avatar" />
                        <p className='text-[15px] md:text-base text-soft-blue font-normal'>Creation of <span className='text-white hover:text-cyan transition-colors cursor-pointer'>Jules Wyvern</span></p>
                    </div>
                </div>
            </div>
        </main>
    );
}
