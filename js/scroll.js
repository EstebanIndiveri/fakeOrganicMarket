export const scroll = (component) => {
    if(component){
        const section = document.querySelector( component );
        if(section){
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            const ready=document.querySelector(component);
            ready.classList.add('animate__flipInX');

        }
    };
};
