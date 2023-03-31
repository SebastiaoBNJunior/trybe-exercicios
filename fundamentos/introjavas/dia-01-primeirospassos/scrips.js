let statusNota = "Aprovada";

switch (statusNota) {
    case "Aprovada":
    console.log("Parabéns, voce está no grupo de pessoas aprovadas!");
    break;

    case "Lista":
    console.log("Voce esta na nosa lista de espera");
    break;

    case "Reprovada":
    console.log("Infelizmente, voce reprovou");
    break;

    default:
    console.log("Informação incorreta");
}