
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
};