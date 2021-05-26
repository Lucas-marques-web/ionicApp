import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {
      viagens:object[]=[];
  constructor() {
    let viagem ={
      local:"Dubai",
      descricao:"Dubai é uma cidade e um emirado dos Emirados Árabes Unidos conhecida pelos shoppings de luxo, pela arquitetura ultramoderna e pela animada vida noturna. Burj Khalifa, uma torre de 830 metros de altura, domina a linha do horizonte repleta de arranha-céus. Na base, há a Fonte de Dubai, com jatos de água e luzes coreografados ao som de música. Nas ilhas artificiais próximas à costa, fica o Hotel Atlantis, um resort com parques aquáticos e de animais marinhos",
      data:"1/04/2018",
      imagem:"https://www.segueviagem.com.br/wp-content/uploads/2020/07/shutterstock_151616084-1024x684.jpg"
    }
    let viagem2 ={
      local:"Paris",
      descricao:"Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é cortada por avenidas largas e pelo rio Sena. A cidade é conhecida por monumentos como a Torre Eiffel e a Catedral de Notre-Dame, uma construção gótica do século XII, sendo famosa também pela cultura dos cafés e por lojas de estilistas famosos na Rue du Faubourg Saint-Honoré",
      data:"30/06/2022",
      imagem:"https://veja.abril.com.br/wp-content/uploads/2016/05/alx_lista-capitais-europa-mundo-20100806-002_original3.jpeg?quality=70&strip=info&resize=680,453"
   }
   {
    this.viagens.push(viagem);
    this.viagens.push(viagem2);
   
}
   }
    
  ngOnInit() {
  }

}
