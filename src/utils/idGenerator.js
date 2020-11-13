const idGenerator = () => Math.round(Math.random()*10e6+Date.now()%10e6);

export default idGenerator;
