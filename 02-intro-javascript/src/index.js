const getImage=async ()=>{
    const apiKey='urkEobvHn5kRdd8vderabjmWAHhYiEPC';
    const response=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data}=await response.json();
    return data.images.original.url;
};

getImage().then(url=>{
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
});
