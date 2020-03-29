import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  console.log(characters);
  //
  //
  
  const view = `
  
    <div class="Characters">
      ${characters.map(character => `
        <article >
        
        <div class="Characters-item">
             
                <img src="${character.download_url}" alt="${character.author}">
             
            <div class="Characters-item__details">
              <h1>${character.id}</h1>
              <img src="" alt="">
              <h2>${character.author}</h2>
            </div>
          <div/>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;