function lojaPaintings(array){
    let divPagina = document.querySelector(".pagina");

     
        let body = document.querySelector("body");

        let divPaitings = document.createElement("div");
        divPaitings.classList.add("painting");
        
        let h3Paintings = document.createElement("h3");
        h3Paintings.innerText = "Paintings"
        divPaitings.appendChild(h3Paintings);

        let ulPaintings = document.createElement("ul");
        ulPaintings.classList.add("listaPaintings");
        divPaitings.appendChild(ulPaintings)

        body.appendChild(divPaitings);


        for (let i = 0; i < array.length; i++){
        

            let liProduto = document.createElement("li");

            let painting = array[i];

            let imgPainting = document.createElement("img");
            imgPainting.src = painting.img;
            imgPainting.alt = painting.name;
            imgPainting.classList.add("produtoInd");
            liProduto.appendChild(imgPainting);
            
            let pNome = document.createElement("p");
            pNome.innerText = painting.name;
            pNome.classList.add("titulos");
            liProduto.appendChild(pNome);

            let pPrice = document.createElement("p");
            pPrice.innerText = painting.price;
            pPrice.classList.add("preco");
            liProduto.appendChild(pPrice);

            ulPaintings.appendChild(liProduto);
        
    }
}
lojaPaintings(arrPainting);





function lojaActionFigure(array){
    let divPagina = document.querySelector(".pagina");

     
        let body = document.querySelector("body");

        let divActionFigure = document.createElement("div");
        divActionFigure.classList.add("actionFigure");
        
        let h3ActionFigure = document.createElement("h3");
        h3ActionFigure.innerText = "Action Figures"
        divActionFigure.appendChild(h3ActionFigure);

        let ulActionFigure = document.createElement("ul");
        ulActionFigure.classList.add("listaActionFigure");
        divActionFigure.appendChild(ulActionFigure)

        body.appendChild(divActionFigure);
        

        for (let i = 0; i < array.length; i++){
        

            let liProduto = document.createElement("li");

            let actionFigure = array[i];

            let imgActionFigure = document.createElement("img");
            imgActionFigure.src = actionFigure.img;
            imgActionFigure.alt = actionFigure.name;
            imgActionFigure.classList.add("produtoInd");
            liProduto.appendChild(imgActionFigure);
            
            let pNome = document.createElement("p");
            pNome.innerText = actionFigure.name;
            pNome.classList.add("titulos");
            liProduto.appendChild(pNome);

            let pPrice = document.createElement("p");
            pPrice.innerText = actionFigure.price;
            pPrice.classList.add("preco");
            liProduto.appendChild(pPrice);

            ulActionFigure.appendChild(liProduto);
        
    }
}
lojaActionFigure(arrActionFigure);