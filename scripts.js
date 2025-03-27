
document.addEventListener('DOMContentLoaded', () => {
 
    const elements = {
        petButtons: document.querySelectorAll('.btn-full'),
        petAllButton: document.querySelector('#btn-select-all'),
        unpetAllButton: document.querySelector('#btn-unselect-all'),
        navigationButtons: {
            first: document.querySelector('#btn-select-first'),
            last: document.querySelector('#btn-select-last'),
            next: document.querySelector('#btn-select-next'),
            previous: document.querySelector('#btn-select-previous')
        },
        siteLogo: document.querySelector('.banner-content'),
        galleryCards: document.querySelectorAll('.card')
    };

    
    const state = {
        currentCardIndex: 0
    };

   
    const handlePetInteraction = () => {
        elements.petButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const icon = event.currentTarget.querySelector('i');
                icon.classList.toggle('fa-regular');
                icon.classList.toggle('fa-solid');
            });
        });
    };

   
    const setupGlobalPetControls = () => {
        elements.petAllButton.addEventListener('click', () => {
            elements.petButtons.forEach(button => {
                const icon = button.querySelector('i');
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            });
        });

        elements.unpetAllButton.addEventListener('click', () => {
            elements.petButtons.forEach(button => {
                const icon = button.querySelector('i');
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            });
        });
    };

    const setupCardNavigation = () => {
        const updateCardHighlight = () => {
            elements.galleryCards.forEach(card => {
                card.classList.remove('card-selected', 'active');
            });
            elements.galleryCards[state.currentCardIndex].classList.add('card-selected', 'active');
        };

       
        elements.navigationButtons.first.addEventListener('click', () => {
            state.currentCardIndex = 0;
            updateCardHighlight();
        });

        elements.navigationButtons.last.addEventListener('click', () => {
            state.currentCardIndex = elements.galleryCards.length - 1;
            updateCardHighlight();
        });

        elements.navigationButtons.next.addEventListener('click', () => {
            state.currentCardIndex = (state.currentCardIndex + 1) % elements.galleryCards.length;
            updateCardHighlight();
        });

        elements.navigationButtons.previous.addEventListener('click', () => {
            state.currentCardIndex = (state.currentCardIndex - 1 + elements.galleryCards.length) % elements.galleryCards.length;
            updateCardHighlight();
        });

      
        updateCardHighlight();
    };

   
    const setupLogoAnimation = () => {
        elements.siteLogo.addEventListener('click', () => {
            elements.siteLogo.classList.add('animate__animated', 'animate__bounce');
            
            elements.siteLogo.addEventListener('animationend', () => {
                elements.siteLogo.classList.remove('animate__animated', 'animate__bounce');
            }, { once: true });
        });
    };

    
    const initializeInteractions = () => {
        handlePetInteraction();
        setupGlobalPetControls();
        setupCardNavigation();
        setupLogoAnimation();
    };

    
    initializeInteractions();
});