export  const worker = () => {
    setInterval(() => {
        postMessage(60);
    }, 1000);
}