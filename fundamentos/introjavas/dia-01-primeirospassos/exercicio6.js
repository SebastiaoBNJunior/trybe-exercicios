let pieceXadrez = "Bispo";

switch (pieceXadrez) {
    case "Peao":
    console.log("Pode andar 2 casas para frente");
    break;

    case "Torre":
    console.log("Pode se mover quantas casas quiser no angulo X e Y");
    break;

    case "Bispo":
    console.log("Pode se mover quantas casas qusar em diagonal");
    break;

    case "Rei":
    console.log("Pode andar 1 casa em qualquer direção");
    break;

    case "Rainha":
    console.log("Pode se mover quantas casa quiser em diagonal e no eixo X e Y");
    break;
    
    case "Cavalo":
    console.log("Pode se mover em formato de L");
    break;
}