'use client'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import TestimonalBubble from './TestimonalBubble'
import HeadingAndSubHeading from './HeadingAndSubHeading'

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true })

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="pt-[70px] mt-[70px]">
      <HeadingAndSubHeading HeadLabel="Testimonials" SubHeadLabel={<p className='w-[473px]'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>}/>
      <div className="w-full h-[625px] rounded-[45px] flex items-center bg-dark text-white">
        <div className="w-full flex flex-col gap-[124px]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom -ml-[50px]">
              {Array.from({ length: 5 }).map((_, index) => (
                  <TestimonalBubble key={index} className='snap-center snap-always pl-[50px]'/>
              ))}
            </div>
          </div>
          <div className="w-[564px] flex self-center justify-between items-center">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              
            <div className="w-[146px] flex gap-[19px]">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={index === selectedIndex ?  "fill-green": "fill-white"}
                />
              ))}
            </div>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
