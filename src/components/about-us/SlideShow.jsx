import {useState, useEffect} from 'react';
import {Box, Flex, Image, IconButton} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
    { src: '/assets/slideshow/1.jpg', alt: 'Slide 1'},
    { src: '/assets/slideshow/2.jpg', alt: 'Slide 2'},
    { src: '/assets/slideshow/3.jpg', alt: 'Slide 3'},
    { src: '/assets/slideshow/4.jpg', alt: 'Slide 4'},
    { src: '/assets/slideshow/5.jpg', alt: 'Slide 5'},
    { src: '/assets/slideshow/6.jpg', alt: 'Slide 6'},
    { src: '/assets/slideshow/7.jpg', alt: 'Slide 7'}
];

export const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); 
        }, 4000);

        return () => clearInterval(interval); //Limpieza del intervalo al desmontar el componente
    }, []);

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    return (
        <Box position="relative" width="full" height="400px" overflow="hidden">
            <Flex
                width="full"
                height="full"
                transition="transform 0.5s ease-in-out"
                transform={`translateX(-${currentIndex * 100}%)`}
            >
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        flex="none"
                        boxSize="full"
                        backgroundSize="cover"
                        backgroundPosition="center"
                    >
                        <Image src={slide.src} alt={slide.alt} boxSize="full" objectFit="cover" />
                    </Box>
                ))}
            </Flex>

            <IconButton
                aria-label="Previous Slide"
                icon={<FaChevronLeft color='#cb6ce6' />}
                position="absolute"
                top="50%"
                left="0"
                transform="translateY(-50%)"
                backgroundColor='transparent'
                _hover="none"
                _active="none"
                onClick={prevSlide}
                zIndex="1"
            />

            <IconButton
                aria-label="Next Slide"
                icon={<FaChevronRight color='#cb6ce6' />}
                position="absolute"
                top="50%"
                right="0"
                transform="translateY(-50%)"
                backgroundColor='transparent'
                _hover="none"
                _active="none"
                onClick={nextSlide}
                zIndex="1"
            />
        </Box>
    );
}